import './App.css'
import Displayer from './components/Displayer'
import { useState } from 'react'
import NextButton from './components/NextButton'
import PointButton from './components/PointButton'

function App() {
	const [point, setPoint] = useState({
		players: ['player1', 'player2'],
		player1: 0,
		player2: 0,
		winner: '',
		activePlayer: 'player1',
		round: 0,
		isGameActive: false,
	})
	console.log("active player is: ", point.activePlayer);
	console.log("point of player1: ", point.player1);
	console.log("point of player2: ", point.player2);
	console.log("round", point.round);
	console.log("is game active: ", point.isGameActive);
	
	return (
		<>
			<Displayer point={point} setPoint={setPoint}/>
			<NextButton
				point={point}
				setPoint={setPoint}
			/>
			<PointButton point={point} setPoint={setPoint}/>
		</>
	)
}

export default App
