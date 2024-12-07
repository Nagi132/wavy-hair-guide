import { HomeHero } from '@/components/home/hero';
import { NewsletterBanner } from '@/components/newsletter-banner';
import { FeaturedPosts } from '@/components/blog/featured-posts';

export default function Home() {
  return (
    <div className="space-y-12">
      <HomeHero />
      <FeaturedPosts />
      <NewsletterBanner />
    </div>
  );
}
