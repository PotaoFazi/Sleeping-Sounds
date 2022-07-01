import * as React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export const RainIcon = () => (
  <Feather name="cloud-rain" size={50} color="black" />
);
export const ThunderIcon = () => (
  <Ionicons name="thunderstorm-outline" size={50} color="black" />
);

export const WindIcon = () => (
  <MaterialCommunityIcons name="weather-windy" size={50} color="black" />
);
export const TVIcon = () => <MaterialIcons name="tv" size={50} color="black" />;
export const FireIcon = () => (
  <SimpleLineIcons name="fire" size={50} color="black" />
);

export const PlayIcon = () => <Feather name="play" size={30} color="black" />;
export const PauseIcon = () => <Feather name="pause" size={30} color="black" />;
export const TimerIcon = () => (
  <MaterialCommunityIcons name="av-timer" size={30} color="black" />
);
