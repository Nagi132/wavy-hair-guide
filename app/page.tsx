import { HomeHero } from '@/components/home/hero'
import { FeaturedProducts } from '@/components/home/featured-products'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeHero />
      <FeaturedProducts />
    </main>
  )
}