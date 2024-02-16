import { BellDot, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { Button } from "../ui/button";
import Recent from "./recent";
import { albums } from "@/data/albums";
import { ScrollArea } from "../ui/scroll-area";
import Playlist from "./playlist";

import { releases } from "@/data/releases";

const Profile = () => {
  return (
    <ScrollArea className="h-[85vh] md:col-span-3 hidden md:flex">
      <section className="md:p-6 p-2 flex flex-col gap-y-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex justify-center items-center gap-x-2">
            <Avatar>
              <AvatarImage
                src="https://github.com/shaikahmadnawaz.png"
                alt="@shaikahmadnawaz"
              />
              <AvatarFallback>SAN</AvatarFallback>
            </Avatar>
            <p className="font-semibold">Ahmad Nawaz</p>
          </div>
          <div className="p-2 flex gap-x-2 justify-center items-center">
            <Button variant="ghost" className="p-1">
              <BellDot className="h-6 w-6" />
            </Button>
            <Button variant="ghost" className="p-1">
              <ChevronDown className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="mt-2">
          <div className="flex justify-between items-center mb-1 w-full">
            <p className="font-semibold text-lg">Recently Played</p>
            <p className="text-neutral-300">See all</p>
          </div>

          {albums.map((album, index) => (
            <Recent key={index} album={album} />
          ))}
        </div>

        <div className="mt-2">
          <div className="flex justify-between items-center mb-1 w-full">
            <p className="font-semibold text-lg">My Playlist</p>
            <p className="text-neutral-300">See all</p>
          </div>

          {releases.map((release, index) => (
            <Playlist key={index} release={release} />
          ))}

          <Button className="w-full text-base font-bold py-6 mt-5">
            Create New Playlist
          </Button>
        </div>
      </section>
    </ScrollArea>
  );
};

export default Profile;
