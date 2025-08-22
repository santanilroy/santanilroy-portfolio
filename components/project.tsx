"use client";
import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Project = () => {
  // List of featured projects to showcase on the portfolio
  const projects = [
    {
      title: "Bloggers",
      description:
        "A modern blogging platform built with JavaScript, enabling users to create, manage, and share blog posts easily.",
      href: "https://my-blog-gsh855egm-santanil-roys-projects.vercel.app/",
      tech: [
        { name: "JavaScript" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Node.js" },
        { name: "Axios" },
        { name: "MongoDB" },
      ],
    },
    {
      title: "EcoPulse",
      description:
        "EcoPulse is a climate change awareness site using React, Next.js, Tailwind CSS, and Google Gemini API. It provides daily AI-generated climate facts.",
      href: "https://eco-pulse-five.vercel.app",
      tech: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Google Gemini API" },
      ],
    },
    {
      title: "TODO List",
      description:
        "A simple TODO list application built with Next.js and TypeScript.",
      href: "https://santanilroy.github.io/Vite-ToDoList/",
      tech: [
        { name: "Vite" },
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "JavaScript" },
      ],
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight mt-10 text-neutral-800 dark:text-neutral-200">
        Projects
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-lg shadow-md p-4 border-1 border-neutral-300 dark:border-neutral-700 min-w-[300px] "
            whileHover={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.8 },
            }}
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          >
            <h2 className="text-xl font-bold tracking-tight text-neutral-800 dark:text-neutral-300">
              {project.title}
            </h2>
            <p className="text-neutral-600 mt-6 dark:text-neutral-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech.name}
                </Badge>
              ))}
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-4 flex items-center gap-2 hover:underline"
            >
              <CircleArrowLeft /> View Project
            </a>
          </motion.div>
        ))}
        <div className="mt-8 mx-auto w-35 flex justify-center items-center">
          <Link
            href="/projects"
            className="text-neutral-700 dark:text-neutral-300 text-center font-semibold"
          >
            See More
          </Link>
          <ChevronDown className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default Project;
