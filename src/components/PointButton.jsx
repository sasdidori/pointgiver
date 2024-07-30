import { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import { checkWinner } from '../logic/functions'

export default function PointButton() {
	const [game, setGame] = useContext(GameContext)
	function handleClick() {
		if (game.activePlayer == 'player1') {
			setGame({
				...game,
				player1: { ...game.player1, points: game.player1.points + 1 },
			})
		} else {
			setGame({
				...game,
				player2: { ...game.player2, points: game.player2.points + 1 },
			})
		}
		const winner = checkWinner(game, setGame)

	}
	return (
		<>
			<button onClick={handleClick}>+1</button>
		</>
	)
}
