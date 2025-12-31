import { createContext, useContext, useRef, useState } from "react";

const MusicContext = createContext();

const TRACKS = [
  "/sound/african-drums-209632.mp3",
  "/sound/kora-melody.mp3",
  "/sound/tribal-chant.mp3",
  "/sound/balafon-groove.mp3",
];

export function MusicProvider({ children }) {
  const audioRef = useRef(null);

  if (!audioRef.current) {
    audioRef.current = new Audio(TRACKS[0]);
    audioRef.current.volume = 0.25;
    audioRef.current.loop = true; // stable, no random switching
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const setMusicVolume = (v) => {
    audioRef.current.volume = v;
    setVolume(v);
  };

  return (
    <MusicContext.Provider value={{ isPlaying, togglePlay, volume, setMusicVolume }}>
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);
