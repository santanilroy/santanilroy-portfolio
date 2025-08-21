// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
// import ReactMarkdown from "react-markdown";
import { Container } from "@/components/container";
import { MoveLeft } from "lucide-react";
import "../../globals.css"; // Ensure global styles are imported
import Link from "next/link";

type BlogPostParams = { params: { slug: string } };

export default async function BlogPost({ params }: BlogPostParams) {
  const resolvedParams = await params; // Await params if it's a Promise
  const filePath = path.join(
    process.cwd(),
    "content",
    `${resolvedParams.slug}.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  return (
    <Container className="max-w-3xl mx-auto px-4 py-8 min-h-screen md:pt-40 md:pb-10">
      <article className="shadow-md p-4 border-1 border-neutral-300 dark:border-neutral-700 bg-accent prose-slate prose lg:prose-xl md:prose-lg prose-a:text-blue-600 dark:prose-invert prose-headings:text-neutral-800 dark:prose-headings:text-neutral-200 prose-img:img prose-a:font-semibold prose-a:underline-offset-4">
        <Link href="/blog">
          <MoveLeft
            className="inline-block mr-1 my-3 text-neutral-700"
            size={35}
          />
        </Link>
        <h1 className="text-5xl font-bold mb-4">
          {resolvedParams.slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())}
        </h1>
        <MDXRemote source={content} />
        <p className="mt-6 text-sm text-gray-500">
          Posted on {new Date().toLocaleDateString()}
        </p>
      </article>
    </Container>
  );
}
