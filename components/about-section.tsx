"use client";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Linkedin,
  Instagram,
  Facebook,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

export default function AboutSection() {
  const approaches = [
    {
      title: "Personalized Nutrition",
      description:
        "Every individual is unique. I design customized diet plans based on your health condition, lifestyle, and personal goals to ensure sustainable results.",
      icon: "🥗",
    },
    {
      title: "Evidence-Based Guidance",
      description:
        "My recommendations are based on scientific research and clinical nutrition principles to support safe and effective health improvements.",
      icon: "📊",
    },
    {
      title: "Sustainable Lifestyle Changes",
      description:
        "I focus on building healthy habits and realistic meal plans that can be followed long-term, rather than temporary or restrictive diets.",
      icon: "🌱",
    },
    {
      title: "Continuous Support & Monitoring",
      description:
        "Your journey doesn't stop after one consultation. I provide ongoing guidance, follow-ups, and progress tracking to help you stay on the right path.",
      icon: "💪",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/dn_anum_zahra",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/dr_anam_zahra",
      label: "Facebook",
      color: "hover:text-blue-700",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dr_anam_zahra",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:hello@dranam.com",
      color: "hover:text-blue-600",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      color: "hover:text-blue-600",
      href: "https://wa.me/923024618062",
    },
    {
      icon: Calendar,
      label: "Schedule",
      color: "hover:text-blue-600",
      href: "https://calendar.app.google/sNpWAgmwrDM9bis7A",
    },
  ];

  return (
    <section className="flex flex-col gap-16 py-16 md:py-24  bg-background">
      <div className="hidden px-3 md:flex flex-col mx-auto gap-6 justify-center text-center max-w-4xl items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance text-left">
          About Dr. Anum Zahra
        </h2>
        <p className="hidden md:blocktext-lg text-muted-foreground leading-relaxed text-wrap text-justify">
          Dr. Anum Zahra is a dedicated Clinical Dietitian and Nutritionist who
          helps individuals achieve better health through personalized nutrition
          and sustainable lifestyle changes. With professional experience at
          Karakoram International University Gilgit (KIU), she provides expert
          guidance in weight management, diabetes care, sports nutrition, and
          medical nutrition therapy.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed text-wrap text-justify">
          Her approach is rooted in evidence-based nutrition, mindful eating,
          and practical meal planning. She empowers clients to make informed
          dietary choices that support long-term health and well-being. Whether
          managing a medical condition or improving overall wellness, Dr. Anum
          offers personalized nutritional counseling to help clients build
          healthier and more balanced lives.
        </p>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-3 rounded-full bg-secondary text-primary transition-all duration-200 ${social.color}`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 flex flex-col mx-auto gap-6 justify-center text-center max-w-4xl items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance text-left">
          About
        </h2>
        <p className="hidden md:blocktext-lg text-muted-foreground leading-relaxed text-wrap text-justify">
          Dr. Anum Zahra is a dedicated Clinical Dietitian and Nutritionist who
          helps individuals achieve better health through personalized nutrition
          and sustainable lifestyle changes. With professional experience at
          Karakoram International University Gilgit (KIU), she provides expert
          guidance in weight management, diabetes care, sports nutrition, and
          medical nutrition therapy.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed text-wrap text-justify">
          Her approach is rooted in evidence-based nutrition, mindful eating,
          and practical meal planning. She empowers clients to make informed
          dietary choices that support long-term health and well-being. Whether
          managing a medical condition or improving overall wellness, Dr. Anum
          offers personalized nutritional counseling to help clients build
          healthier and more balanced lives.
        </p>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-3 rounded-full bg-secondary text-primary transition-all duration-200 ${social.color}`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col mx-auto gap-6 justify-center text-center max-w-4xl items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            My Core Approach
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Four pillars that define my clinical methodology for achieving
            optimal wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-6">
          {approaches.map((approach, index) => (
            <Card
              key={index}
              className="p-6 rounded-2xl bg-card border-border hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{approach.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {approach.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {approach.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
