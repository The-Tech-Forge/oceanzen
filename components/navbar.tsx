"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, Waves } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"


const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Solutions",
    href: "/solutions",
    submenu: [
      { name: "Schools", href: "/solutions#schools" },
      { name: "Colleges & Universities", href: "/solutions#colleges" },
      { name: "Training Institutes", href: "/solutions#training" },
      { name: "Multi-branch Management", href: "/solutions#multi-branch" },
    ],
  },
  { name: "Modules", href: "/modules" },
  { name: "About", href: "/about" },
  // { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-png.png" alt="OceanZen Logo" width={40} height={40} />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-cyan-600 bg-clip-text text-transparent">
              OceanZen
            </span>
          </Link>


          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent">{item.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[200px] p-2">
                          {item.submenu.map((subItem) => (
                            <NavigationMenuLink key={subItem.name} asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                          pathname === item.href && "text-primary",
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/demo">Request Demo</Link>
              </Button>
            </div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-3 py-2 text-base font-medium rounded-md transition-colors hover:bg-accent",
                          pathname === item.href && "text-primary bg-accent",
                        )}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button className="w-full mt-2" asChild>
                      <Link href="/demo">Request Demo</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
