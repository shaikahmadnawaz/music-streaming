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
import { Slider } from "./ui/slider";

const Player = () => {
  return (
    <div className="fixed border-t-2 z-[9999] bottom-0 w-full py-2 h-[15vh] px-4">
      <div className="grid grid-cols-2 justify-center items-center md:grid-cols-3 h-full">
        <div className="flex justify-start">
          <div className="px-4 w-3/6 mb-2 flex items-center justify-between">
            <h1 className="font-semibold">
              Date
              <br />
              <span className="font-light">Listening</span>
            </h1>
            <div className="flex items-center gap-x-4">
              <PlusSquare />
              <Heart />
            </div>
          </div>
        </div>

        <div className="flex md:hidden col-auto w-full justify-end items-center">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer">
            <TbPlayerPlayFilled size={20} className="text-black" />
          </div>
        </div>
        <div className="flex gap-y-5 flex-col">
          <div className="hidden h-full md:flex justify-center items-center w-full gap-x-6">
            <Shuffle size={30} className="cursor-pointer text-white" />
            <SkipBack size={30} className="cursor-pointer text-white" />
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer">
              <TbPlayerPlayFilled size={20} className="text-black" />
            </div>
            <SkipForward size={30} className="cursor-pointer text-white" />
            <Repeat size={30} className="cursor-pointer text-white" />
          </div>

          <Slider defaultValue={[66]} max={100} step={1} />
        </div>

        <div className="hidden md:flex w-full justify-end pr-2">
          <div className="flex items-center gap-x-3">
            <Volume2 className="cursor-pointer" size={50} />
            <Slider defaultValue={[66]} max={100} step={1} />
            <Mic className="cursor-pointer" size={50} />
            <MonitorSpeaker className="cursor-pointer" size={50} />
            <Share2 className="cursor-pointer" size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
