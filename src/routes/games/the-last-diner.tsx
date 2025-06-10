import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/games/the-last-diner')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/games/the-last-diner"!</div>
}
