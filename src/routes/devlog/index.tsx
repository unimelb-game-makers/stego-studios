import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/devlog/')({
  component: RouteComponent,
})

function RouteComponent() {

  return <div>Hello "/devlog/"!</div>
}
