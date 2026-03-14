// app/components/Hero.tsx
"use client";
import Image from "next/image";
import avatar from "@images/b1.jpg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoLocation } from "react-icons/io5";
import { RiSpeakFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiGsap } from "react-icons/si";
import { MdOutlineDevices } from "react-icons/md";

import { Navbar, NavLink, NavItem } from "@/app/_components/NavBar";
const Education = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="w-full grid grid-cols-12">
        <Navbar />
        <div className="col-span-9 bg-amber-500 p-20 flex flex-col items-start justify-start w-full">
          <span className="text-2xl xl:text-8xl font-bold">Education </span>
          <div className="h-8" />
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 w-full">
            <div className="min-w-full snap-center bg-white/5 p-6 rounded-2xl border border-white/10">
              <span className="font-bold">Degree</span>
              <div className="space-y-10">
                {/* Degree */}
                <div className="group">
                  <h4 className="text-3xl font-black ">
                    Bachelor of Software Engineering | CGPA 3.85
                  </h4>
                  <p className="text-lg opacity-70 mt-1">
                    i-CATS, Kuching, Sarawak
                  </p>
                  <p className="text-sm  text-amber-900/60 mt-2">2022 — 2024</p>
                </div>

                {/* Divider Line */}
                <div className="h-4" />

                {/* Diploma */}
                <div className="group">
                  <h4 className="text-3xl font-black ">
                    Diploma in Software Engineering | CGPA 3.73
                  </h4>
                  <p className="text-lg opacity-70 mt-1">
                    i-CATS, Kuching, Sarawak
                  </p>
                  <p className="text-sm font-mono text-amber-900/60 mt-2">
                    2019 — 2021
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
};
export default Education;
