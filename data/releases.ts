export interface Release {
  name: string;
  artist: string;
  cover: string;
  numberOfSongs?: number;
  duration?: string;
}

export const releases: Release[] = [
  {
    name: "Faded",
    artist: "Alan Walker",
    cover: "/albums/5.jpeg",
    numberOfSongs: 12,
    duration: "1hr 56min",
  },
  {
    name: "Wonderland",
    artist: "Axel Johansson",
    cover: "/albums/6.jpeg",
    numberOfSongs: 10,
    duration: "1hr 30min",
  },
  {
    name: "Hero",
    artist: "Alan Walker",
    cover: "/albums/7.jpeg",
    numberOfSongs: 15,
    duration: "2hr 10min",
  },
  {
    name: "Infinity",
    artist: "Jaymes Young",
    cover: "/albums/8.jpeg",
    numberOfSongs: 14,
    duration: "2hr 5min",
  },
];
