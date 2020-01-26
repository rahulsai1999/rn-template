import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Login from "./pages/login";
import Signup from "./pages/signup";

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login" initial={true} />
        <Scene key="signup" component={Signup} title="About" />
      </Scene>
    </Router>
  );
};

export default Routes;
