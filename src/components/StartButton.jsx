import { useContext } from 'react'
import { GameContext } from '../context/GameContext'

export default function StartButton({ clicked, setClicked }) {
	const [game, setGame] = useContext(GameContext)
	function handleClick() {
		setClicked(!clicked)
		setGame({ ...game, isGameActive: !clicked })
		//if there is a winner, set things back to the starting state
	}
	return (
		<>
			<button onClick={handleClick}>
				{clicked === false ? 'START' : 'RESTART'}{' '}
			</button>
		</>
	)
}
