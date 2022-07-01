import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { soundsList } from "../assets/data";
import { PauseIcon, PlayIcon, TimerIcon } from "../assets/icons/Icons";
import { AudioContext } from "../AudioContext";
import { defaultColors } from "../Colors";
import ItemsComponent from "../components/ItemsComponent";

const { height, width } = Dimensions.get("window");

const HomeScreen = () => {
  const Navigation = useNavigation();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [soundObj, setSoundObj] = React.useState(null);
  const [nowPlaying, setNowPlaying] = React.useState("Select a sound");
  const { timer, setTimer } = useContext(AudioContext);
  useEffect(() => {
    if (timer !== null) {
      if (isPlaying) {
        setTimeout(() => {
          soundObj.stopAsync();
          setIsPlaying(false);
          setTimer(null);
        }, timer * 100000);
      } else {
        setTimer(null);
      }
    }
  }, [timer]);

  const handlePlayPause = async (song) => {
    if (song == 0) {
      if (isPlaying) {
        setIsPlaying(false);
        soundObj.stopAsync();
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
        soundObj.stopAsync();
      }
      // if (soundObj !== null) {
      //   soundObj.unloadAsync();
      // }
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
    } else if (song == 4) {
      if (isPlaying) {
        setIsPlaying(false);
        soundObj.pauseAsync();
      }
      if (soundObj !== null) {
        soundObj.unloadAsync();
      }
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sounds/Fire.mp3"),
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

  const handleStop = async () => {
    if (isPlaying) {
      soundObj.pauseAsync();
      setIsPlaying(false);
    } else {
      soundObj.playAsync();
      setIsPlaying(true);
    }
  };

  React.useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      // playThroughEarpieceAndroid: true,
      staysActiveInBackground: true,
      staysActiveInBackgroundAndroid: true,
    });
  }, []);
  const sleepTimer = () => {};

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{ width: "100%", textAlign: "center", color: "#929493" }}>
          Double tap to play
        </Text>
        {soundsList.map((item) => (
          <TouchableOpacity
            onPress={() => {
              handlePlayPause(item.id);
              setNowPlaying(item.name);
            }}
          >
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
        <TouchableOpacity onPress={handleStop} style={styles.pressAdjustment}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </TouchableOpacity>
        <Text>{nowPlaying}</Text>
        <TouchableOpacity
          disabled={!soundObj}
          onPress={() => {
            sleepTimer();
            Navigation.navigate("timer");
          }}
          style={[
            styles.pressAdjustment,
            soundObj ? { opacity: 1 } : { opacity: 0.3 },
          ]}
        >
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
