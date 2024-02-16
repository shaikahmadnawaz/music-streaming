import { BellDot, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import Image from "next/image";
import { Button } from "./ui/button";

const Profile = () => {
  return (
    <section className="md:col-span-3 hidden md:flex flex-col gap-y-2 h-full p-4 pl-6">
      <div className="mb-2 flex items-center justify-between w-full">
        <div className="flex justify-center items-center gap-x-2">
          <Avatar>
            <AvatarImage
              src="https://github.com/shaikahmadnawaz.png"
              alt="@shaikahmadnawaz"
            />
            <AvatarFallback>SAN</AvatarFallback>
          </Avatar>
          <p>Nawaz</p>
        </div>
        <div className="p-2 flex gap-x-2 justify-center items-center">
          <BellDot className="h-4 w-4" />
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-1 w-full">
          <p>Recently Played</p>
          <p>See all</p>
        </div>

        <div className="flex items-center justify-between gap-x-3 cursor-pointer w-full rounded-md">
          <div className="flex gap-x-3">
            <div className="relative rounded-md min-h-[48px] min-w-[48px]overflow-hidden">
              <Image src="/1.jpg" width={50} height={50} alt="Random Image" />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
              <p className="text-white truncate">Big Title</p>
              <p className="text-neutral-400 text-sm truncate">By Everyone</p>
            </div>
          </div>
          <div>4 min ago</div>
        </div>
        <div className="flex items-center justify-between gap-x-3 cursor-pointer w-full rounded-md">
          <div className="flex gap-x-3">
            <div className="relative rounded-md min-h-[48px] min-w-[48px]overflow-hidden">
              <Image src="/1.jpg" width={50} height={50} alt="Random Image" />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
              <p className="text-white truncate">Big Title</p>
              <p className="text-neutral-400 text-sm truncate">By Everyone</p>
            </div>
          </div>
          <div>4 min ago</div>
        </div>
        <div className="flex items-center justify-between gap-x-3 cursor-pointer w-full rounded-md">
          <div className="flex gap-x-3">
            <div className="relative rounded-md min-h-[48px] min-w-[48px]overflow-hidden">
              <Image src="/1.jpg" width={50} height={50} alt="Random Image" />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
              <p className="text-white truncate">Big Title</p>
              <p className="text-neutral-400 text-sm truncate">By Everyone</p>
            </div>
          </div>
          <div>4 min ago</div>
        </div>
        <div className="flex items-center justify-between gap-x-3 cursor-pointer w-full rounded-md">
          <div className="flex gap-x-3">
            <div className="relative rounded-md min-h-[48px] min-w-[48px]overflow-hidden">
              <Image src="/1.jpg" width={50} height={50} alt="Random Image" />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
              <p className="text-white truncate">Big Title</p>
              <p className="text-neutral-400 text-sm truncate">By Everyone</p>
            </div>
          </div>
          <div>4 min ago</div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1 w-full">
          <p>My Playlist</p>
          <p>See all</p>
        </div>

        <div className="flex items-center justify-between gap-x-3 cursor-pointer w-full rounded-md">
          <div className="flex gap-x-3">
            <div className="relative rounded-md min-h-[48px] min-w-[48px]overflow-hidden">
              <Image src="/1.jpg" width={50} height={50} alt="Random Image" />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
              <p className="text-white truncate">Big Title</p>
              <p className="text-neutral-400 text-sm truncate">By Everyone</p>
            </div>
          </div>
          <div>4 min ago</div>
        </div>
        <div className="flex items-center justify-between gap-x-3 cursor-pointer w-full rounded-md">
          <div className="flex gap-x-3">
            <div className="relative rounded-md min-h-[48px] min-w-[48px]overflow-hidden">
              <Image src="/1.jpg" width={50} height={50} alt="Random Image" />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
              <p className="text-white truncate">Big Title</p>
              <p className="text-neutral-400 text-sm truncate">By Everyone</p>
            </div>
          </div>
          <div>4 min ago</div>
        </div>
        <div className="flex items-center justify-between gap-x-3 cursor-pointer w-full rounded-md">
          <div className="flex gap-x-3">
            <div className="relative rounded-md min-h-[48px] min-w-[48px]overflow-hidden">
              <Image src="/1.jpg" width={50} height={50} alt="Random Image" />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
              <p className="text-white truncate">Big Title</p>
              <p className="text-neutral-400 text-sm truncate">By Everyone</p>
            </div>
          </div>
          <div>4 min ago</div>
        </div>
        <div className="flex items-center justify-between gap-x-3 cursor-pointer w-full rounded-md">
          <div className="flex gap-x-3">
            <div className="relative rounded-md min-h-[48px] min-w-[48px]overflow-hidden">
              <Image src="/1.jpg" width={50} height={50} alt="Random Image" />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
              <p className="text-white truncate">Big Title</p>
              <p className="text-neutral-400 text-sm truncate">By Everyone</p>
            </div>
          </div>
          <div>4 min ago</div>
        </div>

        <Button className="w-full mt-2">Create New Playlist</Button>
      </div>
    </section>
  );
};

export default Profile;
