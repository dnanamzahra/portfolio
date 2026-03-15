'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: '7 Foods That Naturally Boost Your Metabolism',
      excerpt: 'Discover natural foods that can enhance your metabolic rate and support your health goals.',
      image: '/blog-1.jpg',
      category: 'Nutrition Tips',
    },
    {
      id: 2,
      title: 'Common Diet Mistakes That Are Slowing Your Weight Loss',
      excerpt: 'Learn about common dietary pitfalls that might be preventing you from reaching your weight loss goals.',
      image: '/blog-2.jpg',
      category: 'Weight Management',
    },
    {
      id: 3,
      title: 'A Simple Balanced Plate Formula for Everyday Healthy Eating',
      excerpt: 'Master the basics of nutrition with this easy-to-follow plate model for balanced meals.',
      image: '/blog-3.jpg',
      category: 'Nutrition Tips',
    },
    {
      id: 4,
      title: 'Top 5 Foods to Control Blood Sugar Naturally',
      excerpt: 'Explore the best foods for managing blood sugar levels and preventing diabetes complications.',
      image: '/blog-4.jpg',
      category: 'Diabetes',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Health & Nutrition Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert tips, practical nutrition advice, and healthy lifestyle guidance to support your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-card border-border"
            >
              <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-primary mb-2">
                  {post.category}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.id}`}>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-accent p-0 h-auto"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button className="bg-primary hover:bg-accent text-primary-foreground px-8">
              Read All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
