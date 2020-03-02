import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import styles from "./styles";

const MyButton = ({ onPress }) => {
  return (
    <Button
      onPress={onPress}
      icon="trending-up"
      mode="contained"
      style={styles.container}
    >
      Search
    </Button>
  );
};
export default MyButton;
