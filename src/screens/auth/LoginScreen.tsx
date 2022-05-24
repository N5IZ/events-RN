import { View, Text } from "../../components/Themed";
import React, { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types";
import Logo from "../../../assets/images/icon.png";
import CustomInput from "../../components/CustomInput";
import CustomButtonBig from "../../components/CustomButtonBig";

const LoginScreen = () => {
  const [accessToken, setAccessToken] = useState<String>();
  const [email, setEmail] = useState<string | undefined>();
  const [username, setUsername] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const { height } = useWindowDimensions();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const _handleLogin = () => {};

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
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
        {/* <CustomButtonBig title="Login" onPress={_handleLogin} /> */}
        <TouchableHighlight
          onPress={() => navigation.navigate("Register")}
          // style={{ flexDirection: "row" }}
        >
          <Text>Dont have an Account</Text>
          <Text>Register</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "20%",
    paddingTop: "10%",
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

export default LoginScreen;
