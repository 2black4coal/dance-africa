import { createContext, useContext, useRef, useState, useEffect } from "react";

const MusicContext = createContext();

/* 🎼 PLAYLIST */
const TRACKS = [
  "/sound/african-drums-209632.mp3",
  "/sound/kora-melody.mp3",
  "/sound/tribal-chant.mp3",
  "/sound/balafon-groove.mp3",
];

export function MusicProvider({ children }) {
  const audioRef = useRef(new Audio());
  const timerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [currentTrack, setCurrentTrack] = useState(
    TRACKS[Math.floor(Math.random() * TRACKS.length)]
  );

  /* 🔊 INITIAL SETUP */
  useEffect(() => {
    audioRef.current.src = currentTrack;
    audioRef.current.loop = false;
    audioRef.current.volume = volume;
  }, [currentTrack]);

  /* 🎲 RANDOM SWITCH TIMER */
  const scheduleNextTrack = () => {
    clearTimeout(timerRef.current);

    // Random time between 45s and 120s
    const nextTime =
      Math.floor(Math.random() * (120000 - 45000 + 1)) + 45000;

    timerRef.current = setTimeout(() => {
      fadeToNextTrack();
    }, nextTime);
  };

  /* 🌊 FADE OUT → SWITCH → FADE IN */
  const fadeToNextTrack = () => {
    const audio = audioRef.current;
    let v = audio.volume;

    const fadeOut = setInterval(() => {
      v -= 0.02;
      if (v <= 0) {
        clearInterval(fadeOut);
        audio.pause();
        switchTrack();
      } else {
        audio.volume = v;
      }
    }, 60);
  };

  const switchTrack = () => {
    let next;
    do {
      next = TRACKS[Math.floor(Math.random() * TRACKS.length)];
    } while (next === currentTrack);

    setCurrentTrack(next);

    const audio = audioRef.current;
    audio.src = next;
    audio.play();

    let v = 0;
    audio.volume = 0;

    const fadeIn = setInterval(() => {
      v += 0.02;
      if (v >= volume) {
        audio.volume = volume;
        clearInterval(fadeIn);
      } else {
        audio.volume = v;
      }
    }, 60);

    scheduleNextTrack();
  };

  /* ▶ PLAY */
  const play = () => {
    audioRef.current.volume = volume;
    audioRef.current.play();
    setIsPlaying(true);
    scheduleNextTrack();
  };

  /* ⏸ PAUSE */
  const pause = () => {
    clearTimeout(timerRef.current);
    audioRef.current.pause();
    setIsPlaying(false);
  };

  /* 🔉 VOLUME */
  const setMusicVolume = (v) => {
    audioRef.current.volume = v;
    setVolume(v);
  };

  /* CLEANUP */
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <MusicContext.Provider
      value={{
        play,
        pause,
        isPlaying,
        volume,
        setMusicVolume,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);
