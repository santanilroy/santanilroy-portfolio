# Tailwind CSS Basics – A Beginner’s Guide

## Introduction

Tailwind CSS is a utility-first CSS framework...

## What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup. Instead of writing custom CSS, you compose styles by applying pre-existing classes.

## Why Use Tailwind CSS?

- **Rapid development:** Quickly prototype and build responsive designs.
- **Customizable:** Easily configure your design system.
- **No naming headaches:** No need to come up with class names for every style.

## Installation

You can install Tailwind CSS via npm:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

This creates a `tailwind.config.js` file for customization.

## Basic Usage

Add Tailwind’s directives to your CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then, use utility classes in your HTML:

```html
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
  Click Me
</button>
```

## Responsive Design

Tailwind makes responsive design easy with breakpoint prefixes:

```html
<div class="text-base md:text-lg lg:text-xl">Responsive Text</div>
```

## Customizing Tailwind

Edit `tailwind.config.js` to add custom colors, fonts, or breakpoints:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: "#1da1f2",
      },
    },
  },
};
```

## Example: Building a Card

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
  <img class="w-full" src="image.jpg" alt="Card image" />
  <div class="py-4">
    <h2 class="font-bold text-xl mb-2">Tailwind Card</h2>
    <p class="text-gray-700 text-base">
      This is a simple card built with Tailwind CSS utilities.
    </p>
  </div>
</div>
```

## Conclusion

Tailwind CSS streamlines the styling process, letting you focus on building great user interfaces. Explore the [official documentation](https://tailwindcss.com/docs) for more utilities and advanced features.
