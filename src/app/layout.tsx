import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Interactive Bible Map",
    template: "%s | Interactive Bible Map",
  },
  description:
    "Explore biblical places, people, events, journeys, historical periods, and Scripture through an interactive map.",
  applicationName: "Interactive Bible Map",
  keywords: [
    "Bible map",
    "interactive Bible",
    "biblical history",
    "biblical places",
    "Bible journeys",
    "Scripture",
    "Christian study",
  ],
  authors: [
    {
      name: "Abiodun Adeleke",
    },
  ],
  creator: "Abiodun Adeleke",
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
