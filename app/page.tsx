import type { Metadata } from "next";
import HomeContent from "@/app/components/HomeContent";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my Next.js App with App Router",
};

export default function Home() {
  return (
    <main>
      <HomeContent /> 
    </main>
  );
}