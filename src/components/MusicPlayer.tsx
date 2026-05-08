"use client";

import { useRef, useState } from "react";
import { Volume2, Pause } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      await audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      {/* audio */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      {/* button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 left-5 z-50 w-12 h-12 rounded-full border border-white/10 bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition duration-500"
      >
        {playing ? <Pause size={18} /> : <Volume2 size={18} />}
      </button>
    </>
  );
}
