import React, { Component } from "react";
import { Appbar } from "react-native-paper";

const Header = ({ subtitle }) => {
  return (
    <Appbar.Header
    //   theme={{
    //     roundness: 2,
    //     colors: {
    //       primary: "orange",
    //       accent: "#f1c40f"
    //     }
    //   }}
    >
      <Appbar.Content
        style={{ alignItems: "center" }}
        title="Weather App"
        subtitle={subtitle}
      />
    </Appbar.Header>
  );
};
export default Header;
