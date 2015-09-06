// Dylan Davidson
// Pong - CAP 4720
//

// Object that maintains the score of the game and updates score on screen
var Score = function()
{
  this.playerScore = 0;
  this.enemyScore = 0;
  this.enemyScoreSpan = document.getElementById('enemy');
  this.playerScoreSpan = document.getElementById('player');
}

// Called when player scores
Score.prototype.playerScored = function()
{
  this.playerScore += 1;
  this.playerScoreSpan.innerText = this.playerScore;
}

// Called when enemy scores
Score.prototype.enemyScored = function()
{
  this.enemyScore += 1;
  this.enemyScoreSpan.innerText = this.enemyScore;
}
