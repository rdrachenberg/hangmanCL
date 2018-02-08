var wordList = require('./wordList.js');
// create a contructor called Letter
var Letter = function (letterProp) {
    // stores the actual letter
    this.letter = letterProp;
    // initially sets the guess boolean to false 
    this.guess = false;
    // create a function to Hide/Show the letter
    this.show = function () {
        if (this.guess == ' ') { 
            
            this.guess = true;
            return '  ';
        } if (this.guess === false) { 
            return ' _ ';
        } else { 
            // if correct it will return this letter
            return this.letterProp;
        }
    };
    
};
// export to use in word.js
module.exports = Letter;