export function HomeHero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Welcome to Wavy Hair Guide
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl">
        Your complete resource for understanding, caring for, and styling wavy hair.
      </p>
      <div className="flex gap-4">
        <a
          href="/guide/getting-started"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Get Started
        </a>
        <a
          href="/products"
          className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
        >
          View Products
        </a>
      </div>
    </div>
  )
}