import ctrlv from "../public/ctrlv.png";
import messageme from "../public/messageme.png";
import quickk from "../public/quickk.png";
import fetiino from "../public/fetiino.png";
import openfork from "../public/openfork.png";

const projects = [
  {
    logo: openfork,
    name: "Openfork",
    description: "Find, publish and contribute to open-source projects.",
    url: "https://github.com/bossoncode/openfork/",
    emoji:
      "https://cdn.joypixels.com/products/previews/O6D7BMG8R2DMMNC4LLZH/3151_oeXy1M0pFTMnI3HDYsNLatzxUk5FeHBx.gif",
    tags: [
      {
        icon: "fa-solid fa-code-branch",
        title: "Open-source AF",
        bg: "#44d236",
        text: "#000",
      },
      {
        icon: "fa-solid fa-trowel-bricks",
        title: "In development",

        bg: "#2962ff",
        text: "#fff",
      },
    ],
  },
  {
    logo: fetiino,
    name: "Fetiino",
    description: "Color tool for designers and developers",
    url: "https://fetiino-redesign.netlify.app/",
    emoji:
      "https://cdn.joypixels.com/products/previews/O6D7BMG8R2DMMNC4LLZH/3151_oeXy1M0pFTMnI3HDYsNLatzxUk5FeHBx.gif",
    tags: [
      {
        icon: "fa-solid fa-award",
        title: "Won Hashnode hackathon",
        bg: "#2962ff",
        text: "#fff",
      },
      {
        icon: "fa-solid fa-thumbs-down",
        title: "Turned down $7k acquisition offer",
        bg: "#e5494d",
        text: "#fff",
      },
    ],
  },
  {
    logo: quickk,
    name: "Quickk",
    description:
      "Blogging platform with cryptocurrency donation infrastructure.",
    url: "https://quickk.blog",
    emoji:
      "https://cdn.joypixels.com/products/previews/O6D7BMG8R2DMMNC4LLZH/2414_hkANf9qjgdZAfCrthU0U0zM1lXepcdJp.gif",
    tags: [
      {
        icon: "fa-solid fa-heart-crack",
        title: "Didn't win hackathon",
        bg: "#12a593",
      },
      {
        icon: "fa-solid fa-users",
        title: "50+ users in 24 hours of launch",
        bg: "#ffb224",
        text: "#000",
      },
      {
        icon: "fa-solid fa-sack-dollar",
        title: "$0 MRR",
        bg: "#9ad52b",
        text: "#000",
      },
    ],
  },
  {
    logo: messageme,
    name: "MessageMe",
    description: "Anonymous messaging platform",
    url: "https://messageme.me",
    emoji:
      "https://cdn.joypixels.com/products/previews/O6D7BMG8R2DMMNC4LLZH/2332_RCzlB4jrR8ETuzqKU0wVXmu1qBQP5SuN.gif",
    tags: [
      {
        icon: "fa-solid fa-forward",
        title: "Built in 2 weeks",
        bg: "#f66809",
      },
      {
        icon: "fa-solid fa-face-surprise",
        title: "300+ users",
        bg: "#f5d90b",
        text: "#000",
      },
      {
        icon: "fa-solid fa-face-grin-hearts",
        title: "My friends love it",
        bg: "#d6419f",
      },
    ],
  },
  {
    logo: ctrlv,
    name: "CtrlV",
    description: "Cross-platform file, texts and links sharing tool.",
    url: "https://ctrlv.app",
    emoji:
      "https://cdn.joypixels.com/products/previews/O6D7BMG8R2DMMNC4LLZH/3148_0Zf7XssvjygbfIK0wUIrodM7C43tdOqc.gif",
    tags: [
      {
        icon: "fa-solid fa-mobile",
        title: "10 platforms",
        bg: "#f4d80a",
        text: "#000",
      },
      {
        icon: "fa-solid fa-user-group",
        title: "Got a co-founder",
        bg: "#6e56ce",
      },
      {
        icon: "fa-solid fa-rocket",
        title: "Coming soon",
        bg: "#0091fe",
      },
    ],
  },
];

export default projects;
