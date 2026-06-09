import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center">
      <span className="text-6xl">🤖</span>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink">Page not found</h1>
      <p className="mt-3 text-gray-600">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
      >
        Back to home
      </Link>
    </div>
  )
}