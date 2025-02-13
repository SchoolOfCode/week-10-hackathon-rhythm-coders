"use client";

import { useState } from "react";
import { Button, Input } from '@mui/material'; // Updated path
import { Music } from "lucide-react";

export default function Jukebox({ onPlay, currentlyPlaying }) {
  const [input, setInput] = useState("");

  const handlePlay = () => {
    if (input.length === 2) {
      onPlay(input.toUpperCase());
      setInput("");
    }
  };

  return (
    <div className="relative w-[400px]">
      {/* Floating music notes */}
      <Music className="absolute -left-8 -top-8 text-purple-800 w-8 h-8" />
      <Music className="absolute -right-8 -top-8 text-purple-800 w-8 h-8" />

      {/* Main jukebox body */}
      <div className="relative bg-gradient-to-b from-amber-500 to-amber-600 rounded-t-[100px] rounded-b-lg p-8 shadow-2xl border-8 border-gray-800">
        {/* Top curved section with display */}
        <div className="bg-gray-900 rounded-2xl p-4 mb-8">
          <div className="bg-cyan-300 h-12 rounded-md flex items-center justify-between px-4">
            <span className="text-cyan-900 font-mono">{"01:00"}</span>
            {currentlyPlaying && (
              <div className="flex gap-1">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-cyan-600 rounded-full animate-pulse"
                    style={{
                      height: `${Math.random() * 20 + 10}px`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            )}
            <span className="text-cyan-900 font-mono">{"02:30"}</span>
          </div>
        </div>

        {/* Chrome detail at top */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>

        {/* Main button panel */}
        <div className="relative bg-amber-700 rounded-lg p-6">
          {/* Neon tube effect */}
          <div className="absolute inset-4 bg-cyan-400 opacity-20 blur-lg rounded-full"></div>

          {/* Button grid in U shape with glowing effects */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              {["A", "B"].map((letter) => (
                <Button
                  key={letter}
                  variant="outline"
                  className={`w-16 h-16 rounded-full bg-gray-900 border-4 border-gray-700 text-2xl font-bold 
                    ${
                      currentlyPlaying === `${letter}1`
                        ? "text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                        : "text-cyan-400"
                    } 
                    hover:bg-gray-800 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]
                    transition-all duration-300`}
                  onClick={() => onPlay(`${letter}1`)}
                >
                  {letter}1
                </Button>
              ))}
            </div>
            <div className="space-y-6">
              {["A", "B"].map((letter) => (
                <Button
                  key={letter}
                  variant="outline"
                  className={`w-16 h-16 rounded-full bg-gray-900 border-4 border-gray-700 text-2xl font-bold 
                    ${
                      currentlyPlaying === `${letter}2`
                        ? "text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                        : "text-cyan-400"
                    } 
                    hover:bg-gray-800 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]
                    transition-all duration-300`}
                  onClick={() => onPlay(`${letter}2`)}
                >
                  {letter}2
                </Button>
              ))}
            </div>
          </div>

          {/* Bottom center buttons */}
          <div className="flex justify-center gap-8 mb-6">
            {["C1", "C2"].map((id) => (
              <Button
                key={id}
                variant="outline"
                className={`w-16 h-16 rounded-full bg-gray-900 border-4 border-gray-700 text-2xl font-bold 
                  ${
                    currentlyPlaying === id
                      ? "text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                      : "text-cyan-400"
                  } 
                  hover:bg-gray-800 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]
                  transition-all duration-300`}
                onClick={() => onPlay(id)}
              >
                {id}
              </Button>
            ))}
          </div>

          {/* Input section */}
          <div className="flex gap-2">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value.toUpperCase())}
              placeholder="Enter code"
              className="bg-gray-900 border-2 border-gray-700 text-cyan-400 placeholder-cyan-700 text-center text-lg"
              maxLength={2}
            />
            <Button
              onClick={handlePlay}
              className="bg-gray-900 text-cyan-400 hover:bg-gray-800 hover:text-cyan-300 border-2 border-gray-700"
            >
              Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
