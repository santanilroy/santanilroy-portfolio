"use client";
import { Container } from "@/components/container";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

interface githubFile {
  id: number;
  name: string;
  owner?: {
    login: string;
    followers?: number;
    following?: number;
    id: number;
    avatar_url: string;
    html_url: string;
    type: string;
    site_admin: boolean;
    url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    gravatar_id: string;
    node_id: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    public_repos: number;
  };
  path?: string;
  sha?: string;
  size?: number;
  url?: string;
  html_url: string;
  git_url?: string;
  download_url?: string;
  type?: string;
  description?: string;
}

const DashboardPage = () => {
  const [data, setData] = useState<githubFile[]>([]); // use githubFile type

  useEffect(() => {
    fetch("https://api.github.com/users/santanilroy/repos")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        setData(data);
      });
  }, []);

  return (
    <>
      <Container className="max-w-3xl mx-auto px-4 py-8 min-h-screen p-4 md:pt-30 md:pb-10">
        <div className="min-h-screen flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-200">
            Welcome to the Dashboard
          </h1>

          <p className="mt-4 text-lg text-neutral-800 dark:text-gray-300">
            Here you can find an overview of My GitHub account statistics.
          </p>

          <div className="mt-15 space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-b-2 dark:border-gray-700 border-gray-200 py-4 bg-black/35 p-4 rounded-2xl w-[300px] md:w-[350px] h-[138px] cursor-pointer">
              {data.length > 0 ? (
                <Link
                  href={"https://github.com/santanilroy"}
                  target="_blank"
                  className="mt-4 text-3xl font-bold text-neutral-200"
                >
                  GitHub Followers {data[0].owner?.followers || 0}
                </Link>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="border-b-2 dark:border-gray-700 border-gray-200 py-4 bg-black/35 p-4 rounded-2xl w-[300px] md:w-[350px] h-[138px] cursor-pointer">
              {data.length > 0 ? (
                <Link
                  href={"https://github.com/santanilroy"}
                  target="_blank"
                  className="mt-4 text-3xl font-bold text-neutral-200"
                >
                  Following: {data[0].owner?.following || 0}
                </Link>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="border-b-2 dark:border-gray-700 border-gray-200 py-4 bg-black/35 p-4 rounded-2xl w-[300px] md:w-[350px] h-[138px] cursor-pointer">
              {data.length > 0 ? (
                <Link
                  href={"https://github.com/santanilroy"}
                  target="_blank"
                  className="mt-4 text-3xl font-bold text-neutral-200"
                >
                  GitHub Repositories {data.length}
                </Link>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>

          <div>
            <Link
              href="/"
              className="mt-8 text-blue-500 hover:underline inline-block"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DashboardPage;
