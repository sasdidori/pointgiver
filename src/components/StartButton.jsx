import { useContext } from 'react'
import { GameContext } from '../context/GameContext'

export default function StartButton() {
	const [game, setGame] = useContext(GameContext)

	function handleClick() {
		setGame({
			...game,
			player1: { ...game.player1, points: (game.player1.points = 0) },
		})
		setGame({
			...game,
			player2: { ...game.player2, points: (game.player2.points = 0) },
		})
		setGame({ ...game, ...game.activePlayer = 'player1' })
		console.log('active player: ', game.activePlayer)
		setGame({ ...game, ...game.winner = '' })
		setGame({ ...game, isGameActive: true })
		console.log('game state: ', game.isGameActive)
	}
	return (
		<>
			<button onClick={handleClick}>
				{game.isGameActive === false ? 'START' : 'RESTART'}
			</button>
		</>
	)
}
