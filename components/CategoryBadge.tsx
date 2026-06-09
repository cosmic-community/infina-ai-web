import Link from 'next/link'
import type { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryBadgeProps {
  category: Category
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const name = getMetafieldValue(category.metadata?.name) || category.title

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent/20"
    >
      {name}
    </Link>
  )
}