import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { defaultColors } from "../Colors";

const { height, width } = Dimensions.get("window");

const ItemsComponent = (props) => {
  return (
    <View style={styles.container}>
      {props.icon && <props.icon style={styles.icon} />}
      {/* <Feather name="cloud-rain" size={50} color="black" /> */}
      <Text>{props.name}</Text>
    </View>
  );
};

export default ItemsComponent;

const styles = StyleSheet.create({
  container: {
    height: height * 0.2,
    width: width * 0.4,
    backgroundColor: defaultColors.cardsBack,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 10,
    marginVertical: "5%",
    shadowColor: "black",
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    elevation: 10,
  },
  icon: {},
});
