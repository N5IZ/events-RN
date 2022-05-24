import { View, Text } from "../../components/Themed";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types";
import Logo from "../../../assets/images/icon.png";
import CustomInput from "../../components/CustomInput";
import CustomButtonBig from "../../components/CustomButtonBig";
import { auth } from "../../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { login } from "../../redux/slices/userSlice";

const LoginScreen = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const { height } = useWindowDimensions();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const dispatch = useAppDispatch();

  const _handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email as string, password as string)
      .then((user) => dispatch(login(user)))
      .catch((err) => alert(err));
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
          <CustomButtonBig title="Login" onPress={_handleLogin} />
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Dont have an Account</Text>
            <Text style={{ marginLeft: 6, fontWeight: "bold" }}>Register</Text>
          </TouchableOpacity>
        </>
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
    // paddingTop: "10%",
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

export default LoginScreen;
