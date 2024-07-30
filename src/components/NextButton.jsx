import { useContext } from 'react'
import { togglePlayers } from '../logic/functions'
import { GameContext } from '../context/GameContext'

export default function NextButton() {
	const [game, setGame] = useContext(GameContext)
	function handleClick() {
		const active = togglePlayers(game)
		setGame({ ...game, activePlayer: active })
		setGame({ ...game, round: game.round + 1 })
	}
	return (
		<>
			<button onClick={handleClick}>NEXT</button>
		</>
	)
}
