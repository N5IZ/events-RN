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
    <Pressable onPress={onPress} style={styles.container}>
      <LinearGradient style={styles.button} colors={["#9A39FB", "#B615DE"]}>
        <Text style={styles.btnText}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default CustomButtonBig;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 10,
    width: 380,
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
