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
const Experience = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="w-full grid grid-cols-12">
        <Navbar />
        <div className="col-span-9 bg-amber-500 p-20 flex flex-col items-start justify-start w-full">
          <span className="text-2xl xl:text-8xl font-bold">Experience </span>
          <div className="h-8" />
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 w-full">
            <div className="min-w-full snap-center bg-white/5 p-6 rounded-2xl border border-white/10">
              <span className="font-bold">April - December 2025</span>
              <span className="font-bold">
                Web Developer | Enlliance, Selangor{" "}
              </span>
              <ul className="list-disc pl-6">
                <li>
                  Developed customer-facing landing pages and internal company
                  websites using React, Next.js, TypeScript, and Tailwind CSS.
                </li>
                <li>
                  Designed and developed interactive frontend components for a
                  POS system floor plan, including features like drag-and-drop,
                  canvas panning, seat rotation, and status management using
                  GSAP.
                </li>
                <li>
                  Responsible for the backend API development using Go (Golang)
                  and Apifox, covering all floor plan logic and data management.
                </li>
              </ul>
            </div>
            <div className="min-w-full snap-center bg-white/5 p-6 rounded-2xl border border-white/10">
              <span className="font-bold">August - December 2024</span>
              <span className="font-bold">
                Internship | Government Library Sarikei, Sarawak{" "}
              </span>

              <ul className="list-disc pl-6">
                <li>
                  <strong>Full-Stack System Development:</strong> Designed and
                  developed a Library Management System
                  (Frontend:HTML+Bootstrap5+SCSS + Backend:Php) as a core
                  project to streamline library operations.
                </li>
                <li>
                  <strong>Landing Page Design:</strong> Created a landing page
                  to promote library services, marking{" "}
                  <strong>my first exploration</strong> into web animations to
                  enhance user engagement
                </li>

                <li>
                  <strong>Minor Technical Problem Solving:</strong> Provided
                  essential technical support and managed digital documentation
                </li>
              </ul>
            </div>
            <div className="min-w-full snap-center bg-white/5 p-6 rounded-2xl border border-white/10">
              <span className="font-bold">August - December 2022</span>
              <span className="font-bold">
                Web Development Internship | Cloudkia Kuching, Sarawak{" "}
              </span>

              <ul className="list-disc pl-6">
                <li>
                  <strong>Responsive Web Development:</strong> Successfully
                  built fully functional websites (100% reproduction) using
                  WordPress, mastering plugin integration and theme
                  customization.
                </li>
                <li>
                  <strong>Modern Frontend Stack:</strong> Leveraged Bootstrap 5
                  and SCSS to create responsive, high-performance layouts,
                  ensuring a modern look and feel across all devices.
                </li>
                <li>
                  <strong>E-commerce & CMS Research:</strong> Evaluated and
                  tested various applications (e.g., WooCommerce) to determine
                  the best-fit solutions for different project requirements.
                </li>
                <li>
                  <strong>Quality Assurance (QA):</strong> Helping the
                  colleagues to do the visual testing.
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
};
export default Experience;
