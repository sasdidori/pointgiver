import { useContext } from 'react'
import NextButton from './NextButton'
import PointButton from './PointButton'
import { GameContext } from '../context/GameContext'
export default function Displayer() {
	//if there's a winner, display the winner, if no winner, display active player and the players point
	const [game, setGame] = useContext(GameContext)
	const activePlayer = game.activePlayer
	const playerPoint = game.activePlayer == 'player1' ? game.player1.points : game.player2.points
	return (
		<>
			<h2>Active player is: {activePlayer}</h2>
			<h3>Points: {playerPoint}</h3>
			<h3>Winner: {game.winner}</h3>
			<NextButton />
			<PointButton />
		</>
	)
}
