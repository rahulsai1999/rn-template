import React from "react";
import { StyleSheet, View, Button } from "react-native";

import { PurpButton } from "./components/button";
import { LView } from "./components/lottieView";

const App = () => {
  return (
    <>
      <View>
        <LView />
        <Button title="Hello">Hello</Button>
      </View>
    </>
  );
};

export default App;
