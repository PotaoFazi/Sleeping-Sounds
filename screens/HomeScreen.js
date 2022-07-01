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
import { AudioContext } from "../AudioContext";

const { height, width } = Dimensions.get("window");

const HomeScreen = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [playbackObj, setPlaybackObj] = React.useState(null);
  const [soundObj, setSoundObj] = React.useState(null);
  const { audioState, setAudioState, key, setKey } =
    React.useContext(AudioContext);

  const handlePlayPause = async (song) => {
    setIsPlaying(!isPlaying);
    if (soundObj === null) {
      const status = await Audio.Sound.createAsync(
        require("../assets/sounds/Rain.mp3"),
        { shouldPlay: true }
      );
      setPlaybackObj(playbackObj);
      setSoundObj(status);
      //   soundObj.playAsync();
    }
    // else if (playbackObj.isLoaded && playbackObj.isPlaying) {
    //   const status = playbackObj.setStatusAsync({ shouldPlay: false });
    //   setSoundObj(status);
    // } else if (playbackObj.isLoaded && !playbackObj.isPlaying) {
    //   const status = playbackObj.playAsync();
    //   setSoundObj(status);
    // }
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
