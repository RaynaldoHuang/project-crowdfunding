'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import logo1 from "@/public/svgs/logo1.svg"

export default function App() {

  return (
    <Navbar maxWidth="xl">
      <NavbarContent>
        <NavbarBrand>
          <Image src={logo1} alt={""} height={400} className="md:h-[60px] md:w-[160px]"/>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="bg-yellow-500 text-white" href="/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

