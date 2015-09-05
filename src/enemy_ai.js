var EnemyAI = function(enemy, ball)
{
  EnemyAI.SPEED = Paddle.SPEED * 1.15;
  this.enemy = enemy;
  this.ball = ball;
}

EnemyAI.prototype.update = function()
{
  if(this.ball.getX() > this.enemy.getX())
  {
    this.enemy.changeX(EnemyAI.SPEED);
  }
  else
  {
    this.enemy.changeX(-1 * EnemyAI.SPEED);
  }
}
