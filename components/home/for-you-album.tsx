import { Album } from "@/data/albums";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ForYouAlbumProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  width?: number;
  height?: number;
}

const ForYouAlbum = ({
  album,
  width,
  height,
  className,
  ...props
}: ForYouAlbumProps) => {
  return (
    <Link href="/">
      <div className={cn("space-y-3", className)} {...props}>
        <div className="overflow-hidden rounded-md">
          <Image
            src={album.cover}
            alt={album.name}
            width={width}
            height={height}
            className="h-56 w-full rounded-xl object-cover shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
          />
        </div>
        <div className="space-y-1 text-sm">
          <h3 className="font-medium leading-none">{album.name}</h3>
          <p className="text-xs text-neutral-400">{album.artist}</p>
        </div>
      </div>
    </Link>
  );
};

export default ForYouAlbum;
