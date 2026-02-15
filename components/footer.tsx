"use client"

import Link from "next/link"
import { useRouter } from "nextjs-toploader/app"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const router = useRouter()

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) return
    e.preventDefault()
    router.push(href)
  }
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" onClick={(e) => handleLinkClick(e, "/")} className="flex items-center space-x-2">
              <Image src="/logo-png.png" alt="OceanZen Logo" width={40} height={40} />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-cyan-600 bg-clip-text text-transparent">
                OceanZen
              </span>
            </Link>

            <p className="text-muted-foreground">
              Comprehensive ERP solutions for educational institutions worldwide. Streamline your operations with our
              cloud-based platform.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                {/* <Link href="https://facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </Link> */}
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://x.com/OceanzenS" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/company/oceanzen-in" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.instagram.com/oceanzen_services/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" onClick={(e) => handleLinkClick(e, "/")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/modules" onClick={(e) => handleLinkClick(e, "/modules")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Modules
                </Link>
              </li>
              <li>
                <Link href="/solutions" onClick={(e) => handleLinkClick(e, "/solutions")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={(e) => handleLinkClick(e, "/about")} className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li> */}
              <li>
                <Link href="/contact" onClick={(e) => handleLinkClick(e, "/contact")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" onClick={(e) => handleLinkClick(e, "/faq")} className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/demo" onClick={(e) => handleLinkClick(e, "/demo")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link href="/privacy" onClick={(e) => handleLinkClick(e, "/privacy")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" onClick={(e) => handleLinkClick(e, "/terms")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            {/* <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div> */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                {/* <Phone className="h-4 w-4 mr-2" /> */}

              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                contact.oceanzen@gmail.com
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                Nagpur, Maharashtra, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} OceanZen ERP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
