import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import loadable from '@loadable/component';
const SignUp = loadable(() => import('@pages/SignUp'));
const Landing = loadable(() => import('@pages/Landing'));

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};

export default App;
