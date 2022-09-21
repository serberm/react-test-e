import React from "react";
import "./styles/app.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import EventProvider from "./context";
const App = () => {
  return (
    <EventProvider>
      <Router>
        <Routes />
      </Router>
    </EventProvider>
  );
};

export default App;
