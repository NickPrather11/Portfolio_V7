export interface ILogo {
  name: string;
  url: string;
  imgFile: string;
}

const dbLogoSeed: ILogo[] = [
  {
    name: "Node",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png",
    imgFile: "/techLogos/Node.js_logo.svg",
  },
  {
    name: "React",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png",
    imgFile: "/techLogos/React_Logo_SVG.svg",
  },
  {
    name: "Typescript",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1024px-Typescript.svg.png",
    imgFile: "/techLogos/Typescript.svg",
  },
  {
    name: "Next",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1024px-Nextjs-logo.svg.png",
    imgFile: "/techLogos/Nextjs-logo.svg",
  },
  {
    name: "Tailwind",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/1024px-Tailwind_CSS_logo.svg.png",
    imgFile: "/techLogos/Tailwind_CSS_logo.svg",
  },
  {
    name: "MongoDB",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/1024px-MongoDB_Fores-Green.svg.png",
    imgFile: "/techLogos/MongoDB_Fores-Green.svg",
  },
  {
    name: "Mongoose",
    url: "",
    imgFile: "/techLogos/mongoose_logo.png",
  },
];

export default dbLogoSeed;
