"use client";
import React from "react";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const ResourcesPage = () => {
  const resources = [
    {
      id: 1,
      title: "Colors and Fonts",
      description:
        "Beautiful color palettes and font pairings for your designs.",
      link: "https://www.colorsandfonts.com/",
      name: "colorsandfonts.com",
    },
    {
      id: 2,
      title: "Daisy Ui",
      description: "A beautiful and customizable component library.",
      link: "https://daisyui.com/",
      name: "Daisy UI",
    },
    {
      id: 3,
      title: "Ui Gradients",
      description: "Beautiful gradient backgrounds for your web projects.",
      link: "https://uigradients.com/",
      name: "UI Gradients",
    },
    {
      id: 4,
      title: "Color Hunt",
      description:
        "A free platform for color inspiration with beautiful color palettes.",
      link: "https://colorhunt.co/",
      name: "Color Hunt",
    },
    {
      id: 5,
      title: "Tailwind CSS Cheat Sheet",
      description:
        "A comprehensive cheat sheet for Tailwind CSS classes and utilities.",
      link: "https://nerdcave.com/tailwind-cheat-sheet",
      name: "NerdCave",
    },
    {
      id: 6,
      title: "Tailwind CSS Play",
      description: "An online playground for experimenting with Tailwind CSS.",
      link: "https://play.tailwindcss.com/",
      name: "Tailwind Play",
    },
    {
      id: 7,
      title: "Tailwind Toolbox",
      description: "Free templates and components built with Tailwind CSS.",
      link: "https://tailwindtoolbox.com/",
      name: "Tailwind Toolbox",
    },
    {
      id: 8,
      title: "Tailwind Components",
      description:
        "A collection of free Tailwind CSS components and templates.",
      link: "https://tailwindcomponents.com/",
      name: "Tailwind Components",
    },
    {
      id: 9,
      title: "Get Waves",
      description: "A free tool to create SVG wave patterns.",
      link: "https://getwaves.io/",
      name: "Get Waves",
    },
    {
      id: 10,
      title: "Background Remover",
      description: "Remove backgrounds from images effortlessly.",
      link: "https://www.remove.bg/",
      name: "Remove.bg",
    },
    {
      id: 11,
      title: "Tailwind Ui Kit",
      description:
        "A collection of beautifully designed UI components for Tailwind CSS.",
      link: "https://tailwindui.com/",
      name: "Tailwind UI",
    },
    {
      id: 12,
      title: "Story Set",
      description: "A collection of illustrations and Icons.",
      link: "https://storyset.com/",
      name: "Storyset",
    },
    {
      id: 13,
      title: "Hero Icons",
      description: "Free SVG icons for your web projects.",
      link: "https://heroicons.com/",
      name: "Hero Icons",
    },
    {
      id: 14,
      title: "Tailwind CSS Typography",
      description:
        "A plugin for Tailwind CSS that provides beautiful typography styles.",
      link: "https://tailwindcss-typography.netlify.app/",
      name: "Tailwind CSS Typography",
    },
    {
      id: 15,
      title: "Get Avataars",
      description: "Generate unique avatar images for your projects.",
      link: "https://getavataaars.com/",
      name: "Get Avataars",
    },
    {
      id: 16,
      title: "1000 inspiring websites",
      description:
        "A curated list of 1000 inspiring websites for your design inspiration.",
      link: "https://supercreative.design/1000-inspiring-websites",
      name: "supercreative.design",
    },
  ];

  return (
    <>
      <Container className="max-w-3xl mx-auto px-4 py-8 min-h-screen p-4 md:pt-30 md:pb-10">
        <h1 className="text-5xl mt-10 font-bold text-neutral-800 dark:text-neutral-200">
          Resources
        </h1>
        <p className="mt-4 text-neutral-700 dark:text-neutral-400">
          Here you can find a collection of{" "}
          <strong className="font-semibold px-2 py-1 border border-neutral-200 dark:text-neutral-100 dark:border-neutral-700 rounded bg-white/40 dark:bg-white/20">
            resources
          </strong>{" "}
          to help you with your learning journey.
        </p>

        <div className="mt-8 space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resources.map((resource) => (
            <Link
              key={resource.id}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                key={resource.id}
                className="border-b dark:border-gray-700 border-gray-200 py-4 bg-white/35 p-4 rounded-2xl w-[300px] md:w-[350px] h-[138px] cursor-pointer"
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.9,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.3 },
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                  ease: "easeInOut",
                }}
              >
                <h4 className="font-bold text-neutral-800 dark:text-neutral-200">
                  {resource.title}
                </h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {resource.description}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-900 mt-2 flex gap-1">
                  {resource.name} <ExternalLink className="inline" size={18} />
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ResourcesPage;
