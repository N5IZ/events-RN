import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { View, Text } from "./Themed";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CustomInputProps extends TextInputProps {
  setValue?:
    | React.Dispatch<React.SetStateAction<String | undefined>>
    | ((text: string) => void)
    | undefined;
  inputText: String;
  icon: any;
}

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  inputText,
  icon,
}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>{inputText}</Text>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name={icon} size={24} color="white" />
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 50,
  },
  inputContainer: {
    backgroundColor: "#171717",
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    // borderColor: "#CC23B6",
    borderColor: "#2b2b2b",
    borderWidth: 3,
  },
  inputText: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "white",
    marginLeft: 10,
  },
});
