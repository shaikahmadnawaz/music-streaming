import ForYouAlbum from "@/components/ForYouAlbum";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { albums } from "@/data/albums";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid md:grid-cols-12">
      <Sidebar />
      <ScrollArea className="h-[85vh] md:col-span-7">
        <section className="md:border flex flex-col gap-y-7 p-4 bg-neutral-900">
          <div className="flex justify-between gap-x-6 items-center">
            <div className="flex justify-between items-center gap-x-2">
              <ChevronLeft className="h-6 w-6" />
              <ChevronRight className="h-6 w-6" />
            </div>

            <div className="relative w-full flex items-center justify-center">
              <Search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-black left-3" />
              <Input
                type="text"
                placeholder="Search for artists, songs, or albums"
                className="pl-12 bg-white text-black rounded-full pr-4"
              />
            </div>

            <div className="flex justify-center items-center">
              <MoreHorizontal className="h-6 w-6" />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <AspectRatio ratio={26 / 9} className="bg-muted">
              <Image
                src="/banner.png"
                alt="Random Image"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>

          <div className="">
            <div className="space-y-1 flex justify-between items-center">
              <h2 className="text-2xl font-semibold tracking-tight">
                Hello, Nawaz
              </h2>
              <p className="text-sm text-muted-foreground">See all</p>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-4 grid-cols-1 space-x-4 pt-4 pb-4">
                {albums.map((album) => (
                  <ForYouAlbum
                    key={album.name}
                    album={album}
                    aspectRatio="square"
                    width={250}
                    height={250}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="">
            <div className="space-y-1 flex justify-between items-center">
              <h2 className="text-2xl font-semibold tracking-tight">
                New releases for you
              </h2>
              <p className="text-sm text-muted-foreground">See all</p>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-4 grid-cols-1 space-x-4 pt-4 pb-4">
                {albums.map((album) => (
                  <ForYouAlbum
                    key={album.name}
                    album={album}
                    aspectRatio="square"
                    width={250}
                    height={250}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollArea>
      <Profile />
    </main>
  );
}
