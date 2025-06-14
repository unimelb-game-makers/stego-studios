import { GameHeader } from '@/components/game/game-header'
import GameRow from '@/components/game/game-row'
import { theLastDiner } from '@/data/games'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/games/the-last-diner')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <GameHeader
        image="/images/the-last-diner.png"
        title={theLastDiner.title}
        tags={theLastDiner.tags}
        description={theLastDiner.description}
      />

      <GameRow game={theLastDiner} reverse={true} />
      <GameRow game={theLastDiner}/>
    </>
  )
}
