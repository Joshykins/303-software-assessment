import * as React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Nav from '../components/nav/nav';
import Assessment from '../pages/assessment/assessment';
import Home from '../pages/home/home';
import NotFound from '../components/404/404';

export const AppRouter = () => {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter> 
          <Nav/>
          {/*Switch component renders first match on route, if not, it renders not found page.*/}
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/assessment" exact component={Assessment}/>
            <Route component={NotFound} exact/>
          </Switch>
        </BrowserRouter>
      </React.Suspense>
    </>
  );
};
