export function Navigation() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <a
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </a>
      <a
        href="/guide"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Guides
      </a>
      <a
        href="/products"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Products
      </a>
      <a
        href="/routines"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Routines
      </a>
    </nav>
  )
}