import React, { Component } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import style from "./styles";

const Input = ({ onChangeText, value }) => {
  return (
    <TextInput
      style={style.container}
      label="Enter City"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
