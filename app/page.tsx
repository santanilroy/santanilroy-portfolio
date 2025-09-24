import Blog from "@/components/blog";
import Contact from "@/components/contact";
import { Container } from "@/components/container";
import Project from "@/components/project";
import Skills from "@/components/skills";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex items-start justify-start">
        <Container className="min-h-[250vh] p-4 md:pt-20 md:pb-10">
          <div className="flex items-center justify-between flex-col md:flex-row gap-4 py-5">
            <h1 className="text-2xl md:text-6xl font-bold tracking-tight mt-15 md:mt-10 text-neutral-800 dark:text-neutral-200">
              Santanil Roy
            </h1>
            <Image
              src="/avatar.jpg"
              alt="Santanil Roy"
              width={80}
              height={80}
              className="rounded-4xl"
            />
          </div>
          <TextEffect
            preset="fade-in-blur"
            speedReveal={1.1}
            speedSegment={0.3}
            className="mt-10 text-gr text-neutral-600 dark:text-neutral-400"
          >
            I’m a passionate Frontend Developer with a knack for crafting
            modern, responsive, and user-friendly web applications. Skilled in
            HTML, CSS, JavaScript, React, Tailwind CSS, and Node.js, I love
            turning ideas into visually appealing and functional digital
            experiences.
          </TextEffect>
          <Skills />
          <Project />
          <Blog />
          <Contact />
        </Container>
      </div>
    </>
  );
};

export default page;
