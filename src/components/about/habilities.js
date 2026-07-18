import Cs from "../../assets/icons/cs.svg";
import Css from "../../assets/icons/css.svg";
import Dotnet from "../../assets/icons/dotnet.svg";
import Github from "../../assets/icons/github.svg";
import HTML from "../../assets/icons/html.svg";
import Postgresql from "../../assets/icons/postgresql.svg";
import React from "../../assets/icons/react.svg";
import Vs from "../../assets/icons/visualstudio.svg";
import Tailwind from "../../assets/icons/tailwindcss.svg";
import TypeScript from "../../assets/icons/typescript.svg";
import JavaScript from "../../assets/icons/javascript.svg";

export const habilities = [
  // Backend
  { img: Cs, label: "C#", type: "backend" },
  { img: Dotnet, label: ".NET", type: "backend" },
  { img: Postgresql, label: "PostgreSQL", type: "backend" },

  // Frontend
  { img: React, label: "React", type: "frontend" },
  { img: TypeScript, label: "TypeScript", type: "frontend" },
  { img: JavaScript, label: "JavaScript", type: "frontend" },
  { img: HTML, label: "HTML", type: "frontend" },
  { img: Css, label: "CSS", type: "frontend" },
  { img: Tailwind, label: "Tailwind CSS", type: "frontend" },

  // Others / herramientas
  { img: Github, label: "Github", type: "others" },
  { img: Vs, label: "Visual Studio", type: "others" },
];
