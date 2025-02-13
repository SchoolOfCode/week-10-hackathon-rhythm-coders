import React from "react";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

const iconStyle = {
  fontSize: "3rem", // Custom size
};

const Jukebox = ({
  songs,
  currentSongIndex,
  isPlaying,
  onPlayPause,
  onNext,
  onPrev,
}) => {
  return (
    <div className="jukebox-container">
      <div className="jukebox">
        <h1>Jukebox</h1>
        <h2>{songs[currentSongIndex].title}</h2>
        <div>
          <IconButton color="primary" onClick={onPrev}>
            <SkipPreviousIcon style={iconStyle} />
          </IconButton>
          <IconButton color="secondary" onClick={onPlayPause}>
            {isPlaying ? (
              <PauseIcon style={iconStyle} />
            ) : (
              <PlayArrowIcon style={iconStyle} />
            )}
          </IconButton>
          <IconButton color="primary" onClick={onNext}>
            <SkipNextIcon style={iconStyle} />
          </IconButton>
        </div>
        <div>
          <p>Now Playing: {songs[currentSongIndex].title}</p>
        </div>
      </div>
    </div>
  );
};

export default Jukebox;
