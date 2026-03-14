// app/components/Hero.tsx
"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Intro = () => {
  const sectionRef = useRef<HTMLDivElement>(null); // 给整个 Section 一个 Ref
  const contentRef = useRef<HTMLDivElement>(null); // 给文字内容一个 Ref

  useEffect(() => {
    // 确保插件注册（虽然 Hero 注册过了，但这里写一下更稳）
    gsap.registerPlugin(ScrollTrigger);

    if (!contentRef.current) return;

    gsap.from(contentRef.current, {
      y: 300, // 增加位移，让效果更明显
      opacity: 0,
      scale: 0.8, // 加个缩放，入场感更强
      scrollTrigger: {
        trigger: sectionRef.current,
        markers: true, // 以橙色大盒子为准
        start: "top 70%", // 橙色盒子进场 10% 的时候开始
        end: "top 30%", // 还没到中间就飞完
        scrub: 2, // 增加 scrub 数值，让它有种“沉甸甸”的跟随感
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
        className="text-center text-7xl font-montserrat font-black"
      >
        MY EXPERIENCE
      </div>
    </section>
  );
};
export default Intro;
