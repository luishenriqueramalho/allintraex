import React, { useEffect } from "react";
import { Text, View } from "react-native";
import LottieView from "lottie-react-native";
import styled from "styled-components/native";
import { scale } from "@/utils/global";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "@/utils/colors";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.backgroundChart};
`;

const Title = styled.Text`
  font-size: ${scale(40)}px;
  font-weight: bold;
  color: black;
`;

export default function AnimatedSplash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 2000);
  }, [navigation]);

  return (
    <Container>
      <LottieView
        source={require("../../assets/animation/logo.json")}
        autoPlay
        loop
        style={{ width: 400, height: 400 }} // Adjust size as needed
      />
    </Container>
  );
}
