"use client";
import { Container } from "@/components/container";
import { motion } from "motion/react";
import Link from "next/link";

import React from "react";

const Linkspage = () => {
  const links = [
    {
      id: 1,
      link: "GitHub",
      href: "https://github.com/santanilroy",
    },
    {
      id: 2,
      link: "LinkedIn",
      href: "https://www.linkedin.com/in/santanil-roy-90730b219/",
    },

    {
      id: 3,
      link: "Twitter",
      href: "https://x.com/SantanilRoy",
    },

    {
      id: 4,
      link: "Website",
      href: "santanilroy-portfolio.vercel.app",
    },
  ];

  return (
    <>
      <Container className="max-w-3xl mx-auto px-4 py-8 min-h-screen p-4 md:pt-30 md:pb-10">
        <h1 className="text-4xl font-bold text-center text-neutral-800 dark:text-neutral-200 ">
          Links
        </h1>

        <div className="max-w-[450px] mx-auto px-4 py-8 min-h-[500px] bg-gray-900/10 dark:bg-white/10  backdrop-blur-4xl rounded-3xl mt-20 shadow-2xl outline-offset-4 outline-2 outline-neutral-500">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="w-auto mx-auto m-5 p-3 rounded-lg flex justify-center items-center bg-black/15 dark:bg-white/5 backdrop-blur-3xl shadow-2xs"
              >
                <p className="text-2xl font-bold text-neutral-300 tracking-tight">
                  {link.link}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Linkspage;
