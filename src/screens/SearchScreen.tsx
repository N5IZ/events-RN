import { View, Text } from "../components/Themed";
import React from "react";
import { useTailwind } from "tailwind-rn";

type Props = {};

const SearchScreen = (props: Props) => {
  const tailwind = useTailwind();
  return (
    <View>
      <Text style={tailwind("font-bold")}>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;
