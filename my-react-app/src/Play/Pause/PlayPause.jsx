import React, { useState, useEffect } from "react";
import { IconButton, LinearProgress, Box } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const PlayPauseButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  const handleButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Box>
      <IconButton
        onClick={handleButtonClick}
        color="primary"
        aria-label="play/pause"
      >
        {isPlaying ? (
          <PauseIcon fontSize="large" />
        ) : (
          <PlayArrowIcon fontSize="large" />
        )}
      </IconButton>
      <Box mt={2}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Box>
  );
};

export default PlayPauseButton;
