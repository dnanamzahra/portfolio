import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blog Post - Dr. Anum Zahra",
  description: "Read nutrition and wellness articles from Dr. Anum Zahra.",
};

const blogPosts = {
  "1": {
    title: "7 Foods That Naturally Boost Your Metabolism",
    category: "Nutrition Tips",
    date: "March 10, 2024",
    image: "/blog-1.jpg",
    excerpt:
      "Discover natural foods that can enhance your metabolic rate and support your health goals.",
    content: `
      <h2>Introduction</h2>
      <p>Your metabolism plays a crucial role in your overall health and weight management. While genetics and age do influence your metabolic rate, certain foods can naturally enhance it. In this article, we'll explore seven foods that can boost your metabolism and support your weight management goals.</p>

      <h2>1. Green Tea</h2>
      <p>Green tea contains catechins and caffeine, which work together to increase fat oxidation and thermogenesis. Studies show that drinking 2-3 cups of green tea daily can help boost your metabolic rate by 3-11%.</p>

      <h2>2. Spicy Foods</h2>
      <p>Capsaicin found in chili peppers can increase your metabolic rate temporarily. Adding spicy foods to your meals not only adds flavor but also helps your body burn calories more efficiently.</p>

      <h2>3. Lean Protein</h2>
      <p>Protein has a higher thermic effect of food (TEF) compared to fats and carbohydrates. This means your body burns more calories digesting protein, making it an excellent choice for boosting metabolism.</p>

      <h2>4. Whole Grains</h2>
      <p>Whole grains require more energy to digest than refined grains, which means they boost your metabolic rate. They also keep you fuller for longer, reducing overall calorie intake.</p>

      <h2>5. Water</h2>
      <p>Drinking water increases thermogenesis, the amount of calories your body burns to digest food and regulate temperature. Aim for at least 8 glasses of water daily.</p>

      <h2>6. Berries</h2>
      <p>Berries are rich in antioxidants and fiber, which support healthy digestion and metabolism. They also help regulate blood sugar levels, preventing energy crashes.</p>

      <h2>7. Nuts and Seeds</h2>
      <p>Nuts and seeds are high in protein and healthy fats, making them excellent for boosting metabolism. A small handful can provide sustained energy throughout the day.</p>

      <h2>Conclusion</h2>
      <p>Remember, while these foods can help boost your metabolism, they work best as part of a balanced, healthy diet. Combined with regular exercise and adequate sleep, these metabolism-boosting foods can support your wellness journey.</p>
    `,
  },
  "2": {
    title: "Common Diet Mistakes That Are Slowing Your Weight Loss",
    category: "Weight Management",
    date: "March 8, 2024",
    image: "/blog-2.jpg",
    excerpt:
      "Learn about common dietary pitfalls that might be preventing you from reaching your weight loss goals.",
    content: `
      <h2>Introduction</h2>
      <p>Weight loss can be challenging, especially when you're making common dietary mistakes without realizing it. In this article, we'll explore the most common diet mistakes that might be slowing your weight loss progress.</p>

      <h2>1. Skipping Meals</h2>
      <p>Skipping meals, especially breakfast, can slow down your metabolism and lead to overeating later in the day. Regular, balanced meals help maintain stable energy levels and metabolism.</p>

      <h2>2. Eliminating Entire Food Groups</h2>
      <p>Eliminating foods or groups can lead to nutritional deficiencies and unsustainable eating habits. A balanced diet includes all food groups in appropriate portions.</p>

      <h2>3. Not Tracking Portion Sizes</h2>
      <p>Even healthy foods can contribute to weight gain if consumed in excessive portions. Using smaller plates and measuring portions can help with portion control.</p>

      <h2>4. Relying on Low-Fat Products</h2>
      <p>Many low-fat products are high in sugar and artificial additives. These can lead to increased cravings and calorie consumption.</p>

      <h2>5. Not Staying Hydrated</h2>
      <p>Dehydration is often mistaken for hunger. Drinking adequate water can help reduce unnecessary snacking and support your metabolism.</p>

      <h2>Conclusion</h2>
      <p>Avoiding these common mistakes can significantly improve your weight loss results. Focus on balanced nutrition, portion control, and sustainable habits for long-term success.</p>
    `,
  },
  "3": {
    title: "A Simple Balanced Plate Formula for Everyday Healthy Eating",
    category: "Nutrition Tips",
    date: "March 5, 2024",
    image: "/blog-3.jpg",
    excerpt:
      "Master the basics of nutrition with this easy-to-follow plate model for balanced meals.",
    content: `
      <h2>Introduction</h2>
      <p>Creating balanced meals doesn't have to be complicated. Using the simple balanced plate formula, you can ensure every meal provides the right mix of nutrients.</p>

      <h2>The Balanced Plate Formula</h2>
      <p>Divide your plate into four sections: Half plate vegetables and fruits, Quarter plate lean protein, Quarter plate whole grains, and a small amount of healthy fats.</p>

      <h2>Half Plate: Vegetables and Fruits</h2>
      <p>Vegetables and fruits provide essential vitamins, minerals, and fiber. Aim for variety and color to maximize nutrient intake.</p>

      <h2>Quarter Plate: Lean Protein</h2>
      <p>Include sources like fish, poultry, legumes, or lean meat. Protein helps with satiety and muscle maintenance.</p>

      <h2>Quarter Plate: Whole Grains</h2>
      <p>Choose whole grains over refined grains for better fiber and sustained energy.</p>

      <h2>Healthy Fats</h2>
      <p>Add a small amount of healthy fats from sources like olive oil, nuts, or avocado.</p>

      <h2>Conclusion</h2>
      <p>Using this simple formula for every meal ensures balanced nutrition and supports your weight management and overall health goals.</p>
    `,
  },
  "4": {
    title: "Top 5 Foods to Control Blood Sugar Naturally",
    category: "Diabetes",
    date: "March 1, 2024",
    image: "/blog-4.jpg",
    excerpt:
      "Explore the best foods for managing blood sugar levels and preventing diabetes complications.",
    content: `
      <h2>Introduction</h2>
      <p>Managing blood sugar levels is crucial for diabetes prevention and management. Certain foods can help maintain stable blood sugar and improve insulin sensitivity.</p>

      <h2>1. Berries</h2>
      <p>Berries are low in sugar and high in fiber and antioxidants, making them excellent for blood sugar management.</p>

      <h2>2. Leafy Greens</h2>
      <p>Spinach, kale, and other leafy greens are low in calories and have minimal impact on blood sugar levels.</p>

      <h2>3. Legumes</h2>
      <p>Beans and lentils are high in fiber and protein, slowing glucose absorption and providing sustained energy.</p>

      <h2>4. Nuts and Seeds</h2>
      <p>These provide healthy fats and protein without significantly affecting blood sugar levels.</p>

      <h2>5. Whole Grains</h2>
      <p>Whole grains have a lower glycemic index than refined grains, helping maintain stable blood sugar.</p>

      <h2>Conclusion</h2>
      <p>Incorporating these foods into your diet can help manage blood sugar naturally and reduce your risk of diabetes complications.</p>
    `,
  },
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts] || blogPosts["1"];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative h-80 md:h-96 bg-muted overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="py-12 md:py-20 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-accent mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articals
            </Link>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {post.date}
                </span>
              </div>
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4 text-balance">
                {post.title}
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground">
                {post.excerpt}
              </p>
            </div>

            {/* Article Body */}
            <div className="text-sm md:text-lg text-foreground">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="space-y-4"
              />
            </div>

            {/* Author Info & CTA */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Want personalized nutrition guidance?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation with Dr. Anum Zahra to discuss your
                  nutrition goals and create a personalized plan.
                </p>
                <a
                  href="https://calendar.app.google/etfYMWr5rtPRdAUG7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-accent text-primary-foreground px-8">
                    Book Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
