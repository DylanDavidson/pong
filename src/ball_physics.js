var BallPhysics = function()
{
  BallPhysics.START_X_VELOCITY = 0.05;
  BallPhysics.START_Y_VELOCITY = -0.2;
  this.xVelocity = BallPhysics.START_X_VELOCITY;
  this.yVelocity = BallPhysics.START_Y_VELOCITY;
}


BallPhysics.prototype.checkWallCollision = function()
{
  if(ball.getX() + 1 > right_wall.getX() || ball.getX() - 1 < left_wall.getX())
  {
    this.xVelocity *= -1;
    three.play();
  }
}

BallPhysics.prototype.checkPaddleCollision = function()
{
  // Ball has reached player paddle area
  if(ball.getY() - Ball.RADIUS < player_paddle.getY())
  {
    // Paddle is in position to block ball
    if(ball.getX() > player_paddle.getX() - 1 && ball.getX() < player_paddle.getX() + 1)
    {
      this.yVelocity *= -1;
      one.play();
    }
    else
    {
      // Enemy scored
      score.enemyScored();
      this.reset();
    }
  }
  else if(ball.getY() + Ball.RADIUS > enemy_paddle.getY())
  {
    // Enemy in positon to block ball
    if(ball.getX() > enemy_paddle.getX() - 1 && ball.getX() < enemy_paddle.getX() + 1)
    {
      this.yVelocity *= -1;
      two.play();
    }
    else
    {
      // Player scored
      score.playerScored();
      this.reset();
    }
  }
}

BallPhysics.prototype.update = function()
{
  ball.changeX(this.xVelocity);
  ball.changeY(this.yVelocity);

  this.checkWallCollision();
  this.checkPaddleCollision();

}

BallPhysics.prototype.reset = function()
{
  ball.reset();
  this.xVelocity = BallPhysics.START_X_VELOCITY;
  this.yVelocity = BallPhysics.START_Y_VELOCITY;
}
