import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import { Navbar } from './components/ui/NavBar';

import { MarvelScreen } from './components/marvel/MarvelScreen';
import { DcScreen } from './components/dc/DcScreen';
import { HeroScreen } from './components/heroes/HeroScreen';
import { SearchScreen } from './components/search/SearchScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      
      <div className="container">
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/marvel`} component={ MarvelScreen } />
          <Route exact path={`${process.env.PUBLIC_URL}/dc`} component={ DcScreen } />
          <Route exact path={`${process.env.PUBLIC_URL}/hero/:heroId`} component={ HeroScreen } />
          <Route exact path={`${process.env.PUBLIC_URL}/search`} component={ SearchScreen } />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}
