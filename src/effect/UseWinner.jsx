import { useContext, useEffect} from 'react'
import { GameContext } from '../context/GameContext'

export default function UseWinner() {
	const [game, setGame] = useContext(GameContext)

	useEffect(() => {
		if (game.player1.points == 3) {
			setGame({ ...game, winner: 'player1' })
		} else if (game.player2.points == 3) {
			setGame({ ...game, winner: 'player2' })
		}
	}, [])

	return (
		<><div className='title'>
			<h2>WINNER</h2>
			<h3 className='player'>{game.winner}</h3>
		</div>
			
		</>
	)
}
