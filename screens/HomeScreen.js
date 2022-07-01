import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { soundsList } from "../assets/data";
import { defaultColors } from "../Colors";
import { Feather } from "@expo/vector-icons";
import ItemsComponent from "../components/ItemsComponent";
import {
  PauseIcon,
  PlayIcon,
  RainIcon,
  TimerIcon,
} from "../assets/icons/Icons";
import { Audio } from "expo-av";

const { height, width } = Dimensions.get("window");

const HomeScreen = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [soundObj, setSoundObj] = React.useState(null);

  const handlePlayPause = async (song) => {
    if (song == 0) {
      if (isPlaying) {
        setIsPlaying(false);
        soundObj.pauseAsync();
      }
      if (soundObj !== null) {
        soundObj.unloadAsync();
      }
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sounds/Rain.mp3"),
        { shouldPlay: true }
      );
      setIsPlaying(true);
      setSoundObj(sound);
      sound.setIsLoopingAsync(true);

      if (isPlaying) {
        sound.pauseAsync();
        setIsPlaying(false);
      } else if (!isPlaying) {
        sound.playAsync();
        setIsPlaying(true);
      }
    } else if (song == 1) {
      if (isPlaying) {
        setIsPlaying(false);
        soundObj.pauseAsync();
      }
      if (soundObj !== null) {
        soundObj.unloadAsync();
      }
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sounds/Thunder.mp3"),
        { shouldPlay: true }
      );
      setIsPlaying(true);
      setSoundObj(sound);
      sound.setIsLoopingAsync(true);

      if (isPlaying) {
        sound.pauseAsync();
        setIsPlaying(false);
      } else if (!isPlaying) {
        sound.playAsync();
        setIsPlaying(true);
      }
    } else if (song == 2) {
      if (isPlaying) {
        setIsPlaying(false);
        soundObj.pauseAsync();
      }
      if (soundObj !== null) {
        soundObj.unloadAsync();
      }
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sounds/Wind.mp3"),
        { shouldPlay: true }
      );
      setIsPlaying(true);
      setSoundObj(sound);
      sound.setIsLoopingAsync(true);

      if (isPlaying) {
        sound.pauseAsync();
        setIsPlaying(false);
      } else if (!isPlaying) {
        sound.playAsync();
        setIsPlaying(true);
      }
    } else if (song == 3) {
      if (isPlaying) {
        setIsPlaying(false);
        soundObj.pauseAsync();
      }
      if (soundObj !== null) {
        soundObj.unloadAsync();
      }
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sounds/TV-Static.mp3"),
        { shouldPlay: true }
      );
      setIsPlaying(true);
      setSoundObj(sound);
      sound.setIsLoopingAsync(true);

      if (isPlaying) {
        sound.pauseAsync();
        setIsPlaying(false);
      } else if (!isPlaying) {
        sound.playAsync();
        setIsPlaying(true);
      }
    }
  };

  React.useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: true,
      staysActiveInBackground: true,
      staysActiveInBackgroundAndroid: true,
    });
  }, []);
  const sleepTimer = () => {};

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {soundsList.map((item) => (
          <TouchableOpacity onPress={() => handlePlayPause(item.id)}>
            <ItemsComponent
              key={item.key}
              id={item.id}
              name={item.name}
              icon={item.icon}
              uri={item.uri}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.controller}>
        <TouchableOpacity
          onPress={() => handlePlayPause()}
          style={styles.pressAdjustment}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </TouchableOpacity>
        <Text>Now Playing</Text>
        <TouchableOpacity onPress={sleepTimer} style={styles.pressAdjustment}>
          <TimerIcon />
        </TouchableOpacity>
      </View>

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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    backgroundColor: defaultColors.cardsBack,
    height: height * 0.11,
    width: width,
    shadowColor: "black",
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    elevation: 10,
  },
  pressAdjustment: {
    paddingHorizontal: "5%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
