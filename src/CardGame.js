function whoWins(hand1, hand2) {
	if(handHasCards(hand1) && handHasCards(hand2))
		return (existsWinner(hand1, hand2) ||	isTie(hand1, hand2));
	else
		throw 'Invalid input'

}

function existsWinner(hand1, hand2) {
	if(hand1[0] > hand2[0]) {
		return "Player1 wins 1 to 0"
	} 
	if(hand1[0] < hand2[0]){
		return "Player2 wins 1 to 0"
	}
}

function isTie(hand1, hand2) {
	if(hand1[0] === hand2[0])
	{
		return "Tie"
	}
}

function handHasCards(hand)
{
	if((hand.length >0) && (hand[0] != ''))
		return true
	else
		return false
}