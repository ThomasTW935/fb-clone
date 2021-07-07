import React, { useState } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/main.css'
import { Home, Group, Watch, Marketplace } from './pages'
import { useAuth } from './auth/AuthContext'
import Login from '../src/components/authentication/Login'
import Signup from '../src/components/authentication/Signup'

export default function App() {
  const { currentUser } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div>
      <Router>
        {currentUser && (
          <>
            <NavBar />
            <Switch>
              <Route component={Home} exact path='/' />
              <Route component={Watch} path='/watch' />
              <Route component={Marketplace} path='/marketplace' />
              <Route component={Group} path='/group' />
            </Switch>
          </>
        )}
        {!currentUser && (
          <div className='authentication'>
            {isLogin ? (
              <Login setIsLogin={setIsLogin} />
            ) : (
              <Signup setIsLogin={setIsLogin} />
            )}
          </div>
        )}
      </Router>
    </div>
  )
}
