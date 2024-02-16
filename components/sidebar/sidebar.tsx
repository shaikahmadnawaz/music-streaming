import { ChevronsLeft } from "lucide-react";
import { Button } from "../ui/button";
import { features } from "@/components/sidebar/features";
import { libraries } from "./libraries";

const Sidebar = () => {
  return (
    <section className="md:col-span-2 hidden md:flex flex-col p-2 md:p-6 gap-y-4 h-full">
      <div className="mt-2 mb-2 flex items-center w-full">
        <h1 className="font-black text-4xl text-primary">W</h1>
        <Button className="h-auto p-2 ml-auto" variant="ghost">
          <ChevronsLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-col gap-y-3 mt-4">
        <div className="py-2">
          <h2 className="mb-2 text-neutral-500 tracking-tight">FEATURES</h2>
          <div className="space-y-1">
            {features.map((feature, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full hover:text-blue-700 hover:bg-transparent pl-0 justify-start"
              >
                {feature.icon}
                {feature.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="py-2">
          <h2 className="mb-2 text-neutral-500 tracking-tight">LIBRARY</h2>
          <div className="space-y-1">
            {libraries.map((library, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full hover:text-blue-700 hover:bg-transparent pl-0 justify-start"
              >
                {library.icon}
                {library.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
