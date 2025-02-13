"use client";

import { useState } from "react";
import Jukebox from "./components/jukebox";
import Catalogue from "./components/catalogue";
import AudioPlayer from "./components/audio-player";

const songs = [
  {
    id: "A1",
    title: "Rag Madhuvanti",
    artist: "Debashish Bhattacharya",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: "A2",
    title: "Acoustic Breeze",
    artist: "Benjamin Tissot",
    url: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
  },
  {
    id: "B1",
    title: "Summer",
    artist: "Benjamin Tissot",
    url: "https://www.bensound.com/bensound-music/bensound-summer.mp3",
  },
  {
    id: "B2",
    title: "Ukulele",
    artist: "Benjamin Tissot",
    url: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
  },
  {
    id: "C1",
    title: "Creative Minds",
    artist: "Benjamin Tissot",
    url: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
  },
  {
    id: "C2",
    title: "Jazzy Frenchy",
    artist: "Benjamin Tissot",
    url: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3",
  },
];

export default function Home() {
  const [currentSong, setCurrentSong] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [error, setError] = useState(null);

  const playSong = (id) => {
    const song = songs.find((s) => s.id === id);
    if (song) {
      setCurrentSong(song.url);
      setCurrentlyPlaying(id);
      setError(null);
    } else {
      setError(`Song with id ${id} not found`);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8 pb-32">
      <h1 className="text-6xl font-bold mb-12 text-center bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-transparent bg-clip-text font-serif">
        JJ's Jukebox
      </h1>
      <div className="flex flex-col lg:flex-row w-full justify-around items-start gap-8 max-w-6xl mx-auto">
        <Jukebox onPlay={playSong} currentlyPlaying={currentlyPlaying} />
        <Catalogue songs={songs} currentlyPlaying={currentlyPlaying} />
      </div>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      <AudioPlayer
        url={currentSong}
        onPlayingChange={(isPlaying) => {
          if (!isPlaying) setCurrentlyPlaying(null);
        }}
      />
    </main>
  );
}
