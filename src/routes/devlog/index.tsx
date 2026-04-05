import { createFileRoute } from '@tanstack/react-router'
import posts from '@/data/devlog.json'

export const Route = createFileRoute('/devlog/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
    </div>
  )
}
