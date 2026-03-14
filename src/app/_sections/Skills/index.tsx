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
import { Navbar } from "@/app/_components/NavBar";
const Skills = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="w-full grid grid-cols-12">
        <Navbar />
        <div className="col-span-9 bg-amber-500 p-20 flex flex-col items-start justify-start w-full">
          <span className="text-2xl xl:text-8xl font-bold">Skills </span>
          <div className="h-8" />
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 w-full">
            <div className="min-w-full snap-center bg-white/5 p-6 rounded-2xl border border-white/10">
              <span className="font-bold">Technical Stack</span>

              <ul className="list-disc pl-6">
                <li>
                  <strong>Frontend</strong>: React, Next.js, TypeScript,
                  Javascript, Tailwind CSS, Bootstrap 5, SCSS, jQuery, Axios.
                </li>
                <li>
                  <strong>Backend & CMS</strong>: Node.js, PHP, Laravel,
                  WordPress.
                </li>
                <li>
                  <strong>Interactive & Motion</strong>: GSAP (GreenSock), 2D,
                  3D (todo).
                </li>
              </ul>
            </div>
            <div className="min-w-full snap-center bg-white/5 p-6 rounded-2xl border border-white/10">
              <span className="font-bold">Database & Infrastructure</span>

              <ul className="list-disc pl-6">
                <li>
                  <strong>Databases</strong>: MySQL, pgAdmin (PostgreSQL).
                </li>
                <li>
                  <strong>Environment</strong>: XAMPP, Webpack, Node Package
                  Manager (NPM).
                </li>
              </ul>
            </div>
            <div className="min-w-full snap-center bg-white/5 p-6 rounded-2xl border border-white/10">
              <span className="font-bold">Development Workflow</span>

              <ul className="list-disc pl-6">
                <li>
                  <strong>API Testing</strong>: Apifox, Postman.
                </li>
                <li>
                  <strong>Version Control</strong>: Git, GitHub.
                </li>
                <li>
                  <strong>Collaboration</strong>: Lark (Feishu), Microsoft
                  Office Suite
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
};
export default Skills;
