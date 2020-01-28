//Create an object to hold the game info
var game = {
  num : 0,
  turns : 0,
  reset : function() {
      //function to reset
      this.turns = 0;
      this.newNum();
  },
  newNum : function() {
      //get a random integer between 1 and 10
      this.num = parseInt(Math.random() * 10) + 1;
  },
        checkGuess : function(guess) {
            //try to convert the guess into a integer
            try {
                guess = parseInt(guess);
            } catch(e) {
                alert("Enter a guess!");
                this.turns++;
                return false;
            }

            //perform strict check of equality
            if (guess === this.num) {
                alert("Correct! It took you " + this.turns + " turn(s) to guess my number");
                return true;
            } else if (guess > this.num) {
                alert("Your guess is too high. Try again.");
                this.turns++;
                return false;
            } else {
                alert("Your guess is too low. Try again.");
                this.turns++;
                return false;
            }
        }
    };


    function guessNumber() {
        var guess = document.getElementById("guess").value;
        game.checkGuess(guess);
    }

    function resetGame() {
        game.reset();
    }

    resetGame();
