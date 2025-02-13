"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioPlayer({ url, onPlayingChange }) {
  const audioRef = useRef(null);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (url && audioRef.current) {
      setError(null);
      setIsPlaying(false);
      audioRef.current.src = url;
      audioRef.current.load();
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          onPlayingChange?.(true);
        })
        .catch((e) => {
          console.error("Error playing audio:", e);
          setError("Failed to play the audio. Please try another song.");
          onPlayingChange?.(false);
        });
    }
  }, [url, onPlayingChange]);

  const handleCanPlayThrough = () => {
    setError(null);
  };

  const handleError = () => {
    setError("Error loading audio. Please try another song.");
    setIsPlaying(false);
    onPlayingChange?.(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t-2 border-amber-500 p-4">
      <div className="max-w-3xl mx-auto">
        <audio
          ref={audioRef}
          controls
          className="w-full"
          onError={handleError}
          onCanPlayThrough={handleCanPlayThrough}
          onPause={() => {
            setIsPlaying(false);
            onPlayingChange?.(false);
          }}
          onPlay={() => {
            setIsPlaying(true);
            onPlayingChange?.(true);
          }}
        />
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        {isPlaying && (
          <p className="text-amber-500 mt-2 text-center font-bold">
            Now Playing
          </p>
        )}
      </div>
    </div>
  );
}
