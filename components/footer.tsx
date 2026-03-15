"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
  Calendar,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dr_anam_zahra",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/dn_anum_zahra",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/dr_anam_zahra",
      label: "Facebook",
    },
    {
      icon: Calendar,
      href: "https://calendar.app.google/sNpWAgmwrDM9bis7A",
      label: "Book Consultation",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@dranam.com",
      href: "mailto:hello@dranam.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+92 302 461 8062",
      href: "https://wa.me/923024618062",
    },
  ];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-3">Dr. Anum Zahra</h3>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              A Clinical Dietitian dedicated to helping individuals achieve
              better health through personalized nutrition, sustainable diet
              plans, and evidence-based guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-2 hover:opacity-100 opacity-90 transition-opacity"
                >
                  <info.icon className="w-4 h-4" />
                  <span>{info.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-primary-foreground border-opacity-20 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary-foreground bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm opacity-75">
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
