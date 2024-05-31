import { StoreProvider } from "@/mobx/store";
import RootStackScreen from "@/navigators";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
