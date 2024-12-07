import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { Mdx } from '@/components/mdx'

interface PostPageProps {
  params: {
    slug: string
  }
}

async function getPostFromParams(params: PostPageProps['params']) {
  const post = allPosts.find((post) => post.slugAsParams === params.slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8 prose prose-blue dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <Mdx code={post.body.code} />
    </article>
  )
}