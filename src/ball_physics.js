// Dylan Davidson
// Pong - CAP 4720
//

// Object that updates ball position on state of scene
var BallPhysics = function()
{
  // Fast X speed when ball is hit on side of paddle
  BallPhysics.FAST_SPEED = 0.15;
  // Slower X speed when ball is hit in middle of paddle
  BallPhysics.SLOW_SPEED = 0.10;
  BallPhysics.START_X_VELOCITY = BallPhysics.SLOW_SPEED;
  BallPhysics.START_Y_VELOCITY = 0.2;

  this.xVelocity = BallPhysics.START_X_VELOCITY;
  this.yVelocity = BallPhysics.START_Y_VELOCITY;
  this.stopped = false;

  // Sometime start in different X direction
  if(Math.random() < 0.5)
  {
    this.xVelocity *= -1;
  }
}

// Checks if ball has hit a wall, and turns it around if it has
BallPhysics.prototype.checkWallCollision = function()
{
  if(ball.getX() + 1 > right_wall.getX() || ball.getX() - 1 < left_wall.getX())
  {
    this.xVelocity *= -1;
    three.play();
  }
}

// Handles when ball has hit paddle, and determines new xVelocity based on where it was hit
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


// Checks if ball has hit paddle or passed it and player has scored
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
      particles = new Particle(ball.getX(), ball.getY(), 1, '#e74c3c');
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
      particles = new Particle(ball.getX(), ball.getY(), 1, '#2ecc71');
      this.reset();
    }
  }
}

// Called each frame to update ball position and velocity
BallPhysics.prototype.update = function()
{
  if(!this.stopped)
  {
    ball.changeX(this.xVelocity);
    ball.changeY(this.yVelocity);
    // Speed up ball slowly each second
    this.yVelocity *= 1.001;

    this.checkWallCollision();
    this.checkPaddleCollision();
  }
}

// Called to stop showing goal banner and start moving ball again
BallPhysics.prototype.endGoal = function()
{
  this.stopped = false;
  Banner.hideBanner();
  particles.stop();
}

// Called after score to move ball to center of board and setup end goal timeout
BallPhysics.prototype.reset = function()
{
  ball.reset();
  this.xVelocity = BallPhysics.START_X_VELOCITY;
  this.yVelocity = BallPhysics.START_Y_VELOCITY;
  this.stopped = true;

  var _this = this;
  setTimeout(function() { _this.endGoal() }, 2000);
}
