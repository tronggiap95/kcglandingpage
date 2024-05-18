// src/components/AnimatedText.js
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import bgImage from "../../../public/images/image2.png";
import logo from "../../../public/images/logo.svg";
import logo2 from "../../../public/images/logo2.svg";
import logo3 from "../../../public/images/ds.svg";

const AnimatedText = () => {
  const controls = useAnimation();
  const newTextControls = useAnimation();
  const overlayControls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const newBlur = Math.min(scrollY / 50, 10); 

    if (scrollY < 200) {
      controls.start({
        filter: `blur(${newBlur}px)`,
        opacity: 1,
        transition: { duration: 0.5 }, 
      });
      setBackgroundOpacity(1);
    }

    if (scrollY >= 200) {
      controls.start({
        opacity: 0,
        transition: { duration: 0.5 }, 
      });
      newTextControls.start({
        opacity: 1,
        scale: 1 + scrollY / 300, 
        transition: { duration: 0.5 }, 
      });
      setBackgroundOpacity(0);
    } else {
      newTextControls.start({
        opacity: 0,
        scale: 1,
        transition: { duration: 0.5 }, 
      });
      setBackgroundOpacity(1);
    }

    if (scrollY >= 700) {
      newTextControls.start({
        opacity: 0,
        transition: { duration: 0.5 }, 
      });
      overlayControls.start({
        opacity: 0,
        transition: { duration: 0.5 }, 
      });
    } else {
      overlayControls.start({
        opacity: 1,
        transition: { duration: 0.5 }, 
      });
    }
  }, [scrollY, controls, newTextControls, overlayControls]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden bg-gr"
      // style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }}
      style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }}
      initial={{ opacity: 1 }}
      animate={overlayControls}
      transition={{ type: "", stiffness: 300 }}
    >
      {/* <Image
        src={bgImage}
        alt="background image"
        layout="fill"
        objectFit="cover"
        priority
        className="bg-gr"
      /> */}

      <motion.div
        className="absolute flex items-center justify-center over overflow-hidden"
        style={{ width: "318px", height: "227px" }}
        animate={controls}
        initial={{ scale: 1, filter: "blur(0px)" }}
        transition={{ type: "", stiffness: 300 }}
      >
        <Image src={logo2} width={318} height={227} alt="" />
      </motion.div>

      <motion.div
        className="absolute flex items-center justify-center"
        style={{ width: "100%", height: "100%" }}
        initial={{ scale: 1, opacity: 0 }}
        animate={newTextControls}
        transition={{ type: "", stiffness: 300 }}
      >
        <div
          className="h-[25%] w-screen bg-gr absolute top-0 left-0"
          style={{ backgroundSize: "100% 48%, 100% 6%, 100% 0%" }}
        ></div>
        <div
          className="h-[25%] w-screen bg-gr absolute bottom-0 left-0"
          style={{ backgroundSize: "100% 48%, 100% 6%, 100% 0%" }}
        ></div>
        <div
          className="h-[50%] w-[35%] bg-gr absolute left-0 top-[25%] bottom-[25%]"
          style={{ backgroundSize: "100% 48%, 100% 6%, 100% 0%" }}
        ></div>
        <div
          className="h-[50%] w-[35%] bg-gr absolute right-0  top-[25%] bottom-[25%]"
          style={{ backgroundSize: "100% 48%, 100% 6%, 100% 0%" }}
        ></div>
        <Image src={logo3} width={318} height={227} alt="" />
      </motion.div>
      <div className="w-screen h-screen"></div>
      <div className="w-screen h-screen"></div>

      <div className="w-screen h-screen"></div>

      <div className="w-screen h-screen"></div>
    </motion.div>
  );
};

export default AnimatedText;
