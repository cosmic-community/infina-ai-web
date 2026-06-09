import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-white text-sm font-bold">
            AI
          </span>
          <span className="text-lg font-bold tracking-tight text-ink">Infina AI</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <Link href="/categories" className="transition-colors hover:text-ink">
            Categories
          </Link>
          <Link href="/authors" className="transition-colors hover:text-ink">
            Authors
          </Link>
        </nav>
      </div>
    </header>
  )
}