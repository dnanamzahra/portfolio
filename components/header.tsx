"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Articles" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.jpg"
                alt="Dr. Anum Zahra"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-primary">
                Dr. Anum Zahra
              </div>
              <div className="text-xs text-muted-foreground">
                Clinical Dietitian
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://calendar.app.google/sNpWAgmwrDM9bis7A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="hidden sm:inline-flex bg-primary hover:bg-accent text-primary-foreground">
                Schedule Consultation
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg hover:bg-secondary text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://calendar.app.google/sNpWAgmwrDM9bis7A"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-primary hover:bg-accent text-primary-foreground">
                Schedule Consultation
              </Button>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
