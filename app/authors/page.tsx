import { getAllAuthors } from '@/lib/cosmic'
import AuthorCard from '@/components/AuthorCard'

export const revalidate = 60

export default async function AuthorsPage() {
  const authors = await getAllAuthors()

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">Authors</h1>
      <p className="mt-3 max-w-xl text-gray-600">
        The writers behind our AI adoption and integration coverage.
      </p>

      {authors.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-gray-200 py-16 text-center text-gray-500">
          No authors found.
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      )}
    </div>
  )
}