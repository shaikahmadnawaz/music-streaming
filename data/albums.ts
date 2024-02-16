export interface Album {
  name: string;
  artist: string;
  cover: string;
  duration?: string;
}

export const albums: Album[] = [
  {
    name: "Who I AM",
    artist: "Alan Walker",
    cover: "/albums/1.jpeg",
    duration: "3",
  },
  {
    name: "Believer",
    artist: "Imagine Dragons",
    cover: "/albums/2.jpeg",
    duration: "4",
  },
  {
    name: "Let Me Love You",
    artist: "DJ Snake",
    cover: "/albums/3.jpeg",
    duration: "3",
  },
  {
    name: "Faded",
    artist: "Alan Walker",
    cover: "/albums/4.jpeg",
    duration: "3",
  },
];
