import { useState } from 'react'

export default function StartButton({ point, setPoint }) {
	const [clicked, setClicked] = useState(false)
	function handleClick() {
		setClicked(!clicked)
		//setPoint({ ...point, isGameActive: !clicked })
	}
	return (
		<>
			<button onClick={handleClick}>
				{clicked === false ? 'START' : 'RESTART'}{' '}
			</button>
		</>
	)
}
