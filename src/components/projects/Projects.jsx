import React, { useEffect, useLayoutEffect, useState } from "react";
import { useTheme } from "../../helpingComponents/hook/ThemeContext";
import movix from "../../assets/project/movix.png";
import gitlike from "../../assets/project/gitlike.png";
import disney from "../../assets/project/disney.ico";
import portfolio from "../../assets/project/portfolio.png";
import template from "../../assets/project/template.png";
import dashboard from "../../assets/project/dashboard.png";

import { TextReveal } from "../../helpingComponents/textReveal/TextReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import TabView from "./components/TabView";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import GridViewProject from "./components/view/GridViewProject";
import ListViewProject from "./components/view/ListViewProject";
import { useBgContext } from "../../helpingComponents/hook/BgBlurContext";
import StarsCanvas from "../../helpingComponents/animate/StarCanvas";
import PageLoadingAnimation from "../../helpingComponents/animate/PageLoadingAnimation/PageLoadingAnimation";
import Footer from "../static/Footer/Footer";

const projectDetails = [
  {
    img: movix,
    name: "Movix",
    ghLink: "https://github.com/Yk-97-Jr/movix",
    lvLink: "https://movix-jr.vercel.app/",
    usedTech: [
      "React JS",
      "Tailwind CSS",
      "React Router DOM",
      "SASS",
      "Redux Toolkit",
      "TMDB API",
      "React Player",
      "Lazy load Image",
      "Skeleton",
    ],
    description: `Movix is a dynamic web app, seamlessly integrating with the TMDB API to provide users with a comprehensive entertainment experience. It offers real-time details on movies, TV shows, and personalities.`,
  },
  {
    img: gitlike,
    name: "gitlike",
    ghLink: "https://github.com/Yk-97-Jr/mern-github",
    lvLink: "https://gitlike.onrender.com/",
    usedTech: [
      "React JS",
      "React Router DOM",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Passport.js",
      "MongoDB",
      " Render",
    ],
    description: `About
    Github-like App is a project aimed at replicating some features of GitHub. It utilizes the MERN stack along with TailwindCSS and the GitHub API. The application allows users to authenticate using their GitHub accounts and interact with GitHub-like functionalities such as viewing user profiles, fetching repositories, and exploring repositories based`,
  },
  {
    img: disney,
    name: "disney plus clone",
    ghLink: "https://github.com/Yk-97-Jr/disneyPlusClone",
    lvLink: "https://disneyplus-f7007.firebaseapp.com/",
    usedTech: [
      "react JS",
      "firebase",
      "react-router",
      "axios",
      "firebase-auth",
      "firebase-database",
      "react hooks",
      "redux-toolkit",
    ],
    description: `A clone of the CodeHelp landing page featuring Swiper JS for smooth transitions, Framer Motion for animations, and React technologies for seamless interactivity.`,
  },
  {
    img: portfolio,
    name: "Personal portfolio",
    ghLink: "https://github.com/Yk-97-Jr/personal-Portfolio",
    lvLink: "https://youcef-jr.vercel.app/",
    usedTech: [
      "React JS",
      "Tailwind CSS",
      "Three JS",
      "Framer Motion",
      "Email JS",
      "React Tilt",
      "React Router DOM",
      "React Toastify",
    ],
    description: `My portfolio serves as a showcase of my skills and knowledge, featuring diverse projects, educational background, and dynamic animations implemented with Framer Motion. It provides a concise overview of my capabilities and experiences.`,
  },
  {
    img: template,
    name: "template portfolio",
    ghLink: "https://github.com/Yk-97-Jr/MyPortfolio",
    lvLink: "https://template-portfolio-psi.vercel.app/",
    usedTech: [
      "React JS",
      " CSS",
      "Framer Motion",
      "Vite",
      "Formspree",
      "Lottie",
      "React Simple Typewriter",
    ],
    description: `This website template uses React and Vite to create a portfolio. It has cool features like a changing header, a fun hero section, and a section to show off projects. It also handles forms and animations smoothly. You can switch between light and dark themes, and there's a menu that pops up when you need it. It works well on different screen sizes, so it's great for showing off your work!
`,
  },
  {
    img: dashboard,
    name: "Admin Dashboard",
    ghLink: "https://github.com/Yk-97-Jr/Admin-Dashboard",
    lvLink: "https://admin-dashboard-henna-seven.vercel.app/",
    usedTech: [
      "React JS",
      "React Router DOM",
      "Tailwind CSS",
      "YUP",
      "Material UI",
      "Nivo Charts",
      "Full Calendar",
      "Formik",
    ],
    description: `An Admin Dashboard for employee and admin management, featuring comprehensive data visualization through various charts. It includes a fully-fledged calendar system to track events efficiently.`,
  },
];

const view = [
  { name: "Grid", icon: <BsFillGrid3X3GapFill /> },
  { name: "List", icon: <FontAwesomeIcon icon={faList} /> },
];

const Projects = () => {
  const { mode } = useTheme();
  const { open } = useBgContext();
  const [tabView, setTabView] = useState(view[0].name);
  const comparableWidth = 1150;
  const [isInView, setIsInView] = useState(
    window.innerWidth >= comparableWidth
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    const handleScrWidth = () => {
      const scrWidth = window.innerWidth;
      if (scrWidth >= comparableWidth) {
        setIsInView(true);
      } else {
        setIsInView(false);
        setTabView("Grid");
      }
    };
    handleScrWidth();

    window.addEventListener("resize", handleScrWidth);
    return () => window.removeEventListener("resize", handleScrWidth);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoadingAnimation />
      ) : (
        <div
          className={`${mode === "dark" ? "text-light" : ""} ${
            open && "blur-[7px] cursor-not-allowed"
          } px-5 md:px-3 pt-[70px] sm:pt-[60px] min-h-screen`}
        >
          <StarsCanvas starsCount={"5000"} />
          <div
            className={`text-center text-[25px] sm:text-5xl md:text-[55px] lg:text-[73px] font-extrabold 2xl:text-8xl pt-3 sm:pt-6 xl:pt-14 lg:pt-16 lg:px-20 tracking-wide ${
              mode === "dark" ? "text-indigo-400" : "text-indigo-500"
            }`}
          >
            <TextReveal child={`Projects I've completed!`} />
          </div>

          {/* Switch view */}
          {isInView && (
            <motion.div
              initial={{ y: -300 }}
              animate={{ y: 0, transition: { delay: 0.7, duration: 0.8 } }}
              className="w-full flex items-center justify-center mt-3 sm:mt-5 md:mt-7 lg:sticky top-[65px] z-50"
            >
              <div
                className={`w-full md:w-[80%] lg:w-[70%] xl:w-[60%] px-1 py-1 md:py-2 md:px-2 flex items-center justify-between rounded-full bg-gradient-to-br ${
                  mode === "dark"
                    ? "from-[#823c9ef3] to-[#035caaf2]"
                    : "ring-[1p] from-[#94ffcb] to-[#87bbff] ring-violet-600"
                } `}
              >
                <div
                  className={`text-white text-sm transition-colors px-4 py-1 sm:py-2 rounded-full relative`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-x-2 text-[15px] md:text-[17px]">
                    View
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></span>
                </div>
                <TabView
                  options={view}
                  chosenView={tabView}
                  setTabView={setTabView}
                />
              </div>
            </motion.div>
          )}

          <div className="mt-10 pb-16">
            {tabView === "Grid" ? (
              <GridViewProject projectDetails={projectDetails} />
            ) : (
              <ListViewProject projectDetails={projectDetails} />
            )}
          </div>
        </div>
      )}

      {open && <div className=" fixed top-0 left-0 w-full h-full" />}

      <Footer />
    </>
  );
};

export default Projects;
