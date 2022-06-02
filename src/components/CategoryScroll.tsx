import { Text, View } from "./Themed";
import { FlatList, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { categories } from "../dummyData/data";

type Props = {};

type category = {
  category_name: string;
  img_url: string;
};

type CategoryItemProps = {
  category: category;
};

const _CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{
          uri: category.img_url,
        }}
      />
      <Text style={styles.cardText}>{category.category_name}</Text>
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
        {categories.map((category) => (
          <_CategoryItem category={category} />
        ))}
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
    marginBottom: 20,
  },
  card: {
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "150px",
    height: "150px",
    borderRadius: 5,
  },
  cardText: {
    position: "relative",
    top: -25,
    fontWeight: "500",
  },
});
