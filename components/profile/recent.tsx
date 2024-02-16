import { Album } from "@/data/albums";
import Image from "next/image";

interface RecentProps {
  album: Album;
}

const Recent: React.FC<RecentProps> = ({ album }) => {
  return (
    <div className="flex items-center justify-between gap-x-3 cursor-pointer w-full rounded-md mt-3">
      <div className="flex gap-x-3">
        <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
          <Image src={album.cover} width={50} height={50} alt="Album Cover" />
        </div>
        <div className="flex flex-col justify-center overflow-hidden">
          <p className="text-white truncate">{album.name}</p>
          <p className="text-neutral-400 text-sm truncate">By {album.artist}</p>
        </div>
      </div>
      <div className="text-xs text-neutral-300">{album.duration} min ago</div>
    </div>
  );
};

export default Recent;
