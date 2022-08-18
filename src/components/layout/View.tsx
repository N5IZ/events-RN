import {StyleSheet, View as RNView} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const View = (props: Props) => {
  return <RNView style={styles.container}>{props.children}</RNView>;
};

export default View;

const styles = StyleSheet.create({
  container: {},
});
