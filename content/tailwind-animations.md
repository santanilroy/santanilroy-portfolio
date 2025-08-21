# Tailwind CSS Animations and Transitions

Animations and transitions play a big role in making modern websites feel smooth and interactive. Tailwind CSS makes it easy to add these effects without writing complex CSS. This guide covers the basics of using animations and transitions in Tailwind.

---

## Why Animations Matter

Animations bring life to a website. For example:

- A button that smoothly grows on hover
- A card that fades in
- Text that slides into view

These small effects create a better user experience.

---

## Transitions in Tailwind

Tailwind lets you add transitions using utility classes.

**Example:**

```html
<button
  class="bg-blue-500 text-white px-4 py-2 rounded 
    transition duration-300 ease-in-out hover:bg-blue-700"
>
  Hover Me
</button>
```

**Explanation:**

- `transition` — enables transition effects
- `duration-300` — sets duration (300ms)
- `ease-in-out` — defines timing function
- `hover:bg-blue-700` — background changes smoothly on hover

---

## Animations in Tailwind

Tailwind provides ready-to-use animation utilities.

**Example:**

```html
<div class="animate-bounce bg-green-500 text-white p-4 rounded">I bounce!</div>
```

Common classes include:

- `animate-bounce`
- `animate-spin`
- `animate-ping`

---

## Custom Animations

You can define your own animations in `tailwind.config.js` using `@keyframes`.

**Custom Example: Fade In**

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
    },
  },
};
```

**Usage:**

```html
<p class="animate-fadeIn">Hello World</p>
```

---

## Final Thoughts

Tailwind animations and transitions are simple but powerful. They save time, keep your code clean, and make your website feel professional. If you haven’t tried them yet, start small—add a transition to a button or a fade-in to your text.
