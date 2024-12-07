import { formatDate } from '@/lib/utils'
import Link from 'next/link'

export function BlogList({ posts }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article key={post._id} className="group">
          <Link href={`/blog/${post.slug}`}>
            <div className="space-y-3">
              <div>
                <span className="text-xs text-gray-500">
                  {formatDate(post.date)}
                </span>
              </div>
              <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}