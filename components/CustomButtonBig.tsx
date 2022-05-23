import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import React from "react";

const CustomButtonBig = ({ title }) => {
  return (
    <View style={styles.button}>
      <Text style={styles.btnText}>{title}</Text>
    </View>
  );
};

export default CustomButtonBig;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#CC23B6",
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
