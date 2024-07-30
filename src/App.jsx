import './App.css'
import Displayer from './components/Displayer'
import { useState } from 'react'
import StartButton from './components/StartButton'
import { GameContext } from './context/GameContext'

function App() {
	const [clicked, setClicked] = useState(false)
	const [game, setGame] = useState({
		player1: {
			name: 'player1',
			points: 0,
		},
		player2: {
			name: 'player2',
			points: 0,
		},
		winner: '',
		activePlayer: 'player1',
		round: 1,
		isGameActive: false,
	})
	console.log("active player: ", game.activePlayer);
	console.log("is game active: ", game.isGameActive);
	console.log("round: ", game.round);
	console.log("winner: ", game.winner);
	console.log("points player1: ", game.player1.points);
	console.log("points player2: ", game.player2.points);
	console.log("____________");
	return (
		<>
			<GameContext.Provider value={[game, setGame]}>
				{clicked === false ? (
					<div>
						<h2>GIVE POINTS</h2>
						<h3>Click to start!</h3>
					</div>
				) : (
					<Displayer />
				)}
				<br />
				<br />
				<StartButton
					clicked={clicked}
					setClicked={setClicked}
				/>
			</GameContext.Provider>
		</>
	)
}
export default App
