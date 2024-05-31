import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { Content } from "./styles";
import TabOption from "../TabOption";
import Profile from "@/screens/Profile";
import Dashboard from "@/screens/Dashboard";
import About from "@/screens/About";
import Notice from "@/screens/Notice";
import {
  AboutMenu,
  DashboardMenu,
  NewPaperMenu,
  ProfileMenu,
  WalletMenu,
} from "@/assets/svg";
import Wallet from "@/screens/Wallet";
import Home from "@/screens/Home";

interface BottomTabProps {
  changeScreen: (screen: React.ReactNode) => void;
}

const BottomTab: React.FC<BottomTabProps> = ({ changeScreen }) => {
  const [selectedTab, setSelectedTab] = useState<string>("Home");

  return (
    <>
      <Content>
        <TabOption
          title="Profile"
          icon={<ProfileMenu isSelected={selectedTab === "Profile"} />}
          onPress={() => {
            changeScreen(<Profile />);
            setSelectedTab("Profile");
          }}
          isSelected={selectedTab === "Profile"}
        />
        <TabOption
          title="Notice"
          icon={<NewPaperMenu isSelected={selectedTab === "Notice"} />}
          onPress={() => {
            changeScreen(<Notice />);
            setSelectedTab("Notice");
          }}
          isSelected={selectedTab === "Notice"}
        />
        <TabOption
          title="Home"
          icon={<DashboardMenu isSelected={selectedTab === "Home"} />}
          onPress={() => {
            changeScreen(<Home />);
            setSelectedTab("Home");
          }}
          isSelected={selectedTab === "Home"}
        />
        <TabOption
          title="Wallet"
          icon={<WalletMenu isSelected={selectedTab === "Wallet"} />}
          onPress={() => {
            changeScreen(<Wallet />);
            setSelectedTab("Wallet");
          }}
          isSelected={selectedTab === "Wallet"}
        />
        <TabOption
          title="About"
          icon={<AboutMenu isSelected={selectedTab === "About"} />}
          onPress={() => {
            changeScreen(<About />);
            setSelectedTab("About");
          }}
          isSelected={selectedTab === "About"}
        />
      </Content>
      <SafeAreaView />
    </>
  );
};

export default BottomTab;
