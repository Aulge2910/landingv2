"use client";
import { useRef, useEffect } from "react";
import gsap, { random } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const skills1Ref = useRef<HTMLDivElement>(null);
  const skills2Ref = useRef<HTMLDivElement>(null);
  const skillSection1Ref = useRef<HTMLDivElement>(null);
  const skillSection2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current || !sectionRef.current || !svgRef.current) return;

      gsap.to(svgRef.current, {
        rotation: () => gsap.utils.random(-15, 15),
        opacity: gsap.utils.random(0.3, 0.8),
        duration: gsap.utils.random(0.4, 1.2),
        repeatRefresh: true,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "center center",
      });

      gsap.from(contentRef.current, {
        y: -240,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 60%",
          end: "bottom 10%",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef },
  );

  useGSAP(
    () => {
      const skillCard1 = gsap.utils.toArray(".skill-card1");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillSection1Ref.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(
        skillCard1,
        {
          y: (i) => 600 + i * 200,
          opacity: 0,
          rotation: -15,
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          stagger: 0.6,
          duration: 2,
          ease: "power2.out",
        },
      )

        .to({}, { duration: 1 })

        .fromTo(
          skillCard1,
          {
            y: 0,
            opacity: 1,
            rotation: 0,
          },
          {
            y: (i) => -600 - i * 400,
            opacity: 0,
            rotation: (i) => 15 + i * 5,
            stagger: 0.4,
            duration: 2,
            ease: "power2.in",
          },
        );
    },
    { scope: skillSection1Ref },
  );

  useGSAP(
    () => {
      const skillCard2 = gsap.utils.toArray(".skill-card2");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillSection2Ref.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(
        skillCard2,
        {
          y: (i) => 600 + i * 200,
          opacity: 0,
          rotation: -15,
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          stagger: 0.6,
          duration: 2,
          ease: "power2.out",
        },
      )

        .to({}, { duration: 1 })

        .fromTo(
          skillCard2,
          {
            y: 0,
            opacity: 1,
            rotation: 0,
          },
          {
            y: (i) => -600 - i * 400,
            opacity: 0,
            rotation: (i) => 15 + i * 5,
            stagger: 0.4,
            duration: 2,
            ease: "power2.in",
          },
        );
    },
    { scope: skillSection2Ref },
  );
  return (
    <section ref={sectionRef} className="w-full min-h-screen">
      <div className="relative w-full min-h-screen flex flex-col items-center justify-start bg-black text-white overflow-hidden">
        <div
          ref={svgRef}
          className="w-20 h-20 flex items-center justify-center"
        >
          <svg
            width="161"
            height="320"
            viewBox="-10 -10 181 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "visible" }}
            className="w-auto h-full max-h-[60vh]"
          >
            <path
              d="M58.7341 9.99991C136.063 142 45.5634 255 14.5634 163.5C-16.4366 72 240.563 139.5 42.0634 316"
              stroke="white"
              strokeLinecap="round"
              strokeWidth="10"
            />
            <line
              x1="62.3814"
              y1="7.60354"
              x2="158.381"
              y2="59.6035"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <line
              x1="63.8627"
              y1="3.17483"
              x2="3.86271"
              y2="76.1748"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div
          ref={contentRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-black text-center w-full "
        >
          WHAT DID I DO?
        </div>
      </div>

      <div
        ref={skillSection1Ref}
        className=" relative w-full min-h-screen flex flex-col items-start bg-black text-white overflow-hidden"
      >
        <div
          ref={skills1Ref}
          className="flex flex-col min-h-screen w-full p-20 relative "
        >
          <span className="skill-card1 font-bold text-8xl absolute top-20 ">
            WEB DEVELOPMENT
          </span>
          <div className="h-8" />
          <p className="skill-card1 font-thin text-2xl p-4   w-200 absolute top-50">
            Building responsive and interactive web applications using modern
            frontend technologies.
          </p>
          <p className="skill-card1 font-thin text-2xl p-4   w-100 text-right absolute top-80 ">
            Crafting reusable components and scalable interfaces with React and
            more.
          </p>
          <p className="skill-card1 font-thin text-2xl p-4   w-150 text-center absolute top-120">
            Turning ideas into responsive and engaging web experiences.
          </p>
        </div>
      </div>

      <div
        ref={skillSection2Ref}
        className="relative w-full min-h-screen flex flex-col items-start bg-black text-white overflow-hidden"
      >
        <div
          ref={skills2Ref}
          className="flex flex-col min-h-screen  w-full  p-4 lg:p-20 relative "
        >
          <span className="skill-card2 font-bold text-4xl lg:text-8xl absolute right-20 top-20 ">
            Creative Design
          </span>
          <div className="h-8" />
          <p className="skill-card2 font-thin text-lg lg:text-2xl p-4   w-200 -right-10 lg:right-20 absolute top-50">
            Blending aesthetics with functionality to create memorable digital
            experiences.
          </p>
          <p className="skill-card2 font-thin text-lg lg:text-2xl p-4   w-200 text-right -right-10 lg:right-20 absolute top-80 ">
            Crafting visually stunning interfaces with a focus on user-centric
            storytelling.
          </p>
          <p className="skill-card2 font-thin text-lg lg:text-2xl p-4  w-200 text-center -right-10 lg:right-20 absolute top-120">
            Bringing motion and life to static designs through interactive
            prototyping.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
