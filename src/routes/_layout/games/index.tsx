import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/games/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/games/"!</div>
}
