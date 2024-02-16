"use client";

import {
  Heart,
  Mic,
  MonitorSpeaker,
  PlusSquare,
  Repeat,
  Share2,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoMdPause } from "react-icons/io";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { useState } from "react";

const Player = () => {
  const [isPlaying, setPlaying] = useState(false);

  const handlePlayPauseToggle = () => {
    setPlaying(!isPlaying);
  };
  return (
    <div className="fixed border-t-2 z-[9999] bottom-0 w-full p-2 md:p-6 h-[15vh]">
      <div className="flex justify-between items-center">
        <div className="hidden md:flex gap-x-7 items-center justify-between">
          <h1 className="font-semibold">
            Hero
            <br />
            <span className="font-light">Alan Walker</span>
          </h1>
          <div className="flex items-center gap-x-2">
            <Button variant="ghost" className="p-1">
              <Heart className="h-6 w-6" />
            </Button>

            <Button variant="ghost" className="p-1">
              <PlusSquare className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="flex gap-y-3 w-full md:w-auto flex-col">
          <div className="h-full flex justify-center items-center w-full gap-x-6">
            <Button variant="ghost" className="p-1">
              <Shuffle className="h-6 w-6" />
            </Button>
            <Button variant="ghost" className="p-1">
              <SkipBack className="h-6 w-6" />
            </Button>
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white cursor-pointer">
              <Button
                variant="ghost"
                className="p-1 hover:bg-transparent"
                onClick={handlePlayPauseToggle}
              >
                {isPlaying ? (
                  <TbPlayerPlayFilled className="h-6 w-6 text-black" />
                ) : (
                  <IoMdPause className="h-6 w-6 text-black" />
                )}
              </Button>
            </div>
            <Button variant="ghost" className="p-1">
              <SkipForward className="h-6 w-6" />
            </Button>
            <Button variant="ghost" className="p-1">
              <Repeat className="h-6 w-6" />
            </Button>
          </div>

          <Slider
            className="md:w-[700px]"
            defaultValue={[66]}
            max={100}
            step={1}
          />
        </div>

        <div className="hidden md:flex items-center gap-x-2">
          <Button variant="ghost" className="p-1">
            <Volume2 className="h-6 w-6" />
          </Button>
          <Slider
            defaultValue={[66]}
            className="md:w-[120px]"
            max={100}
            step={1}
          />
          <Button variant="ghost" className="p-1">
            <Mic className="h-6 w-6" />
          </Button>
          <Button variant="ghost" className="p-1">
            <MonitorSpeaker className="h-6 w-6" />
          </Button>
          <Button variant="ghost" className="p-1">
            <Share2 className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Player;
