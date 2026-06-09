// app/authors/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAuthorBySlug, getPostsByAuthor } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import PostGrid from '@/components/PostGrid'

export const revalidate = 60

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const role = getMetafieldValue(author.metadata?.role)
  const bio = getMetafieldValue(author.metadata?.bio)
  const avatar = author.metadata?.avatar

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Link href="/authors" className="text-sm font-semibold text-accent hover:underline">
        ← All authors
      </Link>

      <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        {avatar ? (
          <img
            src={`${avatar.imgix_url}?w=224&h=224&fit=crop&auto=format,compress`}
            alt={name}
            width={112}
            height={112}
            className="h-28 w-28 rounded-full object-cover"
          />
        ) : (
          <div className="h-28 w-28 rounded-full bg-gray-200" />
        )}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{name}</h1>
          {role && <p className="mt-1 text-lg font-medium text-accent">{role}</p>}
          {bio && <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">{bio}</p>}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-ink">
          Articles by {name}
        </h2>
        <PostGrid posts={posts} />
      </div>
    </div>
  )
}