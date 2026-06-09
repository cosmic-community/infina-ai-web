import Link from 'next/link'
import type { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface FeaturedPostProps {
  post: Post
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const featuredImage = post.metadata?.featured_image
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const category = post.metadata?.category
  const author = post.metadata?.author
  const title = getMetafieldValue(post.metadata?.title) || post.title

  return (
    <article className="grid items-center gap-8 overflow-hidden rounded-3xl border border-gray-100 bg-white md:grid-cols-2">
      <Link href={`/posts/${post.slug}`} className="block overflow-hidden md:h-full">
        {featuredImage ? (
          <img
            src={`${featuredImage.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={600}
            height={450}
            className="h-64 w-full object-cover md:h-full"
          />
        ) : (
          <div className="flex h-64 w-full items-center justify-center bg-gray-100 text-gray-400 md:h-full">
            No image
          </div>
        )}
      </Link>

      <div className="p-8 md:pr-12">
        {category && (
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-wide text-accent">
            {getMetafieldValue(category.metadata?.name) || category.title}
          </span>
        )}

        <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-3xl">
          <Link href={`/posts/${post.slug}`} className="transition-colors hover:text-accent">
            {title}
          </Link>
        </h2>

        {excerpt && (
          <p className="mt-4 text-base leading-relaxed text-gray-600">{excerpt}</p>
        )}

        {author && (
          <div className="mt-6 flex items-center gap-3">
            {author.metadata?.avatar ? (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={getMetafieldValue(author.metadata?.name) || author.title}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gray-200" />
            )}
            <div className="text-sm">
              <p className="font-semibold text-ink">
                {getMetafieldValue(author.metadata?.name) || author.title}
              </p>
              {author.metadata?.role && (
                <p className="text-gray-500">{getMetafieldValue(author.metadata?.role)}</p>
              )}
            </div>
          </div>
        )}

        <Link
          href={`/posts/${post.slug}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
        >
          Read article
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}