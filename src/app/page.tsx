"use client";

import Image from "next/image";
import logo from "../../public/images/logo.svg";
import arrowDown from "../../public/images/arrowDown.svg";
import bgImage from "../../public/images/image1.png";
import { useState } from "react";
import AnimatedText from "@/components/ScrollAnimation/ScrollAnimation";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleArrowClick = () => {
    setIsClicked(true);
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <main className="flex w-screen  flex-col items-center justify-between overflow-x-hidden ">
      {/* <div className="bg-[#151515] w-screen h-screen flex justify-center items-center ">
        <Image src={logo} width={318} height={287} alt="logo" />
        <div
          className="absolute bottom-[15px] cursor-pointer"
          onClick={handleArrowClick}
        >
          <Image
            src={arrowDown}
            width={46}
            height={46}
            alt="arrow"
            className="animate-bounce"
          />
        </div>
      </div>
      <div className="relative h-screen w-screen">
        <Image
          src={bgImage}
          alt="background image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div
          className="h-[25%] w-screen bg-grd absolute top-0 left-0"
          style={{ backgroundSize: "100% 48%, 100% 6%, 100% 0%" }}
        ></div>
        <div
          className="h-[25%] w-screen bg-grd absolute bottom-0 left-0"
          style={{ backgroundSize: "100% 48%, 100% 6%, 100% 0%" }}
        ></div>
        <div
          className="h-[50%] w-[35%] bg-grd absolute left-0 top-[25%] bottom-[25%]"
          style={{ backgroundSize: "100% 48%, 100% 6%, 100% 0%" }}
        ></div>
        <div
          className="h-[50%] w-[35%] bg-grd absolute right-0  top-[25%] bottom-[25%]"
          style={{ backgroundSize: "100% 48%, 100% 6%, 100% 0%" }}
        ></div>
      </div> */}
      <AnimatedText />

      <div className="fixed top-0 bg-green-500 w-screen h-screen overflow-x-hidden">
        {/* <h1 className="text-3xl text-white">Main Content</h1>
        <p className="text-white">
          This is the main content of the page. It will be visible when the
          overlay disappears.
        </p> */}
        <Image
          src={bgImage}
          alt="background image"
          style={{
            width: "100vw",
            height: "100vh",
          }}
          // layout="fill"
          // objectFit="cover"
          // priority
        />
      </div>
      <div className="w-screen h-screen">
        <h1>hhrhehrher</h1>
      </div>
      <div className="w-screen h-screen"></div>

      <div className="w-screen h-screen"></div>

      <div className="w-screen h-screen"></div>
    </main>
  );
}
