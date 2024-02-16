import ForYouAlbum from "@/components/home/for-you-album";
import Profile from "@/components/Profile";
import SearchBar from "@/components/home/searchbar";
import Sidebar from "@/components/sidebar/sidebar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { albums } from "@/components/home/albums";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { releases } from "@/components/home/releases";

export default function Home() {
  return (
    <main className="grid md:grid-cols-12">
      <Sidebar />

      <ScrollArea className="h-[85vh] md:col-span-7">
        <section className="md:border flex flex-col gap-y-7 p-2 md:p-6 bg-neutral-900">
          <div className="flex justify-between gap-x-6 items-center">
            <div className="flex justify-between items-center gap-x-1">
              <Button variant="ghost" className="p-1">
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button variant="ghost" className="p-1">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <SearchBar />

            <div className="flex justify-center items-center">
              <Button variant="ghost" className="h-auto p-2">
                <MoreHorizontal className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <AspectRatio ratio={23 / 9} className="bg-muted">
              <Image
                src="/banner.jpg"
                alt="Random Image"
                fill
                className="rounded-md object-cover shadow-md"
              />
            </AspectRatio>
          </div>

          <div className="pt-2">
            <div className="space-y-1 flex justify-between items-center">
              <h2 className="text-2xl font-semibold tracking-tight">
                Hello, Nawaz
              </h2>
              <p className="text-sm text-neutral-300">See all</p>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-4 grid-cols-1 space-y-4 md:space-y-0 md:space-x-4 pt-4 pb-4">
                {albums.map((album) => (
                  <ForYouAlbum
                    key={album.name}
                    album={album}
                    width={250}
                    height={250}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-1">
            <div className="space-y-1 flex justify-between items-center">
              <h2 className="text-2xl font-semibold tracking-tight">
                New releases for you
              </h2>
              <p className="text-sm text-muted-foreground">See all</p>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-4 grid-cols-1 space-x-4 pt-4 pb-4">
                {releases.map((release) => (
                  <ForYouAlbum
                    key={release.name}
                    album={release}
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
