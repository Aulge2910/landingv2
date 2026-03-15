// app/components/Hero.tsx
"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(introRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });

    tl.to(textRef.current, {
      scale: 100,
      opacity: 0,
      ease: "power2.in",
    });
    tl.to(
      introRef.current,
      {
        y: 20,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        ease: "back.out(2.5)",
        duration: 0.5,
      },
      "-=0.3",
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[300vh] bg-black overflow-hidden"
    >
      {/* front ground */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* HELLO layer */}
        <div className="text-center z-10" ref={textRef}>
          <h2 className="text-[10vw] font-black text-white select-none">
            HELLO
          </h2>
        </div>

        {/* background intro */}
        <div
          ref={introRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-0"
        >
          <h2 className="text-8xl font-thin text-white ">I'm Amy Tiong</h2>
          <p className="text-white/30 text-2xl">A Junior Web Developer</p>
        </div>
      </div>

      <div className="h-screen" />
      <div className="h-screen" />
    </section>
  );
};
export default Hero;
