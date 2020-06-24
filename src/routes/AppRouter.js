import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from '../DashboardRoutes';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={ LoginScreen } />
          <Route path={`${process.env.PUBLIC_URL}/`} component={ DashboardRoutes } />
        </Switch>
      </div>
      
    </Router>
    
  )
}
