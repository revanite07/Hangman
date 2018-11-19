const maxLives = 14;
var words = ["grunt", "saurfang", "thrall", "hellscream", "peon", 
"garrosh", "orgrimmar", "durotan", "frostwolf"];

var chosenWord = [];

var remainingLives = 0;
var totalLosses = document.getElementById("losses");
var totalWins = document.getElementById("wins");
var livesLeft = document.getElementById("livesLeft");
var word = document.getElementById("word");
var currentWord = [];
var lettersGuessed = document.getElementById("lettersGuessed");
var wrongArray = [];
var wins = 0;
var losses = 0;
var wordArray=[];

for (var i = 0; i < chosenWord.length; i++) {
    wordArray[i] = ('_');
    }
    
function restartGame(){
    remainingLives = maxLives;
    livesLeft.innerHTML = remainingLives

    chosenWord = words[Math.floor(Math.random() * words.length)];
    console.log(chosenWord);

    wordArray = [];
    wrongArray = [];
    
    for (var i = 0; i < chosenWord.length; i++) {
    wordArray[i] = ('_');
    }
        
};

    document.onkeyup = function(event) {
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        guessChecker(letterGuessed);
       
        if (wordArray.indexOf('_') === -1) {
            alert('THANKS YOU HOOMAN FOR NOT MAKING ME CRY!');
            totalWins.innerHTML = wins++;
            restartGame();
            
     }
         else if (remainginLives === 0) {
          alert('HAHA HOOMAN HAS TINY INTELLECT COMPARED TO ORC');
          totalLosses.innerHTML = losses++;
          restartGame();
          
         }
        };
     



  var remainingLetters = chosenWord.length;
function guessChecker(letter) {
    
    remainingLetters--;
    
    if (chosenWord.indexOf(letter) === -1){
            wrongArray.push(letter);
            lettersGuessed.innerHTML = wrongArray.join('');
            remainingLives--;
            livesLeft.innerHTML = remainingLives--;
    } 
    else {
    
   for (var j = 0; j < chosenWord.length; j++) {
         if (chosenWord[j] === letter) {
        wordArray[j] = letter;
         
         }
         word.innerHTML = wordArray.join(' ');
        }
    }
};


