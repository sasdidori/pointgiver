export function togglePlayers(game) {
	return game.activePlayer == 'player1'
		? (game.activePlayer = 'player2')
		: (game.activePlayer = 'player1')
}

export function checkWinner(game, setGame) {
	if (game.player1.points >= 3 || game.player2.points >= 3) {
		setGame({ ...game, winner: game.activePlayer })
	}
}
