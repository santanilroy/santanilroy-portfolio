"use client";
import { Container } from "@/components/container";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import React from "react";

const Snippets = () => {
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
        <div className="mt-30 justify-center items-center">
          <TextEffect
            preset="fade-in-blur"
            speedReveal={1.1}
            speedSegment={0.3}
            className="text-neutral-900 dark:text-neutral-400 text-4xl tracking-tight text-center font-bold"
          >
            Snippets are coming soon stay tuned!
          </TextEffect>
        </div>
      </Container>
    </>
  );
};

export default Snippets;
