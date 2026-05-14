import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "leadforms — Surveys worth answering.",
  description:
    "Answer five quick questions on topics that matter. Enter a real prize draw themed to the survey. Drawn the last Friday of every month.",
  openGraph: {
    title: "Surveys worth answering. — leadforms",
    description: "Real prizes. Themed to the topic. Drawn monthly.",
  },
  icons: {
    icon: "/logos/leadforms-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={inter.variable} style={{ colorScheme: "light" }} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
