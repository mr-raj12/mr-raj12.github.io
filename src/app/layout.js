import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ankit Sisodya | Portfolio",
  description:
    "Ankit Sisodya - Computer Science student at BIT Mesra, Competitive Programmer, and Full-Stack Developer. Expert on Codeforces, Guardian on LeetCode.",
  keywords: [
    "Ankit Sisodya",
    "Portfolio",
    "Competitive Programming",
    "Full Stack Developer",
    "BIT Mesra",
  ],
  authors: [{ name: "Ankit Sisodya" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
