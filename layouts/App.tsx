import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import loadable from '@loadable/component'; // code spliting

const Calender = loadable(() => import('@pages/Calendar'));

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Calender}></Route>
      </Switch>
    </>
  );
};

export default App;
