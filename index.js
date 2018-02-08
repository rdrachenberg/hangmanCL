var Word = require('./word.js');
var prompt = require('prompt');
var inquirer = require('inquirer');

console.log("Welcome to Terminal Hangman!");
console.log("Guess a letter");
console.log("-----------------------------");
prompt.start();
const EventEmitter = require('events');
EventEmitter.defaultMaxListeners = 100;
console.error('');
// word list to loop through for random word
var wordList = ["abandoned", "aardvark", "abbey", "abrasive", "aye", "babble", "babe", "baboons", "badge", "bags", "bail", "baker", "bat", "beach", "bobcat", "brain", "calender", "campaign", "camper", "campfire", "canal", "cartel", "casino", "censored", "cipher", "circle", "controls", "dagger", "dakotas", "dallas", "damsel", "dancers", "debt", "debugging", "debunked", "decentralization", "decoys", "decree", "decrypt", 'decrypted', "deer", "deface", "dragon", "devoid", "diagram", "dial", "dialect", "door", "doorbell", "dress", "drummer", "drunks", "dumb", "dummy", "egret", "egypt", "egyptian", "eighteen", "electrifying", "elegant", "elementary", "elements", "elephant", "elf", "episodes", "escrow", "espionage", "established", "esteemed", "estimates", "estoppel", "estoppels", "estranged", "exiled", "exit", "external", "extinct", "eyeglasses", "eyehole", "eyelids", "eyeliner", "fantom", "farce", "farewell", "farmland", "farms", "gains", "gamekeeper", "gasoline", "gatekeeper", "gate", "gator", "gauge", "gene", "generalize", "gloss", "gone", "grand", "granddad", "grift", "hack", "hair", "hamburgs", "have", "havoc", "hell", "hexadecimal", "hexagon", "hippy", "hips", "hipster", "honk", "huddle", "illusive", "image", "impostor", "jets", "joke", "joker", "judo", "kindergarten", "kindle", "kings", "korean", "kosher", "label", "labor", "labs", "lackluster", "lacrosse", "lake", "lawman", "lick", "life", "magma", "magnet", "magneto", "makers", "malt", "newsboy", "newscast", "newspaper", "nine", "nippy", "nirvana", "nonlethal", "northerner", "northwest", "nostalgic", "nosy", "obey", "obit", "objects", "october", "official", "oil", "open", "pallet", "palm", "pane", "panel", "parcel", "pardon", "parred", "parse", "quail", "queen", "quirk", "quirked", "rabid", "racer", "raceway", "rack", "racket", "radar", "rake", "rampart", "ranch", "rescue", "reshape", "response", "rest", "retool", "retooled", "retorted", "retried", "sack", "sad", "sail", "salesman", "salmon", "salt", "sandbox", "saturn", "seduce", "shack", "suspense", "swiss", "tango", "tank", "tao", "target", "tax", "technical", "technology", "thong", "tiger", "unarm", "unbounded", "unconditionally", "uncover", "undergo", "underpass", "uneasy", "unify", "unimpressed", "unknown", "unpopular", "unseen", "untractable", "valet", "validate", "valium", "valkyrie", "vanish", "vans", "vapor", "vapored", "vegan", "vex", "vice", "walker", "warcraft", "warcrafts", "warehouse", "warlock", "warlocks", "warlord", "warlords", "warm", "water", "xerox", "xmas", "yacht", "yack", "yahoo", "yale", "yearbook", "yellow", "yelp", "yeomen", "yep", "yoga", "yogurt", "yogurts", "yuk", "zap", "zapped", "zero", "zeta", "zurich"]; 

var word = '';
// create a function to check the letters
function checkLetters(letters) {
    var isLetterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] === letters) {
            isLetterInWord = true;
        }
    }
    if (isLetterInWord) {
        for (var k = 0; k < blanks; k++) {
            if (randomWord[k] === letters) {
                usLetters[k] = letters;
            }
        }
    } else {
        badGuess.push(letters);
        guessNum--;
    }
    console.log(usLetters);
};
var hangman = {
   wordList: wordList,
    wordsWon: 0,
    guessesRemaining: 10,
    randomWord: null,

    startHangman: function (wrd) {
        this.resetGuesses();
        this.randomWord = new Word(this.wordList[Math.floor(Math.random() * this.wordList.length)]);
        var g = this.randomWord;
        console.log(g);
        // this.randomWord.getLet();
        this.promptUser();
    },

    resetGuesses: function () {
        this.guessesRemaining = 10;
    },

    promptUser: function () {
        var self = this;
        prompt.get(['guessLet'], function (err, result) {
            console.log("Your guessed: " + result.guessLet);
            var manyGuessed = self.randomWord.checkLetters(result.guessLet);

            if (manyGuessed == 0) {
                console.log("WRONG");
                self.guessesRemaining--;

            } else {
                console.log("CORRECT");
                if (self.randomWord.findWord()) {
                    console.log("You won!");
                    console.log("-------------------");
                    return;
                }
            }

            console.log("Guesses remaining: " + self.guessesRemaining);
            console.log("-------------------");
            if ((self.guessesRemaining > 0) && (self.randomWord.found == false)) {
                self.promptUser();
            }
            else if (self.guessesRemaining == 0) {
                console.log("Game over. Correct Word ", self.randomWord.target);
            } else {
                console.log(self.randomWord.wordRender());
            }
        });

    }


};

hangman.startHangman();
