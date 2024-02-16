import { Compass, Home, ListMusic } from "lucide-react";

type Feature = {
  label: string;
  icon: React.ReactElement;
};

export const features: Feature[] = [
  { label: "Home", icon: <Home className="mr-2 h-4 w-4" /> },
  { label: "Discover", icon: <Compass className="mr-2 h-4 w-4" /> },
  { label: "Collection", icon: <ListMusic className="mr-2 h-4 w-4" /> },
];
