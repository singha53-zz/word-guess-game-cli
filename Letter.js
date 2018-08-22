function Letter(char) {
  (this.char = char),
    (this.isGuessed = false),
    (charCheck = function() {
      if (this.isGuessed) {
        return this.char;
      } else {
        return '_';
      }
    }),
    (isGuessedCheck = function(guess) {
      if (guess === this.char) {
        this.isGuessed = true;
      }
    });
}

module.exports = Letter;
