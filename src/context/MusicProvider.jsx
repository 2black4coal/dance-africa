import { createContext, useEffect, useRef } from "react";

export const MusicContext = createContext(null);

/* 🎵 MUSIC PLAYLIST */
const TRACKS = [
  "/sound/african-drums-209632.mp3",
  "/sound/kora-melody.mp3",
  "/sound/tribal-chant.mp3",
  "/sound/balafon-groove.mp3",
];

export default function MusicProvider({ children }) {
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const audio = new Audio();
    audio.volume = 0.25;
    audio.loop = false;
    audio.src = TRACKS[Math.floor(Math.random() * TRACKS.length)];
    audioRef.current = audio;

    const startMusic = () => {
      audio.play().catch(() => {});
      scheduleNext();
      document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);

    return () => {
      clearTimeout(timerRef.current);
      audio.pause();
    };
  }, []);

  const scheduleNext = () => {
    clearTimeout(timerRef.current);

    // random 45–120 seconds
    const delay =
      Math.floor(Math.random() * (120000 - 45000)) + 45000;

    timerRef.current = setTimeout(() => {
      fadeToNext();
    }, delay);
  };

  const fadeToNext = () => {
    const audio = audioRef.current;
    if (!audio) return;

    let vol = audio.volume;

    const fadeOut = setInterval(() => {
      vol -= 0.02;
      if (vol <= 0) {
        clearInterval(fadeOut);
        switchTrack();
      } else {
        audio.volume = vol;
      }
    }, 60);
  };

  const switchTrack = () => {
    const audio = audioRef.current;
    if (!audio) return;

    let next;
    do {
      next = TRACKS[Math.floor(Math.random() * TRACKS.length)];
    } while (audio.src.includes(next));

    audio.src = next;
    audio.play();

    let vol = 0;
    audio.volume = 0;

    const fadeIn = setInterval(() => {
      vol += 0.02;
      if (vol >= 0.25) {
        audio.volume = 0.25;
        clearInterval(fadeIn);
      } else {
        audio.volume = vol;
      }
    }, 60);

    scheduleNext();
  };

  return (
    <MusicContext.Provider value={{}}>
      {children}
    </MusicContext.Provider>
  );
}
