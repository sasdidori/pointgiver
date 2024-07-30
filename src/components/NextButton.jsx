import { togglePlayers } from '../logic/functions'

export default function NextButton({ point, setPoint }) {
	function handleClick() {
		let active = togglePlayers(point)
		setPoint({ ...point, activePlayer: active})
		setPoint({...point, round: point.round + 1})
	}
	return (
		<>
			<button onClick={handleClick}>NEXT</button>
		</>
	)
}
