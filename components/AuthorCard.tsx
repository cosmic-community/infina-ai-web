import Link from 'next/link'
import type { Author } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const role = getMetafieldValue(author.metadata?.role)
  const bio = getMetafieldValue(author.metadata?.bio)
  const avatar = author.metadata?.avatar

  return (
    <Link
      href={`/authors/${author.slug}`}
      className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center transition-shadow hover:shadow-lg"
    >
      {avatar ? (
        <img
          src={`${avatar.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
          alt={name}
          width={80}
          height={80}
          className="h-20 w-20 rounded-full object-cover"
        />
      ) : (
        <div className="h-20 w-20 rounded-full bg-gray-200" />
      )}
      <h3 className="mt-4 text-lg font-bold text-ink transition-colors group-hover:text-accent">
        {name}
      </h3>
      {role && <p className="text-sm font-medium text-accent">{role}</p>}
      {bio && <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">{bio}</p>}
    </Link>
  )
}