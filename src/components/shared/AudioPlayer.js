"use client";

import { useRef, useState } from "react";

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex gap-2">
      <button onClick={toggleAudio}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <circle cx="22" cy="22" r="22" fill="#1FA45B" />
          <path
            d="M31.5 21.634C32.1667 22.0189 32.1667 22.9811 31.5 23.366L17.25 31.5933C16.5833 31.9782 15.75 31.497 15.75 30.7272L15.75 14.2728C15.75 13.503 16.5833 13.0218 17.25 13.4067L31.5 21.634Z"
            fill="white"
          />
        </svg>
      </button>
      {isPlaying ? (
        <audio controls ref={audioRef} src={audioSrc}></audio>
      ) : (
        <audio ref={audioRef} src={audioSrc}></audio>
      )}
    </div>
  );
};

export default AudioPlayer;
