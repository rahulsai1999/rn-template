import React, { useState } from "react";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { Input, Button, Icon, Text } from "@ui-kitten/components";
import Axios from "axios";

const voice_b = props => {
  return (
    <View>
      <Text>{props.medstring}</Text>
    </View>
  );
};

export default voice_b;