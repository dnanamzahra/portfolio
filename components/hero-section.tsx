"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Fresh vegetables and healthy foods"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white space-y-6 hidden md:block">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                A Healthier You Starts with the Right Nutrition{" "}
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Personalized diet plans by Clinical Dietitian Dr. Anum Zahra to
                help you manage weight, improve lifestyle diseases, and achieve
                long-term wellness.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services">
                <Button className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  View Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a
                href="https://calendar.app.google/sNpWAgmwrDM9bis7A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-auto bg-primary hover:bg-accent text-primary-foreground">
                  Schedule Consultation
                </Button>
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div
              className="
              relative 
              w-72 h-80 
              md:w-92 
              md:h-92 rounded-full overflow-hidden shadow-4xl"
            >
              <Image
                src="/doctor-profile.jpg"
                alt="Dr. Anum Zahra - Clinical Dietitian"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:hidden flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold">Dr. Anum Zahra</h2>
            <p className="text-lg md:text-xl opacity-90">
              Clinical Dietitian & Nutrition Expert
            </p>
            <div className="flex md:flex-col flex-row gap-4 pt-4">
              <Link href="/services">
                <Button className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a
                href="https://calendar.app.google/sNpWAgmwrDM9bis7A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-auto bg-primary hover:bg-accent text-primary-foreground">
                  Schedule Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
