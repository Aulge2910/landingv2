// app/components/Hero.tsx
"use client";
import { Card, Container } from "@/app/_components/PortfolioShowcase";

const ExperienceData = [
  {
    id: "1",
    title: "April - December 2025 Web Developer | Enlliance, Selangor",
    items: [
      {
        label: "Landing Page Design",
        value:
          "Developed customer-facing landing pages and internal company websites using React, Next.js, TypeScript, and Tailwind CSS.",
      },
      {
        label: "Component Design",
        value:
          "Designed and developed interactive frontend components for a POS system floor plan, including features like drag-and-drop, canvas panning, seat rotation, and status management using GSAP.",
      },
      {
        label: "Backend Development",
        value:
          "Responsible for the backend API development using Go (Golang) and Apifox, covering all floor plan logic and data management.",
      },
    ],
  },
  {
    id: "2",
    title:
      "August - December 2024 Internship | Government Library Sarikei, Sarawak",
    items: [
      {
        label: "Full-Stack System Development",
        value:
          "Designed and developed a Library Management System (Frontend:HTML+Bootstrap5+SCSS + Backend:Php) as a core project to streamline library operations.",
      },
      {
        label: "Landing Page Design",
        value:
          "Created a landing page to promote library services, marking my first exploration into web animations to enhance user engagement.",
      },
      {
        label: "Minor Technical Problem Solving",
        value:
          "Provided essential technical support and managed digital documentation.",
      },
    ],
  },
  {
    id: "3",
    title:
      "August - December 2022 Web Development Internship | Cloudkia Kuching, Sarawak",
    items: [
      {
        label: "Responsive Web Development",
        value:
          "Successfully built fully functional websites (100% reproduction) using WordPress, mastering plugin integration and theme customization.",
      },
      {
        label: "Modern Frontend Stack",
        value:
          "Leveraged Bootstrap 5 and SCSS to create responsive, high-performance layouts, ensuring a modern look and feel across all devices.",
      },
      {
        label: "E-commerce & CMS Research",
        value:
          "Evaluated and tested various applications (e.g., WooCommerce) to determine the best-fit solutions for different project requirements.",
      },
      {
        label: "Quality Assurance (QA)",
        value: "Helping the colleagues to do the visual testing.",
      },
    ],
  },
];

const Experience = () => {
  return (
   
      <Container>
        <Card title="Experience">
          <div className="flex flex-col">
            {ExperienceData.map((Experiences, _index) => (
              <div
                key={Experiences.id}
                className="experience-card w-full shrink-0 p-6"
              >
                <span className="font-bold text-2xl">{Experiences.title}</span>
                <ul className="list-disc pl-6 flex gap-4 flex-col">
                  <div className="h-2" />
                  {Experiences.items.map((item, index) => (
                    <li key={index} className="">
                      <strong>{item.label}</strong> : {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </Container>
   
  );
};
export default Experience;
