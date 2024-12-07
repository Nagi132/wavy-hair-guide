import { BlogHeader } from '@/components/blog/blog-header';
import { BlogList } from '@/components/blog/blog-list';
import { CategoryFilter } from '@/components/blog/category-filter';

export const metadata = {
  title: 'Blog - Wavy Hair Guide',
  description: 'Tips, guides, and advice for wavy hair care',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BlogHeader />
      <div className="mt-8 grid gap-12 md:grid-cols-[200px_1fr]">
        <aside>
          <CategoryFilter />
        </aside>
        <main>
          <BlogList />
        </main>
      </div>
    </div>
  );
}