import type { Post } from '@/types'
import PostCard from '@/components/PostCard'

interface PostGridProps {
  posts: Post[]
}

export default function PostGrid({ posts }: PostGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-200 py-16 text-center text-gray-500">
        No posts found.
      </div>
    )
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}