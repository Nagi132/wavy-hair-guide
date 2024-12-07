import { products } from '@/data/products';

export function ProductShowcase() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(products.shampoos).slice(0, 3).map((product) => (
            <div key={product.id} className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>
                <a href={`/products/${product.id}`} className="text-blue-600 hover:underline">
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}