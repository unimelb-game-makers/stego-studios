import { createFileRoute, Link } from '@tanstack/react-router'
import posts from '@/data/devlog.json'

export const Route = createFileRoute('/_layout/devlog/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="devlog-list">
      {posts.map((post) => (
        <Link key={post.id} to="/devlog/$id" params={{ id: post.id }} className="devlog-list-item">
          {post.name}
        </Link>
      ))}
    </div>
  )
}
