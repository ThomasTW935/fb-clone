import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.css";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Watch from "./pages/Watch";
import Group from "./pages/Group";
import { useAuth } from "./context/AuthContext";
import Login from "./components/authentication/Login";

export default function App() {
  const { currentUser } = useAuth();
  return (
    <div>
      <Router>
        {currentUser && (
          <>
            <NavBar />
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Watch} path="/watch" />
              <Route component={Marketplace} path="/marketplace" />
              <Route component={Group} path="/group" />
            </Switch>
          </>
        )}
        {!currentUser && (
          <div>
            <Login />
          </div>
        )}
      </Router>
    </div>
  );
}
