import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import { Text } from "./Themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

interface CustomBtnBigProps {
  title: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
const CustomButtonBig = ({ title, onPress }: CustomBtnBigProps) => {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient style={styles.button} colors={["#CC23B6", "#B615DE"]}>
        <Text style={styles.btnText}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default CustomButtonBig;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginBottom: 20,
    marginTop: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
