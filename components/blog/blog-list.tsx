export function BlogList() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Blog post cards will be mapped here */}
      <div className="rounded-lg border p-6">
        <span className="text-sm text-gray-500">December 7, 2024</span>
        <h2 className="mt-2 text-xl font-semibold">Getting Started with Wavy Hair</h2>
        <p className="mt-2 text-gray-600">Learn the basics of caring for your wavy hair pattern...</p>
        <a href="/blog/getting-started" className="mt-4 inline-block text-blue-600 hover:underline">
          Read more →
        </a>
      </div>
    </div>
  );
}