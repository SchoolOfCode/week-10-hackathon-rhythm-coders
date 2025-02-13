import React from "react";

const Jukebox = ({
  songs,
  currentSongIndex,
  isPlaying,
  onPlayPause,
  onNext,
  onPrev,
}) => {
  return (
    <div>
      <h1>JJ's really cool Jukebox</h1>
      <h2>{songs[currentSongIndex].title}</h2>
      <div>
        <button onClick={onPrev}>Previous</button>
        <button onClick={onPlayPause}>{isPlaying ? "Pause" : "Play"}</button>
        <button onClick={onNext}>Next</button>
      </div>
      <div>
        <p>Now Playing: {songs[currentSongIndex].title}</p>
      </div>
    </div>
  );
};

export default Jukebox;
