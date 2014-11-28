function whoWins(hand1, hand2) {
	return (winner(hand1, hand2) ||	tie(hand1, hand2));
}

function winner(hand1, hand2) {
	if(hand1[0] > hand2[0]) {
		return "Player1 wins 1 to 0"
	} 
	if(hand1[0] < hand2[0]){
		return "Player2 wins 1 to 0"
	}
}

function tie(hand1, hand2) {
	if(hand1[0] === hand2[0])
	{
		return "Tie"
	}
}