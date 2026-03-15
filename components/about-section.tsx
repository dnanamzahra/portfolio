"use client";

import { Card } from "./ui/card";
import { socialLinks } from "@/lib/social-links";

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

  return (
    <section className="flex flex-col gap-8 md:gap-16 py-8 md:py-24  bg-background">
      <div className="hidden px-3 md:flex flex-col mx-auto gap-6 justify-center text-center max-w-4xl items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance text-left">
          About Dr. Anum Zahra
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed text-wrap text-justify">
          Dr. Anam Zahra is a Certified Clinical Dietitian and Nutritionist
          dedicated to helping individuals improve their health through
          personalized nutrition and sustainable lifestyle changes. With
          professional experience at Karakoram International University Gilgit
          (KIU), she provides expert guidance in weight management, diabetes
          care, sports nutrition, and medical nutrition therapy.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed text-wrap text-justify">
          Her approach focuses on evidence-based nutrition, mindful eating, and
          practical meal planning, helping clients adopt healthy habits that fit
          their daily lives. Dr. Anam believes that sustainable results come
          from balanced nutrition and consistent lifestyle improvements rather
          than short-term dieting.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed text-wrap text-justify">
          Through personalized diet plans and nutritional counseling, she
          supports individuals in managing medical conditions, improving overall
          wellness, and building a healthier and more balanced life.
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
                <social.icon className="w-4! h-4! md:w-6 md:h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 flex md:hidden flex-col mx-auto gap-6 justify-center text-center max-w-4xl items-center">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-balance">
          About
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed text-wrap text-justify">
          Dr. Anam Zahra is a Clinical Dietitian and Nutritionist dedicated to
          helping individuals improve their health through personalized
          nutrition and sustainable lifestyle changes
        </p>

        <p className="text-xs text-muted-foreground leading-relaxed text-wrap text-justify">
          With professional experience at Karakoram International University
          Gilgit (KIU), she provides guidance in weight management, diabetes
          care, sports nutrition, and medical nutrition therapy.
        </p>

        <p className="text-xs text-muted-foreground leading-relaxed text-wrap text-justify">
          Her approach focuses on evidence-based nutrition, mindful eating, and
          practical meal planning, helping people build healthy habits that fit
          their everyday lives.
        </p>

        <p className="text-xs text-muted-foreground leading-relaxed text-wrap text-justify">
          Through personalized diet plans and nutritional counseling, Dr. Anam
          supports individuals in improving their health, managing medical
          conditions, and achieving long-term wellness.
        </p>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap gap-2 mdgap-4 justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-2 md:p-3 rounded-full bg-secondary text-primary transition-all duration-200 ${social.color}`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col mx-auto gap-2 md:gap-6 justify-center text-center max-w-4xl items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-balance">
            My Core Approach
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground mb-12 max-w-2xl">
            Four pillars that define my clinical methodology for achieving
            optimal wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-6 px-6">
          {approaches.map((approach, index) => (
            <Card
              key={index}
              className="p-6 rounded-2xl bg-card border-border hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-2 md:mb-4">{approach.icon}</div>
              <h3 className="text-md md:text-xl font-bold text-foreground mb-3">
                {approach.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {approach.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
