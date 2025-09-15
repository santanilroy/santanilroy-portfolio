import React from "react";
import { Container } from "./container";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <>
      <Container className="pt-10 pb-4 px-4 py-8 md:pt-30 md:pb-10">
        <div className="border-t border-neutral-800 py-10">
          <div className="max-w-3xl flex justify-between gap-5 mx-auto text-neutral-600 pb-20 dark:text-neutral-300">
            <div className="flex flex-col space-y-4">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/dashboard">Dashboard</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="https://github.com/santanilroy">GitHub</Link>
              <Link href="https://www.linkedin.com/in/santanil-roy-90730b219/">
                LinkedIn
              </Link>
              <Link href="https://www.instagram.com/rsantanil_roy/">
                Instagram
              </Link>
              <Link href="https://x.com/SantanilRoy">Twitter</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/about">About</Link>
              <Link href="#">Snippets</Link>
              <Link href="https://ui.shadcn.com/">ShadCn</Link>
              <Link href="#">Links</Link>
            </div>
          </div>

          <p className="flex flex-row text-neutral-600 dark:text-neutral-400 items-center gap-2 font-semibold">
            Find me on{" "}
            <Link href="https://www.linkedin.com/in/santanil-roy-90730b219/">
              <Linkedin size={20} />
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/santanilroy">
              <Github size={20} />
            </Link>
          </p>
          <p className="flex flex-row text-neutral-600 dark:text-neutral-400 items-center gap-1 font-semibold">
            Portfolio inspired by{" "}
            <a href="https://manuarora.in/" target="_blank">
              Manu Arora
            </a>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
