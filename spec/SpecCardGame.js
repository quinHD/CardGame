describe("In the highest card game", function() {
	it("may have a winner with a single round", function() {
		expect(whoWins(['1'],['2'])).
			toBe("Player2 wins 1 to 0");
		
		expect(whoWins(['2'],['1'])).
			toBe("Player1 wins 1 to 0");
	});

	it("may have a tie if players have the same card", function() {
		expect(whoWins(['1'],['1'])).
			toBe("Tie");
	});

	it("may stop the game if the hands are empty", function() {
		expect(function (){whoWins([''],[''])}).
			toThrow("Invalid input");
		expect(function (){whoWins([],[])}).
			toThrow("Invalid input");
	});

	it("may stop the game if the hands are wrong", function() {
		expect(function (){whoWins(['1'],['1','2'])}).
			toThrow("Invalid input");
	});

	it("may have a winner with two rounds", function() {
		expect(whoWins(['J','6'], ['J','Q'])).
			toBe("Player2 wins 1 to 0");
	});
});

