/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gameplaying;

// scores = [0,0]; // Global score for both users 
// roundScore = 0; // roundScore of the active player 
// activePlayer = 0; // 0-> Player 1, 1-> Player 2

init();

// // When a page loads first time then the block of the dice should not be visible
// document.querySelector('.dice').style.display = 'none';

// // Set all four scores to 0 when a user loads the page 
// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-0').textContent = '0';


// When a user clicks on the roll the dice 
document.querySelector('.btn-roll').addEventListener('click',  function(){

    if(gameplaying){

            // 1. Random Number 
   var  dice = Math.floor(Math.random()*6) + 1;

   

   //2. Display a result 
   var diceDOM = document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src = 'dice-' + dice + '.png';


   //3. Update the roundScore only IF the rollled number is not 1

   if(dice !== 1){
         // add socre 
         roundScore += dice;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;
   }else{
       // next player 
         nextPlayer();

   }
    }


});


// HOLD Button 

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gameplaying){

    // 1. Add current score to the global score 

    scores[activePlayer] += roundScore;


    //2. Update UI

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


    // Check if player won the game
    if(scores[activePlayer]>=20){
        document.getElementById('name-' + activePlayer).textContent = "WINNER!!!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
        gameplaying = false;
    }else{

        nextPlayer();
    }
}

});


// Function for the next player 
function nextPlayer(){

     // next player 
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     // document.querySelector('.player-0-panel').classList.remove('active');
     // document.querySelector('.player-1-panel').classList.add('active');

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');


     document.querySelector('.dice').style.display = 'none';


}

// New game button 

document.querySelector('.btn-new').addEventListener('click', init); // callback function example -> init

// Init function 
function init(){
    scores =[0,0];
    activePlayer = 0;
    roundScore = 0;
    gameplaying = true;
    

    document.querySelector('.dice').style.display = 'none';

// Set all four scores to 0 when a user loads the page 
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';

document.getElementById('name-1').textContent = "Player 2";
document.getElementById('name-0').textContent = "Player 1";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


}







