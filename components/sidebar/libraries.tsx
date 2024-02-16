import { Download, FolderClosed, Heart } from "lucide-react";

type Library = {
  label: string;
  icon: React.ReactElement;
};

export const libraries: Library[] = [
  { label: "Download", icon: <Download className="mr-2 h-4 w-4" /> },
  { label: "Favorites", icon: <Heart className="mr-2 h-4 w-4" /> },
  { label: "Local Files", icon: <FolderClosed className="mr-2 h-4 w-4" /> },
];
