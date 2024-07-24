import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import logo from "@/public/svgs/logo.svg"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Login",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
      <NavbarContent>
        <NavbarBrand>
          <Image src={logo} alt={""} height={400} className="md:h-[30px] md:w-[140px]"/>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="bg-sky-600 text-white" href="/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

