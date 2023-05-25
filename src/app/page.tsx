"use client";
import Image from "next/image";
import Card from "./components/Card";
import Home from "./Home";

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Home />
    </main>
  );
}
