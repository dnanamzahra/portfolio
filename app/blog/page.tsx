import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Articles - Dn. Anum Zahra",
  description:
    "Read expert nutrition tips, wellness advice, and practical guidance for healthy living from Dn. Anum Zahra.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "7 Foods That Naturally Boost Your Metabolism",
      excerpt:
        "Discover natural foods that can enhance your metabolic rate and support your health goals.",
      content:
        "Learn about the top metabolism-boosting foods including green tea, spices, lean proteins, and whole grains. These foods can help increase your caloric expenditure and support healthy weight management.",
      image: "/blog-1.jpg",
      category: "Nutrition Tips",
      date: "March 10, 2024",
    },
    {
      id: 2,
      title: "Common Diet Mistakes That Are Slowing Your Weight Loss",
      excerpt:
        "Learn about common dietary pitfalls that might be preventing you from reaching your weight loss goals.",
      content:
        "Discover the most common mistakes people make when trying to lose weight, including skipping meals, eliminating entire food groups, and not tracking portion sizes.",
      image: "/blog-2.jpg",
      category: "Weight Management",
      date: "March 8, 2024",
    },
    {
      id: 3,
      title: "A Simple Balanced Plate Formula for Everyday Healthy Eating",
      excerpt:
        "Master the basics of nutrition with this easy-to-follow plate model for balanced meals.",
      content:
        "Learn how to create balanced meals using the simple plate method: half plate vegetables, quarter plate protein, quarter plate whole grains, with healthy fats.",
      image: "/blog-3.jpg",
      category: "Nutrition Tips",
      date: "March 5, 2024",
    },
    {
      id: 4,
      title: "Top 5 Foods to Control Blood Sugar Naturally",
      excerpt:
        "Explore the best foods for managing blood sugar levels and preventing diabetes complications.",
      content:
        "Discover the foods that can help maintain stable blood sugar levels, including berries, leafy greens, legumes, nuts, and whole grains.",
      image: "/blog-4.jpg",
      category: "Diabetes",
      date: "March 1, 2024",
    },
    {
      id: 5,
      title: "5 Superfoods for Better Focus",
      excerpt:
        "Enhance your mental clarity and concentration with these nutrient-rich superfoods.",
      content:
        "Learn about foods that support brain health and improve focus, including fatty fish, dark chocolate, nuts, and antioxidant-rich berries.",
      image: "/blog-1.jpg",
      category: "Lifestyle",
      date: "February 28, 2024",
    },
    {
      id: 6,
      title: "Post-Workout Nutrition Recovery",
      excerpt:
        "Optimize your recovery with proper post-workout nutrition strategies.",
      content:
        "Understand the importance of post-workout nutrition and learn what to eat after exercise for optimal muscle recovery and performance.",
      image: "/blog-2.jpg",
      category: "Sports Nutrition",
      date: "February 25, 2024",
    },
    {
      id: 7,
      title: "Understanding Your Microbiome",
      excerpt:
        "Explore the fascinating world of gut health and its impact on overall wellness.",
      content:
        "Discover how your gut microbiome affects your health, immunity, and mental well-being, and learn how to support it through diet.",
      image: "/blog-3.jpg",
      category: "Gut Health",
      date: "February 20, 2024",
    },
    {
      id: 8,
      title: "Healthy Snack Ideas That Keep You Full and Energized",
      excerpt:
        "Find nutritious snack options that satisfy cravings and maintain energy levels throughout the day.",
      content:
        "Explore healthy snack combinations that provide sustained energy, including protein-rich options and fiber-filled choices.",
      image: "/blog-4.jpg",
      category: "Nutrition Tips",
      date: "February 15, 2024",
    },
    {
      id: 9,
      title: "The Importance of Hydration for Your Health",
      excerpt:
        "Learn why proper hydration is essential for energy, digestion, and overall well-being.",
      content:
        "Water plays a crucial role in maintaining body temperature, supporting digestion, improving energy levels, and helping your body remove toxins. Many people underestimate the importance of daily hydration. Drinking enough water throughout the day can improve metabolism, support weight management, enhance skin health, and maintain focus and concentration.",
      image: "/blog-1.jpg",
      category: "Lifestyle",
      date: "February 12, 2024",
    },
  ];

  const categories = [
    "All",
    "Nutrition Tips",
    "Weight Management",
    "Diabetes",
    "Lifestyle",
    "Sports Nutrition",
    "Gut Health",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-linear-to-b from-secondary to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl md:text-4xl font-bold text-foreground text-balance">
              Wellness & Nutrition Articles
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Expert tips, practical nutrition advice, and healthy lifestyle
              guidance to support your wellness journey.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-4 md:py-10 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            {/* <div className="mb-12 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div> */}

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-card border-border h-full flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium text-primary">
                        {post.category}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {post.date}
                      </p>
                    </div>
                    <h3 className="text-md md:text-xl font-bold text-foreground mb-2 md:mb-3">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="ghost"
                        className="text-primary p-1 h-auto"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More / Pagination */}
            <div className="text-center">
              {/* <Button className="bg-primary hover:bg-accent text-primary-foreground px-8">
                Load More Articles
              </Button> */}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Get Weekly Nutrition Tips
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground mb-8">
              Subscribe to receive personalized nutrition insights and wellness
              tips delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                disabled
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                disabled
                className="block md:hidden bg-primary hover:bg-accent py-3! text-primary-foreground px-8"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
