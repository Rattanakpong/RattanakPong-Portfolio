import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure you import your global CSS

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RattanakPong Portfolio", // <--- CHANGE THIS TO YOUR DESIRED TITLE
  description: "RattanakPong's personal portfolio website showcasing projects, experience, and skills.", // You can customize this
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
