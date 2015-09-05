var BallPhysics = function()
{
  BallPhysics.FAST_SPEED = 0.15;
  BallPhysics.SLOW_SPEED = 0.10;
  BallPhysics.START_X_VELOCITY = BallPhysics.SLOW_SPEED;
  BallPhysics.START_Y_VELOCITY = 0.2;
  this.xVelocity = BallPhysics.START_X_VELOCITY;
  this.yVelocity = BallPhysics.START_Y_VELOCITY;
  this.goal = false;

  // Sometime start in different X direction
  if(Math.random() < 0.5)
  {
    this.xVelocity *= -1;
  }
}


BallPhysics.prototype.checkWallCollision = function()
{
  if(ball.getX() + 1 > right_wall.getX() || ball.getX() - 1 < left_wall.getX())
  {
    this.xVelocity *= -1;
    three.play();
  }
}

BallPhysics.prototype.handlePaddleCollision = function(paddle)
{
  if(ball.getX() < paddle.getX() - 0.5)
  {
    this.xVelocity = -1 * BallPhysics.FAST_SPEED;
  }
  else if(ball.getX() < paddle.getX())
  {
    this.xVelocity = -1 * BallPhysics.SLOW_SPEED;
  }
  else if(ball.getX() > paddle.getX() + 0.5)
  {
    this.xVelocity = BallPhysics.FAST_SPEED;
  }
  else
  {
    this.xVelocity = BallPhysics.SLOW_SPEED;
  }
  this.yVelocity *= -1;
}


BallPhysics.prototype.checkPaddleCollision = function()
{
  // Ball has reached player paddle area
  if(ball.getY() - Ball.RADIUS < player_paddle.getY())
  {
    // Paddle is in position to block ball
    if(ball.getX() > player_paddle.getX() - 1.3 && ball.getX() < player_paddle.getX() + 1.3)
    {
      this.handlePaddleCollision(player_paddle);
      one.play();
    }
    else
    {
      // Enemy scored
      score.enemyScored();
      Banner.flashText('Goal!', '#e74c3c');
      this.reset();
    }
  }
  else if(ball.getY() + Ball.RADIUS > enemy_paddle.getY())
  {
    // Enemy in positon to block ball
    if(ball.getX() > enemy_paddle.getX() - 1.3 && ball.getX() < enemy_paddle.getX() + 1.3)
    {
      this.yVelocity *= -1;
      two.play();
    }
    else
    {
      // Player scored
      score.playerScored();
      Banner.flashText('Goal!', '#2ecc71');
      this.reset();
    }
  }
}

BallPhysics.prototype.update = function()
{
  if(!this.goal)
  {
    ball.changeX(this.xVelocity);
    ball.changeY(this.yVelocity);
    // Speed up ball slowly each second
    this.yVelocity *= 1.001;

    this.checkWallCollision();
    this.checkPaddleCollision();
  }
}

BallPhysics.prototype.endGoal = function()
{
  this.goal = false;
  Banner.hideBanner();
}

BallPhysics.prototype.reset = function()
{
  ball.reset();
  this.xVelocity = BallPhysics.START_X_VELOCITY;
  this.yVelocity = BallPhysics.START_Y_VELOCITY;
  this.goal = true;

  var _this = this;
  setTimeout(function() { _this.endGoal() }, 2000);
}
