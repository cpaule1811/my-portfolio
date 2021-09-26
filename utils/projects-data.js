import next from "../img/next-js.svg";
import reactIco from "../img/react-2.svg";
import postgres from "../img/postgresql-blue.svg";
import vercel from "../img/vercel-icon-dark.svg";
import DOIco from "../img/digitalocean.svg";
import trailerHubBg from "../img/Trailer-Hub.png";
import edhBuilderBg from "../img/Edh-Builder.PNG";
import greenstandBg from "../img/greenstand-logo.png";
import reduxIco from "../img/redux.svg";
import nodeIco from "../img/nodejs-icon.svg";
import postgresBlue from "../img/postgresql-blue.svg";
import redisIco from "../img/redis.svg";

export const projectData = [
  {
    title: "EDH Builder",
    tools: [
      {
        key: 1,
        name: "React",
        ico: reactIco,
      },
      {
        key: 2,
        name: "NodeJs",
        ico: nodeIco,
      },
      {
        key: 3,
        name: "Redux",
        ico: reduxIco,
      },
      {
        key: 3,
        name: "Redis",
        ico: redisIco,
      },
      {
        key: 4,
        name: "Postgres",
        ico: postgresBlue,
      },
      {
        key: 5,
        name: "Digital Ocean",
        ico: DOIco,
      },
    ],
    description:
      "Full stack web application for building Magic the Gathering trading card game decks",
    contribution: "Developer",
    background: edhBuilderBg,
    links: {
      github: "https://github.com/cpaule1811/EDH-BUILDER",
      live: "https://edhbuilder.com.au",
    },
  },
  {
    title: "Treetracker App",
    tools: [
      {
        key: 10,
        name: "next",
        ico: next,
      },
      {
        key: 11,
        name: "react",
        ico: reactIco,
      },
    ],
    description:
      "Transitioned application to Next.js. Also contributed some components, bug fixes and cypress tests.",
    contribution: "Contributer",
    background: greenstandBg,
    links: {
      github: "https://github.com/Greenstand/treetracker-web-map-client",
    },
  },
  {
    title: "Trailer Hub",
    tools: [
      {
        key: 6,
        name: "next",
        ico: next,
      },
      {
        key: 7,
        name: "react",
        ico: reactIco,
      },
      {
        key: 8,
        name: "Vercel",
        ico: vercel,
      },
      {
        key: 9,
        name: "Postgres",
        ico: postgres,
      },
    ],
    description:
      "A server side rendered application using Next.js and React that helps you find all your favorite movie trailers.",
    contribution: "Developer",
    background: trailerHubBg,
    links: {
      github: "https://github.com/cpaule1811/trailer-hub",
      live: "https://trailer-hub.vercel.app",
    },
  },
];
