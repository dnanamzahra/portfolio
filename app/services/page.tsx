import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services - Dr. Anum Zahra",
  description:
    "Explore comprehensive nutrition and wellness services including personalized diet plans, weight management, diabetes care, and sports nutrition.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Personalized Diet Plans",
      description:
        "Customized nutrition plans designed according to your health condition, lifestyle, and goals. These plans help improve overall health while making sustainable dietary changes.",
      icon: "🥘",
    },
    {
      title: "Weight Management",
      description:
        "Professional guidance for healthy weight loss or weight gain through balanced nutrition, portion control, and lifestyle adjustments.",
      icon: "⚖️",
    },
    {
      title: "Diabetes Nutrition Management",
      description:
        "Specialized nutrition plans for individuals with diabetes or prediabetes to help control blood sugar levels and improve long-term health.",
      icon: "🩺",
    },
    {
      title: "Sports & Fitness Nutrition",
      description:
        "Nutrition strategies designed for athletes, gym-goers, and active individuals to enhance performance, recovery, and muscle development.",
      icon: "💪",
    },
    {
      title: "Nutritional Counseling",
      description:
        "One-on-one sessions to help you understand healthy eating habits, mindful eating, and better food choices for long-term wellness.",
      icon: "💬",
    },
    {
      title: "Meal Planning & Diet Design",
      description:
        "Structured meal plans that help you maintain balanced nutrition while fitting into your daily routine.",
      icon: "📋",
    },
    {
      title: "Health Coaching & Lifestyle Guidance",
      description:
        "Support and motivation to build sustainable healthy habits, improve energy levels, and maintain long-term wellness.",
      icon: "🌟",
    },
    {
      title: "Online Consultation",
      description:
        "Convenient online nutrition consultations where you can receive personalized guidance, diet plans, and follow-up support from anywhere.",
      icon: "💻",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-4 md:py-10 bg-linear-to-b from-secondary to-background">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <h1 className="text-xl md:text-4xl font-bold text-foreground text-balance">
              Nutrition & Wellness Services
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Personalized nutrition services designed to help you achieve
              better health and sustainable lifestyle changes.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-4 md:py-10 bg-background">
          <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-4 md:p-8 rounded-2xl bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="text-5xl mb-2 md:mb-4">{service.icon}</div>
                  <h3 className="text-md md:text-xl font-bold text-foreground mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto px-2 md:px-4  text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-balance">
              Start Your Wellness Journey?
            </h2>
            <p className="text-sm opacity-90 mb-8">
              Schedule a consultation today and take the first step toward
              better health with personalized nutrition guidance.
            </p>
            <a
              href="https://calendar.app.google/etfYMWr5rtPRdAUG7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-md md:text-lg">
                Book Your Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
