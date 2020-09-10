var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
        //1. Generate a random number 
    var dice = Math.floor((Math.random()*6)) + 1;
    
    //2. Display the result 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Add it to the roundScore and display to the roundScore

    if(dice !== 1){
    roundScore+= dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    }

    }
    
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    // add roundScore to the global score of the active player 

    scores[activePlayer] += roundScore;

    //Update the UI

    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Check if the activePlayer is winner or not
    if(scores[activePlayer] >= 20){
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
        gamePlaying = false;

    }else {
        nextPlayer();
    }

    }
   
});

document.querySelector('.btn-new').addEventListener('click', init); // When a user clicks on the new button to re-start a game 

// Function for the next player
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}

// Function when page loads initially 
function init(){

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}

