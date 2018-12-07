import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import DataContainer from "./Components/DataContainer";
import Navbar from "./Components/Navbar";
import ExtraDetail from "./Components/ExtraDetail";
import Logout from "./containers/Logout";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={DataContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/logout" component={Logout}/>
        <Route exact path="/school/:schoolname" component={ExtraDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
