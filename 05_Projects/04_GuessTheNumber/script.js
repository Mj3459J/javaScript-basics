// Generating Random Number.
let randomNumber=parseInt(Math.random()*100+1);// to remove decimal used parse int.

// Fetching fields from html.
const submitBtn=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const previousGuesses=document.querySelector('.guesses');
const remainingGuesses=document.querySelector('.lastResult');
const lowOrHigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

// Creating Element
const p=document.createElement('p');

// Defining Variables
let prevGuess=[];
let numGuesses=1;
let canPlayGame=true;

// Check if user is allowed to play game or not.
if(canPlayGame){
    submitBtn.addEventListener('click',function(e){
        e.preventDefault();

        const guess=parseInt(userInput.value);
        validateGuess(guess);
    });
}

// Function to validate the input given by the user.
function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid Number`);
    }
    else if(guess<1){
        alert(`Please enter a Nnmber greater than or equal to 1`);
    }
    else if(guess>100){
        alert(`Please enter a Number less than or equal to 100`);
    }
    else{
        prevGuess.push(guess);

        if(numGuesses===11){
            displayGuess(guess);
            displayMessage(`Game Over. Secret number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
// Function to check the current guess is correct or not.
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You gussed it right.`);
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage(`Your guess is lesser than Secret Number.`)
    }
    else if(guess>randomNumber){
        displayMessage(`Your guess is higher than Secret Number.`)
    }
}
// Function to clean input field and maintain prevGuess array, guess remaining.
function displayGuess(guess){
    userInput.value='';
    previousGuesses.innerHTML+=`${guess}  `;
    numGuesses++;
    remainingGuesses.innerHTML=`${11-numGuesses}`;
}

// Function to display the message for the guess.
function displayMessage(message){
    lowOrHigh.innerHTML=`<h2>${message}</h2>`;
}

// 
function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;

    startOver.appendChild(p);
    canPlayGame=false;
    newGame();
}

// 
function newGame(){
    const newGameBtn=document.querySelector('#newGame');
    newGameBtn.addEventListener('click',function (e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuesses=1;
        previousGuesses.innerHTML='';
        remainingGuesses.innerHTML=`${11-numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        canPlayGame=true;
    });
}