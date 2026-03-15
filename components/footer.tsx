"use client";

import { socialLinks } from "@/lib/social-links";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    {
      href: "https://calendar.app.google/sNpWAgmwrDM9bis7A",
      label: "Book Consultation",
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-3">Dr. Anum Zahra</h3>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              A clinical dietitian committed to helping individuals improve
              their health through personalized nutrition plans, sustainable
              diet strategies, and evidence-based guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={
                      link.href.startsWith("http") &&
                      !link.href.includes("calendar")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      link.href.startsWith("http") &&
                      !link.href.includes("calendar")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm hover:underline transition-colors opacity-90 hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-3 rounded-full bg-secondary text-primary transition-all duration-200 ${social.color}`}
              >
                <social.icon className="w-4 h-4 md:w-6 md:h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground border-opacity-20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-80">
            © {currentYear} Dr. Anum Zahra. All rights reserved.
          </p>
        </div>

        {/* Newsletter */}
        {/* <div className="border-t border-primary-foreground border-opacity-20 mt-8 pt-8">
          <h3 className="text-lg font-bold mb-4">Weekly Nutrition Tips</h3>
          <p className="text-sm opacity-90 mb-4">
            Get personalized nutrition insights delivered to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground bg-opacity-20 text-primary-foreground placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <Button className="bg-accent hover:bg-opacity-90 text-accent-foreground">
              Subscribe
            </Button>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
