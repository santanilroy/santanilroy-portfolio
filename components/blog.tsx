"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Tailwind CSS Basics - Beginner's Guide.",
      views: 1002,
      href: "/blog/tailwind-basics",
    },
    {
      id: 2,
      title: "Tailwind CSS Animations and Transitions",
      views: 800,
      href: "/blog/tailwind-animations",
    },
    {
      id: 3,
      title: "How I Built My Bloggers Website",
      views: 1600,
      href: "/blog/bloggers",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl mt-10 font-bold text-neutral-800 dark:text-neutral-200">
        Blog
      </h1>
      {blogs
        .filter((blog) => typeof blog.href === "string")
        .map((blog, index) => (
          <Link key={blog.id} href={blog.href as string}>
            <motion.div
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
              key={blog.id}
              className="border-b border-gray-200 dark:border-gray-700 p-4 mt-5 bg-white/20 rounded-2xl"
            >
              <h4 className="font-bold dark:text-neutral-200 text-neutral-700">
                {blog.title}
              </h4>
              <p className="text-sm text-gray-500">
                {blog.views.toLocaleString()} Views
              </p>
            </motion.div>
          </Link>
        ))}
      <div className="mt-8 mx-auto w-35 flex justify-center items-center">
        <Link
          href="/blog"
          className="text-neutral-700 dark:text-neutral-300 text-center font-semibold"
        >
          View all blogs
        </Link>
        <ChevronDown className="mx-auto" />
      </div>
    </div>
  );
};

export default Blog;
