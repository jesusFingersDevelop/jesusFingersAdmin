import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import loadable from '@loadable/component'; // code spliting

const Calender = loadable(() => import('@pages/Calendar'));
const Login = loadable(() => import('@pages/Login'));

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/PTId" component={Calender}></Route>
        <Route exact path="/" component={Login}></Route>
      </Switch>
    </>
  );
};

export default App;
