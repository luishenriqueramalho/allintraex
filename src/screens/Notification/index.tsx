import NavigationBar from "@/components/NavigationBar";
import { Wrapper } from "@/utils/global";
import React from "react";
import { Text } from "react-native";

const Notification: React.FC = () => {
  return (
    <>
      <NavigationBar title="Notificações" />
      <Wrapper>
        <Text>Notification</Text>
      </Wrapper>
    </>
  );
};

export default Notification;
