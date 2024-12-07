import { ProductGrid } from '@/components/products/product-grid';
import { ProductFilters } from '@/components/products/product-filters';

export const metadata = {
  title: 'Products - Wavy Hair Guide',
  description: 'Recommended products for wavy hair care',
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Wavy Hair Products</h1>
      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        <ProductFilters />
        <ProductGrid />
      </div>
    </div>
  );
}