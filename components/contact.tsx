import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mt-10 text-neutral-800 dark:text-neutral-200">
        Contact Me
      </h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        If you have any questions or inquiries, feel free to reach out!
      </p>
      <form className="mt-6">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-3 border border-neutral-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border p-3 border-neutral-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full border p-3 border-neutral-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
        >
          Send Message
        </button>
        <a
          href="https://wa.me/7439273941?text=I want to work on a project with you"
          className="inline-flex items-center px-4 py-2 mx-5 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Chat on WhatsApp
        </a>
      </form>
    </div>
  );
};

export default Contact;
