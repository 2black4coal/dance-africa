import { useEffect, useRef, useState } from "react";
import "../styles/music.css";

const TRACKS = [
  { src: "/sounds/african-drums-209632.mp3", title: "African Drums" },
  { src: "/sounds/djembe-3-296679.mp3", title: "Djembe Groove" },
  { src: "/sounds/fula-flute-melody-3-400516.mp3", title: "Fula Flute" },
  { src: "/sounds/kadan-drum-273073.mp3", title: "Kadan Drum" },
  { src: "/sounds/talking-drum-318911.mp3", title: "Talking Drum" }
];

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const analyserRef = useRef(null);
  const dataRef = useRef(null);

  const [index, setIndex] = useState(
    Math.floor(Math.random() * TRACKS.length)
  );
  const [volume, setVolume] = useState(0.45);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(true);

 /* ▶️ UNIFIED AUDIO START (Fixes autoplay + waveform + context) */
useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  let audioCtx;
  let analyser;

  const startAudio = async () => {
    try {
      // Create AudioContext only once
      if (!audioCtx) {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        audioCtx = new Ctx();

        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 1024;

        const source = audioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);

        analyserRef.current = analyser;
        dataRef.current = new Uint8Array(analyser.frequencyBinCount);

        drawWaveform();
      }

      // Required for Safari/Chrome
      if (audioCtx.state === "suspended") {
        await audioCtx.resume();
      }

      audio.volume = 0;
      await audio.play();
      fadeIn(audio);

      setPlaying(true);
      document.removeEventListener("click", startAudio);
    } catch (err) {
      console.log("Autoplay blocked:", err);
    }
  };

  document.addEventListener("click", startAudio);
}, []);

/* 🌊 FIXED WAVEFORM DRAW LOOP */
const drawWaveform = () => {
  const canvas = canvasRef.current;
  const analyser = analyserRef.current;
  if (!canvas || !analyser) return;

  const ctx = canvas.getContext("2d");

  const draw = () => {
    requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataRef.current);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 0.6;
    ctx.strokeStyle = "rgba(255,255,255,0.6)";
    ctx.beginPath();

    let x = 0;
    const slice = canvas.width / dataRef.current.length;

    dataRef.current.forEach((v, i) => {
      const y = (v / 255) * canvas.height;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      x += slice;
    });

    ctx.stroke();
  };

  draw();
};


  /* 🔀 LOAD TRACK */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = TRACKS[index].src;
    audio.volume = 0;
    audio.play().catch(() => {});
    fadeIn(audio);
    setPlaying(true);

    audio.onended = () => next();
  }, [index]);

  /* 🔊 FADES */
  const fadeIn = (audio) => {
    let v = 0;
    const i = setInterval(() => {
      v += 0.02;
      audio.volume = Math.min(v, volume);
      if (v >= volume) clearInterval(i);
    }, 40);
  };

  const fadeOut = (audio, done) => {
    let v = audio.volume;
    const i = setInterval(() => {
      v -= 0.02;
      audio.volume = Math.max(v, 0);
      if (v <= 0) {
        clearInterval(i);
        done && done();
      }
    }, 40);
  };

  /* 🎛 CONTROLS */
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      fadeOut(audio, () => {
        audio.pause();
        setPlaying(false);
      });
    } else {
      audio.play().catch(() => {});
      fadeIn(audio);
      setPlaying(true);
    }
  };

  const next = () => {
    let n;
    do {
      n = Math.floor(Math.random() * TRACKS.length);
    } while (n === index);
    setIndex(n);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + TRACKS.length) % TRACKS.length);
  };

  return (
    <div className={`music-ui ${open ? "open" : "collapsed"}`}>
      <button className="collapse-btn" onClick={() => setOpen(!open)}>
        {open ? "–" : "+"}
      </button>

      {open && (
        <>
          <div className="now-playing">
            {TRACKS[index].title}
          </div>

          <canvas ref={canvasRef} width={180} height={26} />

          <div className="controls">
            <button onClick={prev}>⟨</button>
            <button onClick={togglePlay}>
              {playing ? "❚❚" : "▶"}
            </button>
            <button onClick={next}>⟩</button>
          </div>

          <select
            className="track-select"
            value={index}
            onChange={(e) => setIndex(+e.target.value)}
          >
            {TRACKS.map((t, i) => (
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
            onChange={(e) => {
              setVolume(+e.target.value);
              audioRef.current.volume = +e.target.value;
            }}
          />
        </>
      )}

      <audio ref={audioRef} preload="auto" />
    </div>
  );
}
