"use client"

import NavigationBar from "@/components/navigation";
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <NavigationBar />
    </NextUIProvider>
  );
}
