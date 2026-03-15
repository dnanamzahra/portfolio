'use client';

import Link from 'next/link';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function ServicesPreview() {
  const services = [
    {
      title: 'Personalized Diet Plans',
      description: 'Customized nutrition plans designed according to your health condition, lifestyle, and goals. These plans help improve overall health while making sustainable dietary changes.',
      icon: '🥘',
    },
    {
      title: 'Weight Management',
      description: 'Professional guidance for healthy weight loss or weight gain through balanced nutrition, portion control, and lifestyle adjustments.',
      icon: '⚖️',
    },
    {
      title: 'Medical Nutrition Therapy',
      description: 'Specialized nutrition strategies for managing chronic conditions and supporting medical treatments through evidence-based dietary interventions.',
      icon: '💊',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Specialized Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive nutritional solutions for various health stages and clinical conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 rounded-2xl bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href="https://calendar.app.google/sNpWAgmwrDM9bis7A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Book Appointment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button className="bg-primary hover:bg-accent text-primary-foreground px-8">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
