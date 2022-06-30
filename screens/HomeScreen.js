import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ItemsComponent from "../components/ItemsComponent";
import { RainIcon, ThunderIcon, WindIcon } from "../assets/icons/Icons";
import { soundsList } from "../assets/data";
import { defaultColors } from "../Colors";

const { height, width } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {soundsList.map((item) => (
          <ItemsComponent
            key={item.key}
            name={item.name}
            icon={item.icon}
            uri={item.uri}
          />
        ))}
      </ScrollView>
      <View style={styles.controller} />

      <StatusBar style="dark" />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: "5%",
    justifyContent: "space-between",
    paddingVertical: "5%",
    flexWrap: "wrap",
  },
  controller: {
    backgroundColor: defaultColors.cardsBack,
    height: height * 0.1,
    width: width,
    shadowColor: "black",
    shadowRadius: 5,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.25,
    elevation: 10,
  },
});
