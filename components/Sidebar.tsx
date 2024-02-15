import {
  ChevronsLeft,
  Home,
  Compass,
  ListMusic,
  Download,
  Heart,
  FolderClosed,
} from "lucide-react";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <section className="md:col-span-2 hidden md:flex flex-col gap-y-2 h-full p-2">
      <div className="p-3 pl-6 mb-2 flex items-center w-full">
        <h1 className="font-black text-3xl text-primary text-purple-700">W</h1>
        <Button className="h-auto p-2 ml-auto" variant="ghost">
          <ChevronsLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="pb-12">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 tracking-tight">FEATURES</h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
              <Button
                variant="ghost"
                className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
              >
                <Compass className="mr-2 h-4 w-4" />
                Discover
              </Button>
              <Button
                variant="ghost"
                className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
              >
                <ListMusic className="mr-2 h-4 w-4" />
                Collection
              </Button>
            </div>
          </div>

          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 tracking-tight">LIBRARY</h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button
                variant="ghost"
                className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
              >
                <Heart className="mr-2 h-4 w-4" />
                Favorites
              </Button>
              <Button
                variant="ghost"
                className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
              >
                <FolderClosed className="mr-2 h-4 w-4" />
                Local Files
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
