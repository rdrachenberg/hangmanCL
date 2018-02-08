// var wordList = ["abandoned", "aardvark", "abbey", "abrasive", "aye", "babble", "babe", "baboons", "badge", "bags", "bail", "baker", "bat", "beach", "bobcat", "brain", "calender", "campaign", "camper", "campfire", "canal", "cartel", "casino", "censored", "cipher", "circle", "controls", "dagger", "dakotas", "dallas", "damsel", "dancers", "debt", "debugging", "debunked", "decentralization", "decoys", "decree", "decrypt", 'decrypted', "deer", "deface", "dragon", "devoid", "diagram", "dial", "dialect", "door", "doorbell", "dress", "drummer", "drunks", "dumb", "dummy", "egret", "egypt", "egyptian", "eighteen", "electrifying", "elegant", "elementary", "elements", "elephant", "elf", "episodes", "escrow", "espionage", "established", "esteemed", "estimates", "estoppel", "estoppels", "estranged", "exiled", "exit", "external", "extinct", "eyeglasses", "eyehole", "eyelids", "eyeliner", "fantom", "farce", "farewell", "farmland", "farms", "gains", "gamekeeper", "gasoline", "gatekeeper", "gate", "gator", "gauge", "gene",  "generalize", "gloss", "gone", "grand", "granddad", "grift", "hack", "hair", "hamburgs", "have", "havoc", "hell", "hexadecimal", "hexagon", "hippy", "hips", "hipster", "honk", "huddle", "illusive", "image", "impostor", "jets", "joke", "joker", "judo", "kindergarten", "kindle", "kings", "korean", "kosher", "label", "labor", "labs", "lackluster", "lacrosse", "lake", "lawman", "lick", "life", "magma", "magnet", "magneto", "makers", "malt", "newsboy", "newscast", "newspaper", "nine", "nippy", "nirvana", "nonlethal", "northerner", "northwest", "nostalgic", "nosy", "obey", "obit", "objects", "october", "official", "oil", "open", "pallet", "palm", "pane", "panel", "parcel", "pardon", "parred", "parse", "quail", "queen", "quirk", "quirked", "rabid", "racer", "raceway", "rack", "racket", "radar", "rake", "rampart", "ranch", "rescue", "reshape", "response", "rest", "retool", "retooled", "retorted", "retried", "sack", "sad", "sail", "salesman", "salmon", "salt", "sandbox", "saturn", "seduce", "shack", "suspense", "swiss", "tango", "tank", "tao", "target", "tax", "technical", "technology", "thong", "tiger", "unarm", "unbounded", "unconditionally", "uncover", "undergo", "underpass", "uneasy", "unify", "unimpressed", "unknown", "unpopular", "unseen", "untractable", "valet", "validate", "valium", "valkyrie", "vanish", "vans", "vapor", "vapored", "vegan", "vex", "vice", "walker", "warcraft", "warcrafts", "warehouse", "warlock", "warlocks", "warlord", "warlords", "warm", "water", "xerox", "xmas", "yacht", "yack", "yahoo", "yale", "yearbook", "yellow", "yelp", "yeomen", "yep", "yoga", "yogurt", "yogurts", "yuk", "zap", "zapped", "zero", "zeta", "zurich"]; 

//Sets up a function that chooses the word and returns it back. Exports is used so that this function is accessible within other JS files. 
exports.ChooseWord = function () {
    var randNum = Math.floor((Math.random() * wordList.length) + 1);
    return wordList[i];
    console.log('this is the ChooseWord ' + ChooseWord);
}


// // holds the random word in an object in the variable name randomWord from the string variable wordList
// var randomWord = {};
// // holds the letters in the randomly chosen word
// var lettersInWord = {};
// // initializes the variable blanks 
// var blanks = 0;
// // will hold the correct letters and underscores
// var usLetters = {}; 
// // will keep track of the incorrect user keystrokes 
// var badGuess = []; 
// // keep track of the number of incorrect user guesses 
// var badCount = 0; 
// // keeps track of the number of correct guesses
// var goodCount = 0;  
// // creates a variable that will determine the amount of user guesses before game is over
// var guessNum = 10;


// // create a funciton that will start the game and randomly pick the word from the word array 
// function startHangman() {
//     guessNum = 10; 
//     randomWord = wordList[Math.floor(Math.random()* wordList.length)]; 
//     lettersInWord = randomWord.split([""]);
//     blanks = lettersInWord.length;
//     JSON.stringify(lettersInWord);
//     console.log(lettersInWord); 
//     var b = JSON.parse(JSON.stringify(randomWord));
//     console.log("Random word:  " + b); 

//     // resets the usLetters array 
//     usLetters = []; 
//     // resets the badGuess array 
//     badGuess = [];

//     for (var i = 0; i < blanks; i++) {
//         usLetters.push("_");
//         // JSON.parse(usLetters);
//     }
//     console.log(usLetters);


// };



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
// checkLetters();
// console.log(checkLetters());

function gameComplete() {
    console.log("WinCount: " + goodCount + " | LossCount: " + badCount + " | NumGuesses: " + guessNum);

    if (lettersInWord.toString() === usLetters.toString()) {
        goodCount++;
        console.log("YOU WON!!!!!  ")
        startHangman();
    
    } else if (guessNum === 0) {
        badCount++;
        console.log("YOU LOSE!!! :~(  ")
        startHangman(); 
    }   
    
};

// startHangman(); 
function onKey(){
var key = process.argv[2]; 

var letterPressed = String.fromCharCode(event.keyKCode).toLowerCase();

checkLetters(letterPressed); 

gameComplete();  
};


// wordList.forEach(function ([i]) {
//     var randomNumber = Math.floor(Math.random() * textArray.length);
//     console.log(x);
// });
