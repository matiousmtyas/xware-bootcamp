"use strict!";

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        displayMessage('No Number!');
    }else if(guess===secretNumber){
        displayMessage("correct Number");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "green";

        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }}else if (guess !== secretNumber){
            displayMessage(guess > secretNumber ? "too high!" : "too low");
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('you lost the game');
            document.querySelector('.score').textContent = 0 ;
        }
    })


    document.querySelector(".again").addEventListener('click' , function(){
        score = 20;
        secretNumber = Math.trunc(Math.random()*20) + 1;
        displayMessage('start Guessing...')
        document.querySelector('.score').textContent = score;
        document.querySelector(".number").textContent = "?";
        document.querySelector(".guess").value= " ";
        document.querySelector('body').style.backgroundColor = "#222";

    })
