import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesPreview from '@/components/services-preview';
import BlogPreview from '@/components/blog-preview';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesPreview />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
}
