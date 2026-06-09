import Link from 'next/link'
import type { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const category = post.metadata?.category
  const author = post.metadata?.author
  const title = getMetafieldValue(post.metadata?.title) || post.title

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow hover:shadow-lg">
      <Link href={`/posts/${post.slug}`} className="block overflow-hidden">
        {featuredImage ? (
          <img
            src={`${featuredImage.imgix_url}?w=800&h=480&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={240}
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-52 w-full items-center justify-center bg-gray-100 text-gray-400">
            No image
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        {category && (
          <span className="mb-3 text-xs font-semibold uppercase tracking-wide text-accent">
            {getMetafieldValue(category.metadata?.name) || category.title}
          </span>
        )}

        <h3 className="text-lg font-bold leading-snug tracking-tight text-ink">
          <Link href={`/posts/${post.slug}`} className="transition-colors group-hover:text-accent">
            {title}
          </Link>
        </h3>

        {excerpt && (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">{excerpt}</p>
        )}

        {author && (
          <div className="mt-auto flex items-center gap-3 pt-5">
            {author.metadata?.avatar ? (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                alt={getMetafieldValue(author.metadata?.name) || author.title}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-gray-200" />
            )}
            <div className="text-xs">
              <p className="font-semibold text-ink">
                {getMetafieldValue(author.metadata?.name) || author.title}
              </p>
              {author.metadata?.role && (
                <p className="text-gray-500">{getMetafieldValue(author.metadata?.role)}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}