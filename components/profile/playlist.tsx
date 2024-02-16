import { Release } from "@/data/releases";
import Image from "next/image";

interface PlaylistProps {
  release: Release;
}

const Playlist: React.FC<PlaylistProps> = ({ release }) => {
  return (
    <div className="flex items-center justify-between gap-x-3 cursor-pointer w-full rounded-md mt-3">
      <div className="flex gap-x-3">
        <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
          <Image src={release.cover} width={50} height={50} alt="Album Cover" />
        </div>
        <div className="flex flex-col justify-center overflow-hidden">
          <p className="text-white truncate">{release.name}</p>
          <p className="text-neutral-400 text-sm truncate">
            {release.numberOfSongs} songs
          </p>
        </div>
      </div>
      <div className="text-xs text-neutral-300">{release.duration}</div>
    </div>
  );
};

export default Playlist;
