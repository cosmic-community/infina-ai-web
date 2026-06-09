// app/categories/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, getPostsByCategory } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import PostGrid from '@/components/PostGrid'

export const revalidate = 60

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Link href="/categories" className="text-sm font-semibold text-accent hover:underline">
        ← All categories
      </Link>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{name}</h1>
      {description && <p className="mt-3 max-w-2xl text-gray-600">{description}</p>}

      <div className="mt-10">
        <PostGrid posts={posts} />
      </div>
    </div>
  )
}