export function togglePlayers(point) {
	return point.activePlayer == 'player1'
		? (point.activePlayer = 'player2')
		: (point.activePlayer = 'player1')
}
