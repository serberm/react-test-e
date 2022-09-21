import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import EventCreatePage from "./pages/EventCreatePage/EventCreatePage";
import EventPage from "./pages/EventPage/EventPage";

const Routes = () => {
    return (
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/create" exact component={EventCreatePage} />
        <Route path="/event" exact component={EventPage} />
      </Switch>
    );
};

export default Routes;
