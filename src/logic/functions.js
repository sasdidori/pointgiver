export function togglePlayers(game) {
	return game.activePlayer == 'player1'
		? (game.activePlayer = 'player2')
		: (game.activePlayer = 'player1')
}

