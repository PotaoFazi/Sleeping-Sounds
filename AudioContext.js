import { View, Text } from "react-native";
import React from "react";

//create context for audio
export const AudioContext = React.createContext();
//create context provider
export const AudioProvider = ({ children }) => {
  //create state for audio
  const [audioState, setAudioState] = React.useState();
  const [key, setKey] = React.useState(10);
  //create context provider
  return (
    <AudioContext.Provider value={{ audioState, setAudioState, key, setKey }}>
      {children}
    </AudioContext.Provider>
  );
};
export const AudioState = () => {
  return useContext(AudioContext);
};
