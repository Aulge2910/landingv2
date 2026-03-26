"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
 


const Quote = ({
  text = " “Building interfaces that breathe, react, and connect with users.Code as the foundation, motion as the soul.”",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
 
 useGSAP(() => {
   if (!textRef.current) return;
   let mm = gsap.matchMedia();
   mm.add("(min-width: 1024px)", () => {
     const split = new SplitText(textRef.current, {
       type: "words,lines,chars",
       charsClass: "char",
     });

     gsap.set(textRef.current, { visibility: "visible" });

     const tl = gsap.timeline({
       scrollTrigger: {
         trigger: containerRef.current,
         start: "top 100%",
         end: "bottom 85%",
         scrub: 1,
       },
     });

     tl.from(split.chars, {
       autoAlpha: 0,
       yPercent: "random([-100, 100])",
       rotation: "random(-30, 30)",
       stagger: {
         from: "random",
         amount: 1,
       },
       duration: 2,
     });

     return () => split.revert();
   });
 }, [text]);
 

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-black text-white"
    >
      <div className="w-full h-full p-20 lg:px-40 lg:pt-20">
        <span
          ref={textRef}
          key={text}
          className="inline-block leading-loose font-bold text-4xl lg:text-6xl text-center"
        >
          {text}
        </span>
      </div>
    </section>
  );
};

export default Quote;
