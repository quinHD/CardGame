function whoWins(hand1, hand2) {
	if(handHasCards(hand1) && handHasCards(hand2) && hand1.length === hand2.length) {
		return playGame(hand1,hand2);
	}
	else {
		throw 'Invalid input'
	}
}

function playGame (hand1, hand2)
{
	var points_player1 = 0;
	var points_player2 = 0;

	for(var i = 0, len = hand1.length; i < len; i++)
	{
		switch (playRound(hand1[i],hand2[i])) {
		    case 1:
		        	points_player1++;
		        break;
		    case 2:
		        	points_player2++;
		        break;
	    }
	}

	return calculateWinner(points_player1, points_player2);


}

function calculateWinner(points_player1, points_player2) {

	if(points_player1 > points_player2){
		return "Player1 wins "+points_player1+" to "+points_player2
	}

	if(points_player1 < points_player2){
		return "Player2 wins "+points_player2+" to "+points_player1
	}

	if(points_player1 === points_player2){
		return "Tie"
	}

}

function playRound(card_from_hand1, card_from_hand2) {
	if(card_from_hand1 > card_from_hand2) {
		return 1
	} 
	if(card_from_hand1 < card_from_hand2){
		return 2
	}
}

function handHasCards(hand)
{
	if((hand.length >0) && (hand[0] != ''))
		return true
	else
		return false
}