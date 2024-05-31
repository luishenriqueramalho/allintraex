import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Container, Logo, NamePeople, Profile } from "./styles";
import Allintra from "@/assets/imgs/allintraLogo.png";
import ProfilePicture from "@/assets/imgs/profile-picture.png";
import { Notification } from "@/assets/svg";

const NavigationBar: React.FC = ({ title }) => {
  return (
    <>
      <SafeAreaView />
      <Container>
        <Logo source={Allintra} />
        <View style={{ flexDirection: "row" }}>
          <Notification />
          <Profile source={ProfilePicture} />
        </View>
      </Container>
    </>
  );
};

export default NavigationBar;
