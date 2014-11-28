describe("In the highest card game", function(){
	it("may have a winner with a single round", function(){
		expect(whoWins(['1'],['2'])).
			toBe("Player2 wins 1 to 0");
		expect(whoWins(['2'],['1'])).
			toBe("Player1 wins 1 to 0");
	});

	it("may have a tie if players have the same card", function(){
		expect(whoWins(['1'],['1'])).
			toBe("Player2 wins 1 to 0");
	});


});

