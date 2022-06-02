import { Text, View } from "./Themed";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { categories } from "../dummyData/data";

type Props = {};

type category = {
  category_name: string;
  img_url: string;
};

type CategoryItemProps = {
  item: category;
};

const _CategoryItem = ({ item }: CategoryItemProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.category_name}</Text>
    </View>
  );
};

const CategoryScroll = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Categories</Text>
        <Text style={{ color: "#BF3BEF" }}>View More</Text>
      </View>
      <ScrollView horizontal={true}>
        <FlatList
          style={styles.cards}
          data={categories}
          renderItem={({ item }) => <_CategoryItem item={item} />}
        />
      </ScrollView>
    </View>
  );
};

export default CategoryScroll;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  cards: {},
  card: {},
  cardText: {},
});
