import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            isAuthenticated={ user.logged }
            path="/login"
            component={ LoginScreen }
          />
          <PrivateRoute
            path="/"
            isAuthenticated={ user.logged }
            component={ DashboardRoutes }
          />
        </Switch>
      </div>
      
    </Router>
    
  )
}
