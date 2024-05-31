import AnimatedSplash from "@/components/AnimatedSplash";
import Home from "@/screens/Home";
import HomeScreen from "@/screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Stack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="AnimatedSplash" component={AnimatedSplash} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
