"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "@/app/_sections/About";
import Skills from "@/app/_sections/Skills";
import Education from "@/app/_sections/Education";
import Experience from "@/app/_sections/Experience";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLDivElement>(".horizontal-section");
      if (!containerRef.current) return;

      let mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
        
          snap: 1 / (sections.length - 1),
          end: () => "+=" + containerRef.current?.offsetWidth,
        },
      });
    });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="overflow-hidden bg-slate-950">
      <div className="flex  flex-col lg:flex-row lg:flex-nowrap lg:w-fit">
        <div className="horizontal-section w-screen min-h-screen shrink-0">
          <About />
        </div>
        <div className="horizontal-section w-screen min-h-screen shrink-0 border-l border-white/10">
          <Education />
        </div>{" "}
        <div className="horizontal-section w-screen min-h-screen shrink-0 border-l border-white/10">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default HorizontalSections;
