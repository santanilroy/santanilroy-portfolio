"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Skills = () => {
  const skills = [
    {
      src: "https://assets.chanhdai.com/images/tech-stack-icons/typescript.svg",
      tooltip: "TypeScript",
    },
    {
      src: "https://assets.chanhdai.com/images/tech-stack-icons/js.svg",
      tooltip: "JavaScript",
    },
    {
      src: "https://assets.chanhdai.com/images/tech-stack-icons/nodejs.svg",
      tooltip: "Node.js",
    },
    {
      src: "https://assets.chanhdai.com/images/tech-stack-icons/react.svg",
      tooltip: "React",
    },
    {
      src: "https://assets.chanhdai.com/images/tech-stack-icons/nextjs2-light.svg",
      tooltip: "Next.js",
    },
    {
      src: "https://assets.chanhdai.com/images/tech-stack-icons/tailwindcss.svg",
      tooltip: "Tailwind CSS",
    },
    {
      src: "https://assets.chanhdai.com/images/tech-stack-icons/shadcn-ui-light.svg",
      tooltip: "ShadCN UI",
    },
    {
      src: "https://assets.chanhdai.com/images/tech-stack-icons/motion.svg",
      tooltip: "Framer Motion",
    },
    {
      src: "https://assets.chanhdai.com/images/tech-stack-icons/git.svg",
      tooltip: "Git",
    },
    {
      src: "https://assets.chanhdai.com/images/tech-stack-icons/figma.svg",
      tooltip: "Figma",
    },
    {
      src: "https://assets.chanhdai.com/images/tech-stack-icons/react-router-light.svg",
      tooltip: "React Router",
    },
    {
      src: "https://assets.chanhdai.com/images/tech-stack-icons/mongodb.svg",
      tooltip: "MongoDB",
    },
    {
      src: "https://assets.chanhdai.com/images/tech-stack-icons/chatgpt-light.svg",
      tooltip: "ChatGPT",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight mt-10 text-neutral-800 dark:text-neutral-200">
        Stack
      </h2>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              transition: { duration: 0.3 },
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            whileTap={{ scale: 0.95 }}
            key={index}
            className="relative group flex items-center justify-center p-4 m-2 border rounded-lg"
          >
            <Image
              src={skill.src}
              alt={skill.tooltip}
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-neutral-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {skill.tooltip}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
