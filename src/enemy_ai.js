// Dylan Davidson
// Pong - CAP 4720
//

// Object that determined where to move enemy paddle based on ball position
var EnemyAI = function(enemy, ball)
{
  EnemyAI.SPEED = Paddle.SPEED;
  EnemyAI.BEGINNER = 1; // Speed multiplier for Beginner difficulty
  EnemyAI.INTERMEDIATE = 1.13; // Speed multiplier for Intermediate difficulty
  EnemyAI.EXPERT = 1.16; // Speed multiplier for Expert difficulty

  this.enemy = enemy;
  this.ball = ball;
  this.speed = EnemyAI.SPEED;
}

// Adds multiplier to paddle speed based on difficulty
EnemyAI.prototype.setDifficulty = function(difficulty)
{
  if(difficulty == 1)
  {
    this.speed *= EnemyAI.BEGINNER;
  }
  else if(difficulty == 2)
  {
    this.speed *= EnemyAI.INTERMEDIATE;
  }
  else
  {
    this.speed *= EnemyAI.EXPERT;
  }
}

// Called each frame to update enemy position
EnemyAI.prototype.update = function()
{
  if(this.ball.getX() > this.enemy.getX())
  {
    this.enemy.changeX(this.speed);
  }
  else
  {
    this.enemy.changeX(-1 * this.speed);
  }
}
