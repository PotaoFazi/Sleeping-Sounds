import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { AudioContext } from "../AudioContext";
import { defaultColors } from "../Colors";

const { height, width } = Dimensions.get("window");

const ItemsComponent = (props) => {
  const { setKey } = React.useContext(AudioContext);
  return (
    <View style={styles.container}>
      {props.icon && <props.icon style={styles.icon} />}
      <Text>{props.name}</Text>
      {setKey(props.id)}
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
    marginVertical: "10%",
    shadowColor: "black",
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    elevation: 10,
  },
  icon: {},
});
