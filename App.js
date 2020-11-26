import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigation from "./routes/MainNavigation";

const fetchFont = () => {
  return Font.loadAsync({
    "PT-sans": require("./assets/fonts/PTSans-Regular.ttf"),
    "PT-sans-bold": require("./assets/fonts/PTSans-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
