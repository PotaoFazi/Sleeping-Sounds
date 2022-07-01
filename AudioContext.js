import { View, Text } from "react-native";
import React, { useState } from "react";

//create context for audio
export const AudioContext = React.createContext();
//create context provider
export const AudioProvider = ({ children }) => {
  //create state for audio
  const [audioState, setAudioState] = useState();
  const [key, setKey] = useState();
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
