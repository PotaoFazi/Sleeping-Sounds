import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { AudioProvider } from "./AudioContext";
import StackNavigator from "./navigation/StackNavigator";
export default function App() {
  return (
    <AudioProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AudioProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
