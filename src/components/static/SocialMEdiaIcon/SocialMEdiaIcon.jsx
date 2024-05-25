import React from "react";
import { motion } from "framer-motion";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../../helpingComponents/hook/ThemeContext";

const SocialMEdiaIcon = () => {
  const { mode } = useTheme();

  const iconLinks = [
    {
      name: faLinkedin,
      color: "#0a66c2",
      link: "https://www.linkedin.com/in/youcef-khalfi/",
    },
    {
      name: faInstagram,
      color: "#F56040",
      link: "https://www.instagram.com/jr.youcef_jr/",
    },
    {
      name: faGithub,
      color: mode === "dark" ? "#ffffff" : "#000",
      link: "https://github.com/Yk-97-Jr",
    },

    {
      name: faFacebookF,
      color: mode === "dark" ? "	#1877F2" : "#1877F2",
      link: "https://web.facebook.com/unkut.andiinoviski1/",
    },
  ];

  return (
    <span className="flex items-center justify-center py-5 2xl:py-0 fixed -bottom-2 right-1/2 2xl:right-8 translate-x-1/2 2xl:top-1/2 2xl:-translate-y-1/2 z-50">
      <span
        className={`flex items-center justify-between gap-x-9 ring-2 ${
          mode === "dark" ? "bg-[#00000085]" : "bg-[#ee9ff846]"
        } ring-blue-400 2xl:flex-col backdrop-blur-[5px] z-20 2xl:px-2 2xl:py-7 2xl:gap-y-9 rounded-full w-fit px-6 py-1 `}
      >
        {iconLinks.map((item, index) => (
          <a href={item.link} target="_blank" key={index}>
            <motion.span
              className="w-6 flex items-center justify-center"
              whileHover={{ y: -3 }}
            >
              <FontAwesomeIcon
                icon={item.name}
                style={{ color: item.color }}
                className="w-full h-full cursor-pointer"
                key={index}
              />
            </motion.span>
          </a>
        ))}
      </span>
    </span>
  );
};

export default SocialMEdiaIcon;
