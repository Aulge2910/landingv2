"use client";

import { FaReact } from "react-icons/fa";
import { SiGsap } from "react-icons/si";
import { MdOutlineDevices } from "react-icons/md";
import { Card, Container } from "@/app/_components/PortfolioShowcase";

const About = () => {
  return (
      <Container>
        <Card title="About Me">
          <span className="text-xl font-light">
            I'm <strong className="font-bold">Amy Tiong Ting Ting</strong>,
            Junior Front/Back End Web Developer
          </span>
          <div className="h-4" />
          <p className=" leading-relaxed tracking-tight">
            I am passionate about
            <strong className="font-bold">
              building creative & interactive frontend
            </strong>
            experiences using GSAP. I focus on capturing user attention through
            smooth performance and engaging motion. My ultimate goal is to
            bridge the gap by
            <strong>
              turning complex designs into clean, codeable realities.
            </strong>
          </p>
          <div className="h-4" />
          <span className=" ">
            Currently seeking a
            <strong className="font-bold"> full-time challenge </strong> in
            software engineering, where I can push the limits of
            <strong> modern web development </strong>.
          </span>
          <div className="h-4" />
          <div className="w-full grid grid-cols-12 gap-2">
            <div className="w-full col-span-12 lg:col-span-7 grid grid-cols-2 text-center ">
              <div className="flex flex-col justify-center items-center p-8  bg-black  border-r border-b border-white border-dotted">
                <span className="xl:text-4xl text-2xl font-black text-amber-500 ">
                  1+
                </span>
                <span className="uppercase text-xs text-white my-1">
                  Years Experience
                </span>
              </div>
              <div className="flex flex-col justify-center items-center p-8 bg-black border-l border-b border-white border-dotted">
                <span className="xl:text-4xl text-2xl font-black text-amber-500">
                  Self
                </span>
                <span className="uppercase text-xs text-white my-1">
                  Driven Learner
                </span>
              </div>
              <div className="flex flex-col justify-center items-center p-8 bg-black border-r border-white border-dotted ">
                <span className="xl:text-4xl text-2xl font-black text-amber-500">
                  2D/3D Explorer
                </span>
                <span className="uppercase text-xs text-white my-1">
                  Future Vision
                </span>
              </div>
              <div className="flex flex-col justify-center items-center p-8 bg-black border-l border-b border-white border-dotted">
                <span className="xl:text-4xl text-2xl font-black text-amber-500 ">
                  Clean Architect
                </span>
                <span className="uppercase text-xs text-white my-1">
                  Clean Code Mindset
                </span>
              </div>
            </div>
            <div className="w-full col-span-12 lg:col-span-5 flex flex-col items-start justify-start h-full px-4">
              <span className="xl:text-2xl text-lg font-black">What I Do?</span>
              <div className="h-2" />
              <div className="flex flex-col h-full justify-between">
                <div className="grid grid-cols-8 items-center justify-center w-full ">
                  <div className="w-full col-span-2 flex items-center justify-center">
                    <FaReact className="w-12 h-12 " />
                  </div>
                  <div className="flex flex-col col-span-6 h-full w-full">
                    <span className="text-md font-bold">
                      Front/Back End Web Development
                    </span>
                    <span className="text-sm">
                      Building scalable and clean web applications using{" "}
                      <strong> React, Next, Typescript </strong>.
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-8 items-center justify-center">
                  <div className="w-full col-span-2 flex items-center justify-center">
                    <MdOutlineDevices className="w-12 h-12 " />
                  </div>
                  <div className="flex flex-col col-span-6 h-full w-full">
                    <span className="text-md font-bold">
                      User Friendly Web Design
                    </span>
                    <span className="text-sm">
                      Designing intuitive interfaces with a{" "}
                      <strong>Mobile-First</strong> approach.
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-8 items-center justify-center">
                  <div className="w-full col-span-2 flex items-center justify-center">
                    <SiGsap className="w-12 h-12 " />
                  </div>
                  <div className="flex flex-col col-span-6 h-full w-full">
                    <span className="text-md font-bold">
                      Interactive Web Animation
                    </span>
                    <span className="text-sm">
                      Crafting high-end web motions with <strong>GSAP</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    
  );
};

export default About;
