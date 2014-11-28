Juego de cartas
COMMIT:
 - cuando hay un test que falla
 - cuando lo hemos solucionado
 - cuando hacemos refactor

API: 

function whoWins(hand1, hand2)
var hand = ['1','2']

expect(whoWins(['1'],['2'])).toBe("Player1 wins 1 to 0")

TO-DO LIST
Input -> Output
 f(['1'], ['2']) 		 -> "Player2 wins 1 to 0"
 f(['1'], ['1']) 		 -> "Tie"
 f(['2'], ['1']) 		 -> "Player1 wins 1 to 0"
 f([''], ['']) 			 -> throw Error ('Invalid input')
 f(['1'], ['Ñ']) 			 -> throw Error ('Invalid input')
 f(['1'], ['1','2']) 	 -> throw Error ('Invalid input')
 f(['9','6'], ['J','Q']) -> "Player2 wins 2 to 0"
 f(['9','6'], ['5','Q']) -> "Tie"
 f(['9','6'], ['9','Q']) -> "Player2 wins 1 to 0"
 f(['J','J','J','J','J'], ['J','J','J','J','J']) -> throw Error ('Invalid input')