import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-12">
      <Sidebar />
      <section className="lg:border lg:col-span-8 bg-neutral-900">
        <ScrollArea className="h-screen -mt-[100px] px-1">
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Discover
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Collection
            </Button>
          </div>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Discover
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Collection
            </Button>
          </div>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Discover
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Collection
            </Button>
          </div>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Discover
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Collection
            </Button>
          </div>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Discover
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Collection
            </Button>
          </div>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Discover
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Collection
            </Button>
          </div>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Discover
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:text-blue-600 hover:bg-transparent justify-start"
            >
              Collection
            </Button>
          </div>
        </ScrollArea>
      </section>
      <Profile />
    </main>
  );
}
