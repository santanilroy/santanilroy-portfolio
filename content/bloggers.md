![Screenshot of Bloggers Website](/bloggers.png)

# How I Built My Bloggers Website

As a beginner frontend developer, one of the best ways to practice is by building small but useful projects. Recently, I created a **Bloggers Website** — a simple blogging platform where users can write, view, and delete posts. In this blog, I’ll share how I built it and what I learned along the way.

## Choosing the Stack

I wanted to use tools that are modern but still beginner-friendly. I built the project with:

- **React** (for building the UI)
- **Vite** (for fast development and bundling)
- **Tailwind CSS** (for styling)
- **LocalStorage** (to store blog posts without needing a backend)

Later, I also experimented with **Next.js** to add features like routing and better scalability.

## Features I Added

- **Navbar** – To navigate between Home, Blog, and Create Post pages.
- **Blog Section** – Displays all posts stored in localStorage.
- **Create Post Page** – A form where users can write and publish new posts.
- **Delete Button** – Users can remove posts they don’t want anymore.
- **Extra Sections** – I also added a hero section, about section, contact form, and a newsletter subscription box for a complete website feel.

## Challenges I Faced

At first, I struggled with handling state in React, especially when adding or deleting posts. Using the `useState` hook with localStorage taught me how to persist data. I also learned how important clean component structure is in React apps.

## What I Learned

- How to use React hooks like `useState` and `useEffect`.
- How to store and retrieve data from localStorage.
- How to structure a small project with multiple pages.
- The value of making projects — because building taught me more than just tutorials.

## Final Thoughts

This Bloggers website might be simple, but it gave me a lot of confidence as a developer. It showed me how ideas can turn into something real and functional. My next step is to integrate a real backend or database so posts don’t disappear when clearing localStorage.

If you’re starting out, I highly recommend building something similar — it’s a great way to practice React and understand how apps are structured.
