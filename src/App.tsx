import React from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/main.css'
import Home from './pages/Home'
import Marketplace from './pages/marketplace'
import Watch from './pages/watch'
import Group from './pages/Group'

export default function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route component={Home} exact path='/'/>
          <Route component={Watch} path='/watch'/>
          <Route component={Marketplace} path='/marketplace'/>
          <Route component={Group} path='/group'/>
        </Switch>
      </Router>
    </div>
  )
}

