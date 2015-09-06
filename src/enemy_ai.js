var EnemyAI = function(enemy, ball)
{
  EnemyAI.SPEED = Paddle.SPEED;
  EnemyAI.BEGINNER = 1.10;
  EnemyAI.INTERMEDIATE = 1.13;
  EnemyAI.EXPERT = 1.19;
  this.enemy = enemy;
  this.ball = ball;
  this.speed = EnemyAI.SPEED;
}

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
