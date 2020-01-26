import React from "react";
import { View, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import { LView } from "../components/lottieView";

const goToSignup = () => {
  Actions.push("signup");
};

const Login = () => {
  return (
    <View>
      <LView />
      <Button title="Go to Signup" onPress={goToSignup}></Button>
    </View>
  );
};

export default Login;
