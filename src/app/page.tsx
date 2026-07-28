"use client";

import dynamic from "next/dynamic";

const BibleMap = dynamic(
  () => import("@/components/BibleMap"),
  {
    ssr: false,
  }
);

export default function Home() {
  return <BibleMap />;
}