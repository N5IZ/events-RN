import {
  Button,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../../components/Themed";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types";
import { auth } from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const RegisterScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleRegister = () => {
    // GoogleAuthProvider.
  };
  return (
    <View style={styles.container}>
      <Button title="Register" onPress={handleRegister} />
      <TouchableHighlight onPress={() => navigation.navigate("Login")}>
        <Text>Already Have an account</Text>
      </TouchableHighlight>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {},
});
