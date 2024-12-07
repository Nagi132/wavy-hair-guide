export function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Product cards will be mapped here */}
      <div className="rounded-lg border p-6">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
          {/* Product image will go here */}
        </div>
        <h3 className="mt-4 text-lg font-semibold">Wavy Hair Shampoo</h3>
        <p className="mt-2 text-gray-600">Gentle cleansing for wavy hair...</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">$24.99</span>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}