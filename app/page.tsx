"use client"

import Features from "@/components/main/features";
import Hero from "@/components/main/hero";
import Statistik from "@/components/main/statistik";
import NavigationBar from "@/components/navigation";
import { NextUIProvider } from "@nextui-org/react";
import FeaturesV2 from "@/components/main/features-v2";
import Causes from "@/components/main/causes";
import Volunteer from "@/components/main/volunteer";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <NextUIProvider>
      <NavigationBar />
      <Hero />
      <Statistik />
      <Features />
      <FeaturesV2 />
      <Causes />
      <Volunteer />
      <Footer/>
    </NextUIProvider>
  );
}
