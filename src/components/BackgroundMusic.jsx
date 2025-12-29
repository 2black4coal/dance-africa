import { useEffect, useRef, useState } from "react";

const tracks = [
  { src: "/sounds/african-drums-209632.mp3", title: "African Drums" },
  { src: "/sounds/djembe-3-296679.mp3", title: "Djembe Groove" },
  { src: "/sounds/fula-flute-melody-3-400516.mp3", title: "Fula Flute" },
  { src: "/sounds/kadan-drum-273073.mp3", title: "Kadan Drum" },
  { src: "/sounds/talking-drum-318911.mp3", title: "Talking Drum" },
];

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [collapsed, setCollapsed] = useState(false);

  const fadeDuration = 500;

  // Initialize Web Audio + waveform ONCE
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContextClass();

    // REQUIRED FIX: resume context immediately
    audioCtx.resume().catch(() => {});

    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;

    const source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    audioCtxRef.current = audioCtx;
    analyserRef.current = analyser;
    dataArrayRef.current = dataArray;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      const analyserNode = analyserRef.current;
      const data = dataArrayRef.current;
      if (!analyserNode || !data) return;

      analyserNode.getByteTimeDomainData(data);

      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(250, 204, 21, 0.75)";
      ctx.beginPath();

      const sliceWidth = width / data.length;
      let x = 0;
      const midY = height / 2;

      for (let i = 0; i < data.length; i++) {
        const v = (data[i] - 128) / 128;
        const y = midY + v * (height * 0.35);

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);

        x += sliceWidth;
      }

      ctx.stroke();
      animationIdRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  // Load + fade in track when index changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = tracks[index].src;

    const fadeIn = () => {
      let v = 0;
      const step = 50;
      const interval = setInterval(() => {
        v += step / fadeDuration;
        if (v >= volume) {
          audio.volume = volume;
          clearInterval(interval);
        } else {
          audio.volume = v;
        }
      }, step);
    };

    const playWithFade = async () => {
      try {
        // REQUIRED FIX: resume context before playing
        if (audioCtxRef.current?.state === "suspended") {
          await audioCtxRef.current.resume();
        }

        audio.volume = 0;
        await audio.play();
        setIsPlaying(true);
        fadeIn();
      } catch {
        setIsPlaying(false);
      }
    };

    playWithFade();

    const handleEnded = () => {
      setIndex((i) => (i + 1) % tracks.length);
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [index, volume]);

  // Keep volume synced
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.volume = volume;
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    // REQUIRED FIX: resume context before playing
    if (audioCtxRef.current?.state === "suspended") {
      await audioCtxRef.current.resume();
    }

    if (isPlaying) {
      // fade out
      let v = audio.volume;
      const step = 50;
      const interval = setInterval(() => {
        v -= step / fadeDuration;
        if (v <= 0) {
          audio.volume = 0;
          audio.pause();
          setIsPlaying(false);
          clearInterval(interval);
        } else {
          audio.volume = v;
        }
      }, step);
    } else {
      // fade in
      audio.volume = 0;
      await audio.play();
      setIsPlaying(true);

      let v = 0;
      const step = 50;
      const interval = setInterval(() => {
        v += step / fadeDuration;
        if (v >= volume) {
          audio.volume = volume;
          clearInterval(interval);
        } else {
          audio.volume = v;
        }
      }, step);
    }
  };

  const next = () => setIndex((i) => (i + 1) % tracks.length);
  const prev = () => setIndex((i) => (i - 1 + tracks.length) % tracks.length);

  return (
    <div className={`music-control ${collapsed ? "collapsed" : ""}`}>
      <audio ref={audioRef} preload="auto" />

      {!collapsed && (
        <div className={`now-playing ${isPlaying ? "pulse" : ""}`}>
          Now Playing: {tracks[index].title}
        </div>
      )}

      {!collapsed && (
        <canvas
          ref={canvasRef}
          className="waveform-canvas"
          width={180}
          height={40}
        />
      )}

      <div className="music-row">
        <button className="music-btn" onClick={togglePlay}>
          {isPlaying ? "||" : "▶"}
        </button>

        {!collapsed && (
          <>
            <button className="music-btn" onClick={prev}>{"<"}</button>
            <button className="music-btn" onClick={next}>{">"}</button>

            <select
              className="track-select"
              value={index}
              onChange={(e) => setIndex(Number(e.target.value))}
            >
              {tracks.map((t, i) => (
                <option key={i} value={i}>{t.title}</option>
              ))}
            </select>

            <input
              className="volume-slider"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
            />
          </>
        )}

        <button
          className="music-btn collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "+" : "-"}
        </button>
      </div>
    </div>
  );
}
