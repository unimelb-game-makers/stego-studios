import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/games/trackline')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/games/trackline"!</div>
}
