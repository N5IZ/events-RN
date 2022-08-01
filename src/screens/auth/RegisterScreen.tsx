import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Text, View } from "../../components/Themed";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types";
import Logo from "../../../assets/images/icon.png";
import CustomInput from "../../components/CustomInput";
import CustomButtonBig from "../../components/CustomButtonBig";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = () => {
  const [username, setUsername] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const { height } = useWindowDimensions();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const _handleRegister = async () => {
    await createUserWithEmailAndPassword(
      auth,
      email as string,
      password as string
    )
      .then(() => navigation.navigate("Login"))
      .catch((error) => alert(error));
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />
          <CustomInput
            value={username}
            setValue={setUsername}
            placeholder="Enter your username"
            inputText="Username "
            icon="face-man-profile"
          />
          <CustomInput
            value={email}
            setValue={setEmail}
            placeholder="Enter your Email Address"
            inputText="Email "
            icon="email-outline"
          />
          <CustomInput
            value={password}
            setValue={setPassword}
            placeholder="Enter your password"
            secureTextEntry
            inputText="Password"
            icon="key-outline"
          />
          <CustomButtonBig title="Register" onPress={_handleRegister} />
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Already have an Account</Text>
            <Text style={{ marginLeft: 6, fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "20%",
    paddingTop: "3%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});
