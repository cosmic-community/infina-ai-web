import Link from 'next/link'
import { getAllCategories } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export const revalidate = 60

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">Categories</h1>
      <p className="mt-3 max-w-xl text-gray-600">
        Browse articles by topic — from securities firms to SME automation.
      </p>

      {categories.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-gray-200 py-16 text-center text-gray-500">
          No categories found.
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const name = getMetafieldValue(category.metadata?.name) || category.title
            const description = getMetafieldValue(category.metadata?.description)
            return (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <h2 className="text-xl font-bold text-ink transition-colors group-hover:text-accent">
                  {name}
                </h2>
                {description && (
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
                )}
                <span className="mt-5 inline-block text-sm font-semibold text-accent">
                  View posts →
                </span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}