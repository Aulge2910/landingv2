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
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
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
        end: "+=160%", // for 2 more screen height, for the animation to have enough time to run smoothly
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
  return () => mm.revert();});
  }, []);

  return (
    <section className="h-[225vh] w-full">
      <div
        ref={containerRef}
        className="relative w-full flex items-center justify-center bg-black text-white overflow-hidden"
      >
        {/* front stuff apear */}
        <div className="text-center" ref={textRef}>
          <h2 className="text-[10vw] font-black text-white select-none">
            HELLO
          </h2>
        </div>

        {/* background stuff appear */}
        <div
          ref={introRef}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <h2 className="text-8xl font-thin text-white">I'm Amy Tiong</h2>
          <p className="text-white/50 font-bold">A Junior Web Developer</p>
        </div>
        <div className="h-screen pointer-events-none" />
        <div className="h-screen pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
