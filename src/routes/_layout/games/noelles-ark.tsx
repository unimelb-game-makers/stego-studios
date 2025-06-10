import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/games/noelles-ark')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/games/noelles-ark"!</div>
}
