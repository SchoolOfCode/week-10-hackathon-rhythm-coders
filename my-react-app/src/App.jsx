import React, { useState, useRef } from "react";
import Songbook from "./SongBook/Songbook";
import "./App.css";
import PlayPauseButton from "./Play/Pause/PlayPause";
import Jukebox from "./Jukebox/Jukebox.jsx";

function App() {
  const songs = [
    {
      title: "Song 1",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Song 2",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Song 3",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      title: "Song 4",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(songs[currentSongIndex].url));

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    audioRef.current.src = songs[nextIndex].url;
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const handlePrev = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    audioRef.current.src = songs[prevIndex].url;
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
    audioRef.current.src = songs[index].url;
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <>
      <Jukebox
        songs={songs}
        currentSongIndex={currentSongIndex}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <PlayPauseButton />
      <Songbook songs={songs} onSongSelect={handleSongSelect} />
    </>
  );
}

export default App;
