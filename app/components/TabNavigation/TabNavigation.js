import React from "react";
import SearchCity from "../../screens/SearchCity";
import ShowWeather from "../../screens/ShowWeather";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

const TabNavigator = createBottomTabNavigator(
  {
    "Current City": ShowWeather,
    "Select City": SearchCity
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Current City") {
          iconName = `md-cloud`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === "Select City") {
          iconName = `ios-options`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "gray",
      activeBackgroundColor: "#6200ee",
      inactiveBackgroundColor: "#6200ee"
    }
  }
);

export default createAppContainer(TabNavigator);
