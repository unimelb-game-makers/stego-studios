import { createFileRoute, Link, Navigate } from '@tanstack/react-router'
import ReactMarkdown from 'react-markdown'
import posts from '@/data/devlog.json'

export const Route = createFileRoute('/devlog/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const post = posts.find((p) => p.id === id)

  if (!post) {
    return <Navigate to="/devlog" />
  }

  return (
    <div className="devlog-entry">
      <Link to="/devlog" className="devlog-back">← Back</Link>
      <h1 className="devlog-entry-title">{post.name}</h1>
      <div className="devlog-entry-body">
        <ReactMarkdown>{post.markdown}</ReactMarkdown>
      </div>
    </div>
  )
}
