import { ScrollView, StyleSheet } from "react-native";
import BookmarkerScroll from "../components/BookmarkScroll";
import CategoryScroll from "../components/CategoryScroll";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome To</Text>
        <Text style={styles.title}>Boomarkr</Text>

        <CategoryScroll />

        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <BookmarkerScroll />
      </View>
    </ScrollView>
  );
}

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
});
