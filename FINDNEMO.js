var score = 0; 
var lives = 5;
//starts game
onEvent("start_btn", "click", function(){
  setScreen("game_screen");
});
//sends user to lose screen
onEvent("gameBackdrop", "click", function(){
  setScreen("youLose_screen");
});

//restart after loss
onEvent("restartL_btn", "click", function(){
  setScreen("start_screen");
});
//restart after win
onEvent("restartW_btn", "click", function(){
  setScreen("game_screen");
});
//finding nemo
onEvent("nemo", "click", function(){
  score++;
  console.log("found nemo!");
  setText("countScore", "count: "+ score + " out of 5");
  setPosition("nemo", randomNumber(50,250), randomNumber(150,350));
  if (score == 5){
    //sends user to win screen aft
    setScreen("youWin_screen");
    score = 0;
    setText("countScore", "count: "+ score + " out of 5");
  }
});
//changes background and keeps track of lives after a loss
onEvent("gameBackdrop", "click", function (){
  lives--;
  setText("liveCount", lives + " lives remaining");
  if(lives == 0){
    setScreen("youLose_screen");
    lives = 5;
    setText("liveCount", + lives + "lives remaining");
  }
});
