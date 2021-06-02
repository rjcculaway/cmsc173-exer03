import { atom } from "jotai";

export const series = [
  {
    src: "pexels-math-90946-zoomed.jpg",
    heading: "The [P]hoto Series",
    caption1: "Superior low-light performance.",
    caption2: "Rugged for the adventure of a lifetime.",
    color: "#fe6723",
  },
  {
    src: "pexels-ORANGE2.jpg",
    heading: "The [K]ahel Series",
    caption1: "Anything and everything orange.",
    caption2: "For a limited time only.",
    color: "#fc9d00",
  },
  {
    src: "",
    heading: "",
    caption1: "",
    caption2: "",
    color: "#ffe981",
  },
];

export const currentSeriesAtom = atom(0);
