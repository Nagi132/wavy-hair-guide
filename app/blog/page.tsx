import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { BlogList } from '@/components/blog/blog-list'

export const metadata = {
  title: 'Blog - Wavy Hair Guide',
  description: 'Articles and guides about wavy hair care, styling, and maintenance',
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Wavy Hair Blog</h1>
      <BlogList posts={posts} />
    </div>
  )
}