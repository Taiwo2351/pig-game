let score, roundScore, activePlayer, gamePlaying;
init();



let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  if(gamePlaying){
    //  generate random number
  let diceRoll = Math.floor(Math.random() * 6)+ 1;

  // display the dice rolled
  pictureDisplay.style.display = "block"
 document.getElementById("dice-image").src= "img/" + "dice-" + diceRoll + ".png"; 
 
  // update the result
  if(diceRoll !== 1){
    //add score

    // document.querySelector(".name-" + activePlayer).innerHTML = "Your turn"
    roundScore += diceRoll;
    document.getElementById("roundscore-" + activePlayer).textContent = roundScore;
  }else{
    // next player
    nextPlayer();
  }
  }


}); 

document.getElementById("btn-hold").addEventListener("click", function(){

  if(gamePlaying){
     // add current score to global score
     score[activePlayer] += roundScore;

     // update the score in the UI
         document.getElementById("score-" + activePlayer).textContent = score[activePlayer];
    
     // check if the player win the game
     if (score[activePlayer] >= 50  ){
       document.querySelector(".name-" + activePlayer).innerHTML = "WINNER!!!"
       pictureDisplay.style.display = "none"
       document.querySelector(".name-" + activePlayer).classList.add("winner");
       document.querySelector(".name-" + activePlayer).classList.remove("active-player");
       gamePlaying = false;
     }else{
       nextPlayer();
     }
  }
 
  //next player

});

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  
  // // if and else statement
  // if (activePlayer === 0 ){
  //   activePlayer = 1
  // }else{
  //   activePlayer = 0
  // }

  roundScore = 0;
  document.getElementById("roundscore-0").textContent = 0;
  document.getElementById("roundscore-1").textContent = 0;
  document.querySelector(".name-0").classList.toggle("active-player");
  document.querySelector(".name-1").classList.toggle("active-player");
  pictureDisplay.style.display = "none"
};

document.getElementById("btn-new").addEventListener("click", init);
function init(){
  score =[0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.querySelector("#score-0").textContent = 0;
  document.querySelector("#score-1").textContent = 0;
  document.querySelector("#roundscore-0").textContent = 0;
  document.querySelector("#roundscore-1").textContent = 0;
  document.querySelector(".name-0").textContent = "Player 1"
  document.querySelector(".name-1").textContent = "Player 2"
  document.querySelector(".name-0").classList.remove("winner");
  document.querySelector(".name-1").classList.remove("winner");
  document.querySelector(".name-0").classList.add("active-player");
  pictureDisplay = document.querySelector("#display")
  pictureDisplay.style.display = "none";
}