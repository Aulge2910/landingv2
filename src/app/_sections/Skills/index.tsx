// app/components/Hero.tsx
"use client";
import { Card, Container } from "@/app/_components/PortfolioShowcase";

const SkillData = [
  {
    id: "1",
    title: "Technical Stack",
    items: [
      {
        label: "Frontend",
        value:
          "React, Next.js, TypeScript, Javascript, Tailwind CSS, Bootstrap 5, SCSS, jQuery, Axios",
      },
      { label: "Backend & CMS", value: "Node.js, PHP, Laravel, WordPress" },
      {
        label: "Interactive & Motion",
        value: "GSAP (GreenSock), 2D, 3D (todo)",
      },
    ],
  },
  {
    id: "2",
    title: "Database & Infrastructure",
    items: [
      { label: "Databases", value: "MySQL, pgAdmin (PostgreSQL)" },
      {
        label: "Environment",
        value: "XAMPP, Webpack, Node Package Manager (NPM)",
      },
    ],
  },
  {
    id: "3",
    title: "Development Workflow",
    items: [
      { label: "API Testing", value: "Apifox, Postman" },
      { label: "Version Control", value: "Git, GitHub" },
      {
        label: "Collaboration",
        value: "Lark (Feishu), Microsoft Office Suite",
      },
    ],
  },
];

const Skills = () => {
  return (
    
      <Container>
        <Card title="Skills">
          <div className="flex flex-col">
            {SkillData.map((skill, _index) => (
              <div key={skill.id} className="skill-card w-full shrink-0 p-6">
                <span className="font-bold text-2xl">{skill.title}</span>
                <ul className="list-disc pl-6 flex gap-4 flex-col">
                  <div className="h-2" />
                  {skill.items.map((item, index) => (
                    <li className="" key={index}>
                      <strong>{item.label}</strong>: {item.value}
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
export default Skills;
