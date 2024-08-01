import { useContext } from 'react'
import NextButton from './NextButton'
import PointButton from './PointButton'
import { GameContext } from '../context/GameContext'
export default function Displayer() {
	const [game] = useContext(GameContext)
	const activePlayer = game.activePlayer
	const playerPoint =
		game.activePlayer == 'player1' ? game.player1.points : game.player2.points
	return (
		<>
			<div>
				<div className='title'>
				<h2>ACTIVE PLAYER </h2>
				<h3 className='player'>{activePlayer}</h3>
				<h3 className='info'>points: {playerPoint}</h3>
				</div>
				
				<NextButton />
				<PointButton />
			</div>
		</>
	)
}
