import axios from "axios";
import { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    return auth.signOut();
  }
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }
  function updatePassword(password) {
    return currentUser?.updatePassword(password);
  }
  function updateProfile(name, photoUrl = null){
    return currentUser.updateProfile({displayName: name})
  }

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged( async (user) => {
      if(user){
        const response = await axios.get(`/api/users/${user.uid}`)
        console.log(response.data)
        user["name"] = response.data.name
      }
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubcribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateProfile
  };
  return (
    <AuthContext.Provider value={value}>
    {!loading && children}
    </AuthContext.Provider>
  );
}
