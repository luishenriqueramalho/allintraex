import BottomTab from "@/components/BottomTab";
import { HomeWrapper, LinearBg } from "@/utils/global";
import React, { useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import Home from "../Home";

const HomeScreen: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<React.ReactNode>(<Home />);
  const opacity = useRef(new Animated.Value(1)).current;

  const changeScreen = (screen: React.ReactNode) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setActiveScreen(screen);

      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <LinearBg
      colors={["#080E1C", "#080E1C"]}
      style={StyleSheet.absoluteFill}
      start={{ x: 4, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <HomeWrapper>
        <Animated.View style={{ flex: 1, opacity }}>
          {activeScreen}
        </Animated.View>
      </HomeWrapper>
      <BottomTab changeScreen={changeScreen} />
    </LinearBg>
  );
};

export default HomeScreen;
