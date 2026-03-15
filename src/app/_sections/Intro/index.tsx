// app/components/Hero.tsx
"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Intro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!contentRef.current) return;

    gsap.from(contentRef.current, {
      y: 300, 
      opacity: 0,
      scale: 0.8, 
      scrollTrigger: {
        trigger: sectionRef.current,
        markers: true, 
        start: "top 70%", 
        end: "top 30%",
        scrub: 2, 
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-[160vh] relative z-20 h-screen w-full flex items-center justify-center bg-amber-400 overflow-hidden"
    >
      <div
        ref={contentRef}
        className="text-center text-7xl font-black"
      >
        MY RESUME
      </div>
    </section>
  );
};
export default Intro;
