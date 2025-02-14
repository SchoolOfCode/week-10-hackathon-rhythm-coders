import React, { useState, useRef, useEffect } from "react";
import Songbook from "./SongBook/Songbook";
import "./App.css";
import PlayPauseButton from "./Play/Pause/PlayPause";
import Jukebox from "./Jukebox/Jukebox.jsx";


function App() {
  const songs = [
    {
      title: "Mystery",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Techo Ocean",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Metal Rain",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      title: "N-R-G",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(songs[currentSongIndex].url));
  const colors = ["#2E2E2E", "#3E1A47", "#1F2A44", "#003B5C"]; // Dark blues & grays

  const [bgColor, setBgColor] = useState(colors[0]);

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

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setBgColor(colors[index]);
      document.body.style.backgroundColor = colors[index]; // Apply color to body
    }, 5000); // Change color every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    
    <div className="app-container">
      <Jukebox
        songs={songs}
        currentSongIndex={currentSongIndex}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <Songbook songs={songs} onSongSelect={handleSongSelect} />
    </div>
  );
}

export default App;
