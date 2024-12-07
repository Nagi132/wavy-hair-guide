import { HomeHero } from '@/components/home/hero';
import { FeaturedPosts } from '@/components/blog/featured-posts';
import { NewsletterBanner } from '@/components/newsletter-banner';
import { ProductShowcase } from '@/components/products/product-showcase';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <HomeHero />
      <ProductShowcase />
      <FeaturedPosts />
      <NewsletterBanner />
    </div>
  );
}