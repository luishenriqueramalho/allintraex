import NavigationBar from "@/components/NavigationBar";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import {
  ButtonOption,
  FeedVw,
  Header,
  Line,
  PlusAdd,
  RollOptions,
  RowSelect,
  StrategyVw,
  TitleButton,
  TitleTab,
} from "./styles";
import { Wrapper } from "@/utils/global";
import { AddPlus } from "@/assets/svg";
import Strategy from "./Strategy";
import Dashboard from "../Dashboard";

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("strategy");

  return (
    <>
      <NavigationBar />
      <Header>
        <StrategyVw onPress={() => setSelectedTab("strategy")}>
          <TitleTab isSelected={selectedTab === "strategy"}>
            Estratégia
          </TitleTab>
        </StrategyVw>
        <FeedVw onPress={() => setSelectedTab("feed")}>
          <TitleTab isSelected={selectedTab === "feed"}>Feeds</TitleTab>
        </FeedVw>
      </Header>
      <Line />
      <Wrapper>
        <RowSelect>
          <ScrollView horizontal>
            <RollOptions>
              <ButtonOption>
                <TitleButton>All</TitleButton>
              </ButtonOption>
              <ButtonOption>
                <TitleButton>Minhas estratégias</TitleButton>
              </ButtonOption>
              <ButtonOption>
                <TitleButton>Investidos</TitleButton>
              </ButtonOption>
            </RollOptions>
          </ScrollView>
          <PlusAdd>
            <AddPlus />
          </PlusAdd>
        </RowSelect>
        {selectedTab === "strategy" ? <Strategy /> : <Dashboard />}
      </Wrapper>
    </>
  );
};

export default Home;
