// app/posts/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import CategoryBadge from '@/components/CategoryBadge'

export const revalidate = 60

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const content = getMetafieldValue(post.metadata?.content)
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category
  const tags = post.metadata?.tags
  const primaryKeyword = getMetafieldValue(post.metadata?.primary_keyword)

  return (
    <article>
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
          <div className="mb-4 flex items-center gap-3">
            {category && <CategoryBadge category={category} />}
          </div>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-ink text-balance md:text-4xl">
            {title}
          </h1>
          {excerpt && (
            <p className="mt-5 text-lg leading-relaxed text-gray-600">{excerpt}</p>
          )}

          {author && (
            <div className="mt-8 flex items-center gap-3">
              {author.metadata?.avatar ? (
                <img
                  src={`${author.metadata.avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                  alt={getMetafieldValue(author.metadata?.name) || author.title}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : (
                <div className="h-12 w-12 rounded-full bg-gray-200" />
              )}
              <div className="text-sm">
                <Link
                  href={`/authors/${author.slug}`}
                  className="font-semibold text-ink hover:text-accent"
                >
                  {getMetafieldValue(author.metadata?.name) || author.title}
                </Link>
                {author.metadata?.role && (
                  <p className="text-gray-500">{getMetafieldValue(author.metadata?.role)}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Featured image */}
      {featuredImage && (
        <div className="mx-auto max-w-4xl px-5">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={800}
            height={450}
            className="-mt-px w-full rounded-2xl object-cover md:mt-10"
          />
        </div>
      )}

      {/* Content */}
      <div className="mx-auto max-w-3xl px-5 py-12">
        {content ? (
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <p className="text-gray-500">No content available.</p>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2 border-t border-gray-100 pt-8">
            {tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
              >
                #{getMetafieldValue(tag)}
              </span>
            ))}
          </div>
        )}

        {primaryKeyword && (
          <p className="mt-8 text-xs uppercase tracking-wide text-gray-400">
            Topic: {primaryKeyword}
          </p>
        )}

        <div className="mt-12">
          <Link href="/" className="text-sm font-semibold text-accent hover:underline">
            ← Back to all articles
          </Link>
        </div>
      </div>
    </article>
  )
}