import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-neutral-500 left-3" />
      <Input
        type="text"
        placeholder="Search for artists, songs, or albums"
        className="pl-12 bg-white text-black rounded-full pr-4"
      />
    </div>
  );
};

export default SearchBar;
