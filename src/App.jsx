import './App.css'
import Displayer from './components/Displayer'
import { useState } from 'react'
import StartButton from './components/StartButton'
import { GameContext } from './context/GameContext'
import UseWinner from './effect/UseWinner'

function App() {
	const [game, setGame] = useState({
		player1: {
			name: 'player1',
			points: 0,
		},
		player2: {
			name: 'player2',
			points: 0,
		},
		activePlayer: 'player1',
		winner: '',
		isGameActive: false,
	})
	const player1Points = game.player1.points
	const player2Points = game.player2.points

	console.log("active player: ", game.activePlayer);
	console.log("player1 points: ", game.player1.points);
	console.log("player2 points: ", game.player2.points);
	console.log("winner: ", game.winner);
	console.log("game status: ", game.isGameActive);
	console.log("____________");

	return (
		<>
			<GameContext.Provider value={[game, setGame]}>
				{game.isGameActive === false ? (
					<div className='title' >
						<h2>GIVE POINTS</h2>
						<h3 className='info'>Click to start!</h3>
					</div>
				) : player1Points == 3 || player2Points == 3 ? (
					<UseWinner />
				) : (
					<Displayer />
				)}
				<br />
				<br />
				<StartButton />
			</GameContext.Provider>
		</>
	)
}
export default App
