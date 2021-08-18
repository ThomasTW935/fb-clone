import React, { useState, useReducer } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Group, Watch, Marketplace, Profile } from './pages'
import { useAuth } from './auth/AuthContext'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import {
  PostContext,
  PostReducer,
  initialPostState,
} from './context/PostContext'
import { UIContext, UIReducer, initialUIState } from './context/UIContext'

export default function App() {
  const { currentUser } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [postState, postDispatch] = useReducer(PostReducer, initialPostState)
  const [uiState, uiDispatch] = useReducer(UIReducer, initialUIState)
  return (
    <>
      <UIContext.Provider value={{ uiState, uiDispatch }}>
        <PostContext.Provider value={{ postState, postDispatch }}>
          <Router>
            {currentUser && (
              <>
                <NavBar />
                <Switch>
                  <Route component={Home} exact path='/' />
                  <Route component={Profile} path='/:userId' />
                  <Route component={Watch} path='/watch' />
                  <Route component={Marketplace} path='/marketplace' />
                  <Route component={Group} path='/group' />
                </Switch>
              </>
            )}
            {(!currentUser || currentUser === undefined) && (
              <div>
                {isLogin ? (
                  <Login setIsLogin={setIsLogin} />
                ) : (
                  <Signup setIsLogin={setIsLogin} />
                )}
              </div>
            )}
          </Router>
        </PostContext.Provider>
      </UIContext.Provider>
    </>
  )
}
