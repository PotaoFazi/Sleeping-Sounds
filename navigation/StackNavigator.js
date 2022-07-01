import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { defaultColors } from "../Colors";
import TimerScreen from "../screens/TimerScreen";

const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: defaultColors.cardsBack,
        },
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
          headerShown: false,
        }}
      >
        <Stack.Screen name="timer" component={TimerScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
