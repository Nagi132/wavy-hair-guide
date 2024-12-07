export function FeaturedPosts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured post cards */}
          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Getting Started with Wavy Hair</h3>
            <p className="text-gray-600 mb-4">Everything you need to know about caring for your waves...</p>
            <a href="/blog/getting-started" className="text-blue-600 hover:underline">
              Read more →
            </a>
          </div>
          
          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Summer Care Guide</h3>
            <p className="text-gray-600 mb-4">Protect and enhance your waves during the summer months...</p>
            <a href="/blog/summer-care-guide" className="text-blue-600 hover:underline">
              Read more →
            </a>
          </div>
          
          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Product Comparison Guide</h3>
            <p className="text-gray-600 mb-4">Find the perfect products for your wave pattern...</p>
            <a href="/blog/product-comparison" className="text-blue-600 hover:underline">
              Read more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}