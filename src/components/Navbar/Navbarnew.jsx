import ThemeToggle from "@/providers/theme-toggle";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import { ChevronDown, Divisi, Profile, Sejarah, VisiMisi } from "./icons";
import { Logo } from "./Logo";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Profile", href: "/#profile" },
    { name: "Visi & Misi", href: "/#vision" },
    { name: "Divisi", href: "/#division" },
    { name: "Sejarah", href: "/#history" },
    { name: "Kegiatan", href: "/#" },
    { name: "Projek", href: "/#" },
    { name: "Prestasi", href: "/#" },
    { name: "Kontak", href: "/contact" },
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    profile: <Profile fill="currentColor" size={30} />,
    visimisi: <VisiMisi fill="currentColor" size={30} />,
    divisi: <Divisi fill="currentColor" size={30} />,
    sejarah: <Sejarah fill="currentColor" size={30} />,
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      maxWidth="full"
      className="z-50"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-20  " justify="center">
        <NavbarBrand className="sm:hidden items-center">
          <Logo />
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/#">
            Beranda
          </Link>
        </NavbarItem>
        {/* Dropdown Menu for Features */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="lg"
                variant="light"
              >
                Tentang
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Features"
            className="w-[340px] text-[#0a0a0a] dark:text-white"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              startContent={icons.profile}
              as={Link}
              href="/#profile"
            >
              Profile
            </DropdownItem>
            <DropdownItem
              startContent={icons.visimisi}
              as={Link}
              href="/#vision"
            >
              Visi & Misi
            </DropdownItem>
            <DropdownItem
              startContent={icons.divisi}
              as={Link}
              href="/#division"
            >
              Divisi
            </DropdownItem>
            <DropdownItem
              startContent={icons.sejarah}
              as={Link}
              href="/#history"
            >
              Sejarah
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link color="foreground" href="#">
            Kegiatan
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/projek">
            Projek
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Prestasi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Kontak
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeToggle />
      </NavbarContent>

      <NavbarMenu className="z-50">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-[#0a0a0a] dark:text-white py-2"
              href={item.href}
              size="lg"
              onClick={handleMenuItemClick}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
