"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Menu, Truck, Building2, Leaf, ChevronDown } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Truck className="h-6 w-6" />
            <span className="font-bold">FlockFreight</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shippers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px]">
                    <Link href="/shippers/services" className="group grid h-full w-full items-center justify-center space-y-1 rounded-md p-4 hover:bg-accent">
                      <div className="font-medium">FlockDirect® Services</div>
                      <div className="text-sm text-muted-foreground">Our innovative shipping solution</div>
                    </Link>
                    <Link href="/shippers/quote" className="group grid h-full w-full items-center justify-center space-y-1 rounded-md p-4 hover:bg-accent">
                      <div className="font-medium">Get a Quote</div>
                      <div className="text-sm text-muted-foreground">Instant shipping quotes</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Carriers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px]">
                    <Link href="/carriers/join" className="group grid h-full w-full items-center justify-center space-y-1 rounded-md p-4 hover:bg-accent">
                      <div className="font-medium">Join Our Network</div>
                      <div className="text-sm text-muted-foreground">Partner with FlockFreight</div>
                    </Link>
                    <Link href="/carriers/resources" className="group grid h-full w-full items-center justify-center space-y-1 rounded-md p-4 hover:bg-accent">
                      <div className="font-medium">Carrier Resources</div>
                      <div className="text-sm text-muted-foreground">Tools and guides</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/sustainability" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    <Leaf className="mr-2 h-4 w-4" />
                    Sustainability
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/get-started" className="hidden md:block">
            <Button>Get Started</Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-4">
                <Link href="/shippers/services" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Shippers</Button>
                </Link>
                <Link href="/carriers/join" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Carriers</Button>
                </Link>
                <Link href="/sustainability" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Sustainability</Button>
                </Link>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Login</Button>
                </Link>
                <Link href="/get-started" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar