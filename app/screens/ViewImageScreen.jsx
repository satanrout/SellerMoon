import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import colors from "../config/colors";

export default class ViewImageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image
          resizeMode="contain"
          source={require("../assets/chair.jpg")}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
