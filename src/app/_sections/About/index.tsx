 
"use client";
import Image from "next/image";
import avatar from "@images/b1.jpg"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 import { IoLocation } from "react-icons/io5";
 import {RiSpeakFill} from "react-icons/ri";
 import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";import { FaReact } from "react-icons/fa";
import { SiGsap } from "react-icons/si";
import { MdOutlineDevices } from "react-icons/md";
const About = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="w-full grid grid-cols-12">
        <div className="w-full flex flex-col items-center justify-center col-span-3 bg-[#FDFCF8] ">
          <div className="overflow-hidden h-160 w-full  aspect-square">
            <img
              src={avatar.src}
              alt="avatar"
              className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-full h-full flex flex-col">
            <ul className="w-full h-full flex flex-col justify-center items-center">
            
              <li className="flex items-center justify-center gap-2 w-full h-full">
                <RiSpeakFill className="w-6 h-6" />
                Language
              </li>
              <li className="flex items-center justify-center gap-2 w-full h-full">
                <MdEmail className="w-6 h-6" />
                Email
              </li>
              <li className="flex items-center justify-center gap-2 w-full h-full">
                <AiFillGithub className="w-6 h-6" />
                Username
              </li>
              <li className="flex items-center justify-center gap-2 w-full h-full">
                <IoMdContact className="w-6 h-6" />
                Contact
              </li>
            </ul>
            {/* <ul className="w-full h-full flex flex-col font-bold">
              <li className="flex items-center justify-center gap-2 w-full h-full">
                Home
              </li>
              <li className="flex items-center justify-center gap-2 w-full h-full">
                About
              </li>
              <li className="flex items-center justify-center gap-2 w-full h-full">
                Experience
              </li>
              <li className="flex items-center justify-center gap-2 w-full h-full">
                Education
              </li>
              <li className="flex items-center justify-center gap-2 w-full h-full">
                Contact
              </li>
            </ul> */}
          </div>
        </div>

        <div className="col-span-9 bg-amber-500 p-20 flex flex-col items-start justify-start">
          <span className="text-2xl xl:text-8xl font-bold">ABOUT ME </span>
          <div className="h-8" />
          <span className="text-xl font-light">
            I'm <strong>Amy Tiong Ting Ting</strong>, Junior Front/Back End Web
            Developer
          </span>
          <div className="h-4" />
          <span>
            I am passionate about{" "}
            <strong> building creative & interactive frontend </strong>
            experiences using GSAP. I focus on capturing user attention through
            smooth performance and engaging motion. My ultimate goal is to
            bridge the gap by{" "}
            <strong>
              turning complex designs into clean, codeable realities.
            </strong>
          </span>
          <div className="h-4" />
          <span>
            Currently seeking a <strong> full-time challenge </strong> in
            software engineering, where I can push the limits of{" "}
            <strong> modern web development </strong>.
          </span>
          <div className="h-4" />
          <div className="w-full grid grid-cols-12">
            <div className="w-full col-span-7 grid grid-cols-2 text-center">
              <div className="flex flex-col justify-center items-center p-8">
                <span className="xl:text-4xl text-2xl font-black">1+</span>
                <span className="uppercase text-xs text-white">
                  Years Experience
                </span>
              </div>
              <div className="flex flex-col justify-center items-center p-8">
                <span className="xl:text-4xl text-2xl font-black">Self</span>
                <span className="uppercase text-xs text-white">
                  Driven Learner
                </span>
              </div>
              <div className="flex flex-col justify-center items-center p-8">
                <span className="xl:text-4xl text-2xl font-black">
                  2D/3D Explorer
                </span>
                <span className="uppercase text-xs text-white">
                  Future Vision
                </span>
              </div>
              <div className="flex flex-col justify-center items-center p-8">
                <span className="xl:text-4xl text-2xl font-black">
                  Clean Architect
                </span>
                <span className="uppercase text-xs text-white">
                  Clean Code Mindset
                </span>
              </div>
            </div>
            <div className="w-full col-span-5 flex flex-col items-start justify-start h-full">
              <span className="xl:text-2xl text-lg font-black">What I Do?</span>
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
        </div>
      </div>
    </section>
  );
}

export default About;