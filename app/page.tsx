import Link from 'next/link'
import { getAllPosts } from '@/lib/cosmic'
import FeaturedPost from '@/components/FeaturedPost'
import PostGrid from '@/components/PostGrid'

export const revalidate = 60

export default async function HomePage() {
  const posts = await getAllPosts()
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Infina AI Inside
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-ink text-balance md:text-5xl">
            The fastest path to AI in production — for financial services and enterprise.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Practical, no-hype perspectives on AI adoption, integration, and speed to value.
            Written for CTOs and Heads of Product who are done debating build vs. buy.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-16">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 py-20 text-center text-gray-500">
            No posts published yet. Check back soon.
          </div>
        ) : (
          <>
            {featured && (
              <section className="mb-16">
                <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Featured
                </h2>
                <FeaturedPost post={featured} />
              </section>
            )}

            {rest.length > 0 && (
              <section>
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-2xl font-bold tracking-tight text-ink">Latest articles</h2>
                  <Link
                    href="/categories"
                    className="text-sm font-semibold text-accent hover:underline"
                  >
                    Browse by topic →
                  </Link>
                </div>
                <PostGrid posts={rest} />
              </section>
            )}
          </>
        )}
      </div>
    </div>
  )
}