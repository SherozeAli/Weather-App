import React, { Component } from "react";
import Tab from "./app/components/TabNavigation/TabNavigation";
import { Provider } from "react-redux";
import store from "./app/config/store";
import { Text } from "react-native";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <Tab />
      </Provider>
    );
  }
}

export default App;
