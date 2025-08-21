"use client";
import { Container } from "@/components/container";
import React from "react";
import { motion } from "motion/react";

const AboutPage = () => {
  return (
    <>
      <Container className="max-w-3xl mx-auto px-4 py-8 min-h-screen p-4 md:pt-30 md:pb-10">
        <h1 className="text-5xl font-bold tracking-tight mt-10 text-neutral-800 dark:text-neutral-200">
          About Me
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="mt-4 text-neutral-600 dark:text-neutral-400"
        >
          Hi, I’m Santanil Roy — a B.Com graduate (2024) and a passionate
          frontend developer. My journey into web development started with
          curiosity, and soon it turned into something I truly enjoy — creating
          clean, functional, and modern websites that people can actually use.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="mt-4 text-neutral-600 dark:text-neutral-400"
        >
          I started with the basics — HTML, CSS, and JavaScript — and slowly
          built my foundation by making small projects. As I kept learning, I
          explored frameworks and tools like React, Next.js, Tailwind CSS,
          Bootstrap, and Git/GitHub. I’ve also gained knowledge in Node.js and
          Express.js, which helped me understand how frontend and backend
          connect.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="mt-4 text-neutral-600 dark:text-neutral-400"
        >
          One of my strengths is that I learn best by building. I’ve created
          projects like Bloggers (a blogging platform), EcoPulse (a climate
          change awareness website with Gemini AI integration), and a few
          e-commerce concepts. Each project taught me not only coding but also
          problem-solving, design thinking, and the importance of writing clean
          code.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="mt-4 text-neutral-600 dark:text-neutral-400"
        >
          As a fresher, I don’t have company experience yet, but I bring
          enthusiasm, adaptability, and a strong desire to grow. I believe in
          continuous learning, whether it’s improving UI/UX skills, exploring
          animations with Framer Motion, or experimenting with APIs to build
          more dynamic websites.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="mt-4 text-neutral-600 dark:text-neutral-400"
        >
          When I’m not coding, I enjoy playing football and video games — both
          of which teach me teamwork, focus, and strategy.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="mt-4 text-neutral-600 dark:text-neutral-400"
        >
          My goal is simple: to build websites and applications that are not
          only functional but also user-friendly and visually engaging. I’m
          excited to begin my professional journey as a frontend developer and
          contribute my skills, creativity, and energy to real-world projects.
        </motion.p>
      </Container>
    </>
  );
};

export default AboutPage;
