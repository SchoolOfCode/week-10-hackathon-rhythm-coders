import React from "react";
import IconButton from "@mui/material/IconButton";
import styles from "./Songbook.module.css";

const Songbook = ({ songs, onSongSelect }) => {
  return (
    <div className={styles.songbook}>
      <div className={styles.header}>
        <h2>Song Selection</h2>
      </div>
      <div className={styles.songList}>
        {songs.map((song, index) => (
          <div
            key={index}
            className={styles.songItem}
            onClick={() => onSongSelect(index)}
          >
            <div className={styles.songId}>{index + 1}</div>
            <div className={styles.songInfo}>
              <span className={styles.songTitle}>{song.title}</span>
              <span className={styles.songArtist}>{song.artist}</span>
              <h1>TEST</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songbook;
