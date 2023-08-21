import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const links = [
  {
    id: 1,
    link: "#",
    title: "Home",
  },
  {
    id: 2,
    link: "#about",
    title: "About",
  },
  {
    id: 3,
    link: "#services",
    title: "Services",
  },
  {
    id: 4,
    link: "#portfolio",
    title: "Portfolio",
  },
  {
    id: 5,
    link: "#contact",
    title: "Contact",
  },
];

export const socials = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/geekyprashant/",
    icon: <BsLinkedin />,
  },
  {
    id: 2,
    link: "https://github.com/geeky-prashant",
    icon: <BsGithub />,
  },
  {
    id: 3,
    link: "mailto:geekyprashant840@gmail.com",
    icon: <SiGmail />,
  },
];
