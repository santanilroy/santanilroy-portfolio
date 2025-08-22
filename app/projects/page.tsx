"use client";
import React from "react";
import { Container } from "@/components/container";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { CircleArrowLeft } from "lucide-react";

const ProjectsPage = () => {
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
      title: "WebVitals",
      description:
        "A tool to measure and analyze web performance metrics, helping developers optimize website speed and user experience.",
      href: "https://santanilroy.github.io/Web-Vitals/",
      tech: [
        { name: "JavaScript" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Shadcn" },
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

    {
      title: "Simon-Game",
      description:
        "A web-based version of the classic Simon game, built with JavaScript and HTML5.",
      href: "https://santanilroy.github.io/Simon-game/",
      tech: [{ name: "HTML5" }, { name: "CSS" }, { name: "JavaScript" }],
    },
  ];

  return (
    <>
      <Container className="max-w-3xl mx-auto px-4 py-8 min-h-screen p-4 md:pt-30 md:pb-10">
        <h1 className="text-5xl mt-10 font-bold text-neutral-800 dark:text-neutral-200">
          Projects
        </h1>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">
          Here you can find a collection of{" "}
          <strong className="font-semibold px-2 py-1 border dark:text-neutral-100 border-neutral-200 dark:border-neutral-700 rounded bg-white/40 dark:bg-white/20">
            projects
          </strong>{" "}
          I&#39;ve worked on.
        </p>

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
        </div>
      </Container>
    </>
  );
};

export default ProjectsPage;
