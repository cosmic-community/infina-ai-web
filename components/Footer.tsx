import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-white text-sm font-bold">
                AI
              </span>
              <span className="text-lg font-bold tracking-tight text-ink">Infina AI</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Practical perspectives on AI adoption for financial services and enterprise markets —
              focused on the fastest path to production.
            </p>
          </div>
          <nav className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-ink">Explore</span>
              <Link href="/" className="text-gray-600 transition-colors hover:text-ink">
                Home
              </Link>
              <Link href="/categories" className="text-gray-600 transition-colors hover:text-ink">
                Categories
              </Link>
              <Link href="/authors" className="text-gray-600 transition-colors hover:text-ink">
                Authors
              </Link>
            </div>
          </nav>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
          © {year} Infina AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}