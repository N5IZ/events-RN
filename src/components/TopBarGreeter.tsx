import { Image, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import React from "react";

type Props = {};

const TopBarGreeter = (props: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Hello, Syabrul</Text>
        <Text style={styles.greating}>Welcome To Boomarkr</Text>
      </View>

      <Image
        style={styles.profile_img}
        source={{
          uri: "https://res.cloudinary.com/kolynz-b/image/upload/v1638636909/ko.lynz_b_218871186_831566384142117_7643572219233961744_n_wcsj3e.jpg",
        }}
      />
    </View>
  );
};

export default TopBarGreeter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  greating: {
    fontWeight: "normal",
  },
  profile_img: {
    width: "50px",
    height: "50px",
    borderRadius: 5,
    backgroundColor: "rgb(255, 255, 255)",
  },
});
