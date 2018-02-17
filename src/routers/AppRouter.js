import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import App from '../components/Home';
import ProfessorPage from '../components/ProfessorPage';
import AddCommentView from '../components/AddCommentView';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header title='nonSense'/>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/professor/:id" component={ProfessorPage} />
        <Route path="/comment/:id" component={AddCommentView} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;