import ResourceCard from "@/components/ResourceCard"

# Resource Cards Snippet

Here’s a code snippet showing how I built my resource cards.

```html
<div className="mt-8 space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resources.map((resource) => (
            <Link
              key={resource.id}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                key={resource.id}
                className="border-b dark:border-gray-700 border-gray-200 py-4 bg-white/35 p-4 rounded-2xl w-[300px] md:w-[350px] h-[138px] cursor-pointer"
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
                  scale: 1.08,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.3 },
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                  ease: "easeInOut",
                }}
              >
                <h4 className="font-bold text-neutral-800 dark:text-neutral-200">
                  {resource.title}
                </h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {resource.description}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-900 mt-2 flex gap-1">
                  {resource.name} <ExternalLink className="inline" size={18} />
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
```
