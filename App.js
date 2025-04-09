import React from "react";
import { SafeAreaView } from "react-native";
import FilterScreen from "./components/FilterScreen";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FilterScreen />
    </SafeAreaView>
  );
};

export default App;
