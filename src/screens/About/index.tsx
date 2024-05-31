import NavigationBar from "@/components/NavigationBar";
import { Wrapper } from "@/utils/global";
import React from "react";
import { Text } from "react-native";

const About: React.FC = () => {
  return (
    <>
      <NavigationBar title="Sobre nós" />
      <Wrapper>
        <Text>About</Text>
      </Wrapper>
    </>
  );
};

export default About;
