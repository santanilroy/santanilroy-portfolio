"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import React from "react";

const Snippets = () => {
  const snippets = [
    {
      id: 1,
      name: "Spotlight",
      description:
        "A radial gradient that follows the mouse cursor as it moves across the card.",
    },
  ];

  return (
    <>
      <Container className="max-w-3xl mx-auto px-4 py-8 min-h-screen p-4 md:pt-30 md:pb-10">
        <h1 className="text-5xl mt-10 font-bold text-neutral-800 dark:text-neutral-200">
          Snippets
        </h1>
        <p className="mt-4 text-neutral-700 dark:text-neutral-400">
          Reusable code{" "}
          <strong className="font-semibold px-2 py-1 border border-neutral-200 dark:text-neutral-100 dark:border-neutral-700 rounded bg-white/40 dark:bg-white/20">
            snippets
          </strong>{" "}
          that can be easily integrated in your application
        </p>
        <div className="mt-8 space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {snippets.map((snippet) => (
            <Link
              href={""}
              key={snippet.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                key={snippet.id}
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
                <h1 className="font-bold text-neutral-800 dark:text-neutral-200">
                  {snippet.name}
                </h1>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {snippet.description}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-900 mt-2 flex gap-1">
                  {snippet.name} <ExternalLink className="inline" size={18} />
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Snippets;
