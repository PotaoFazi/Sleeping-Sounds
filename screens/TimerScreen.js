import { BlurView } from "expo-blur";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AudioContext } from "../AudioContext";

const TimerScreen = () => {
  const Navigation = useNavigation();
  const { timer, setTimer } = useContext(AudioContext);
  return (
    <BlurView tint="dark" intensity={50} style={{ flex: 1 }}>
      <SafeAreaView>
        <ScrollView style={styles.Top}>
          <View>
            <Text style={styles.TopText}>Stop audio in</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setTimer(3);
                Navigation.goBack();
              }}
            >
              <Text style={styles.btnText}>5 minutes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setTimer(6);
                Navigation.goBack();
              }}
            >
              <Text style={styles.btnText}>10 minutes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setTimer(9);
                Navigation.goBack();
              }}
            >
              <Text style={styles.btnText}>15 minutes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setTimer(18);
                Navigation.goBack();
              }}
            >
              <Text style={styles.btnText}>30 minutes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setTimer(27);
                Navigation.goBack();
              }}
            >
              <Text style={styles.btnText}>45 minutes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setTimer(36);
                Navigation.goBack();
              }}
            >
              <Text style={styles.btnText}>1 hour</Text>
            </TouchableOpacity>
          </View>
          {timer && (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setTimer(null);
                Navigation.goBack();
              }}
            >
              <Text style={styles.btnText}>Turn off timer</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </SafeAreaView>
      <View style={styles.closeBtn}>
        <TouchableOpacity onPress={() => Navigation.goBack()}>
          <Text style={{ color: "#ffff", fontSize: 20 }}>Close</Text>
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  Top: {
    paddingHorizontal: "5%",
    paddingBottom: "6%",
    marginTop: "30%",
    height: "75%",
  },
  TopText: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: "6%",
  },
  btn: {
    paddingVertical: "6%",
    paddingHorizontal: "2%",
  },
  btnText: {
    color: "#ffff",
    fontSize: 16,
  },
  closeBtn: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  },
});
