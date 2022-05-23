import { View, Text } from "../../components/Themed";
import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  TouchableHighlight,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types";
import Logo from "../../assets/images/icon.png";
import CustomInput from "../../components/CustomInput";

const LoginScreen = () => {
  const [accessToken, setAccessToken] = useState<String>();
  const [username, setUsername] = useState<String | undefined>();
  const [password, setPassword] = useState<String | undefined>();
  const { height } = useWindowDimensions();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const _handleLogin = () => {};

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <CustomInput
        value={username}
        setValue={setUsername}
        placeholder="username"
        secureTextEntry={false}
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeholder="password"
        secureTextEntry
      />
      <Button title="Login" onPress={_handleLogin} />
      <TouchableHighlight onPress={() => navigation.navigate("Register")}>
        <Text>Dont have an Account</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
