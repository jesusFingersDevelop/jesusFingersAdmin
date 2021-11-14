import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import loadable from '@loadable/component'; // code spliting

const MonthCalender = loadable(() => import('@pages/MonthCalendar'));
const DayCalender = loadable(() => import('@pages/DayCalendar'));
const Login = loadable(() => import('@pages/Login'));

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/month" component={MonthCalender}></Route>
        <Route exact path="/day" component={DayCalender}></Route>
        <Route exact path="/" component={Login}></Route>
      </Switch>
    </>
  );
};

export default App;
