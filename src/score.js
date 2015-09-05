var Score = function()
{
  this.playerScore = 0;
  this.enemyScore = 0;
  this.enemyScoreSpan = document.getElementById('enemy');
  this.playerScoreSpan = document.getElementById('player');
}

Score.prototype.playerScored = function()
{
  this.playerScore += 1;
  this.playerScoreSpan.innerText = this.playerScore;
}

Score.prototype.enemyScored = function()
{
  this.enemyScore += 1;
  this.enemyScoreSpan.innerText = this.enemyScore;
}

