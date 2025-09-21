import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./favicon.ico";
import "../public/android-chrome-192x192.png";
import "../public/apple-touch-icon.png";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  title: "Santanil Roy - Frontend Developer",
  description:
    "Personal portfolio of Santanil Roy, showcasing skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-gradient-to-r from-blue-50 via-blue-200 to-blue-50 dark:bg-gradient-to-r dark:from-black dark:via-blue-900 dark:to-black text-neutral-500 dark:text-neutral-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
