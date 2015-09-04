var xDir = .02;
var yDir = .04;
function moveBallAndMaintainPaddles()
{
  ball.changeX(xDir);
  ball.changeY(yDir);

  if( ball.getX() < -4 )
  {
    xDir = .02;
    three.play();
  }
  else if( ball.getX() > 4 )
  {
    xDir = -0.02;
    four.play();
  }

  if( ball.getY() < -8.5 && yDir < 0 )
  {
    yDir = 0.04;

    if( Math.abs( player_paddle.getX() - ball.getX() ) <= 2 )
    {
      xDir = -xDir;
      one.play();
    }
    else
    {
      ball.setX(0);
      ball.setY(0);

      explode.play();
    }
  }
  else if( ball.getY() > 8.5 && yDir > 0 )
  {
    yDir = -0.04;

    if( Math.abs( enemy_paddle.getX() - ball.getX() ) <= 2 )
    {
      xDir = -xDir;
      two.play();
    }
    else
    {
      ball.position.x = ball.position.y = 0;
      explode.play();
    }
  }

  enemy_paddle.setX(ball.getX());
}

var explode, one, two, three, four, five;
function loadSounds()
{
  explode = new Audio("/assets/Explosion.mp3");
  one = new Audio("/assets/1.mp3");
  two = new Audio("/assets/2.mp3");
  three = new Audio("/assets/3.mp3");
  four = new Audio("/assets/4.mp3");
  five = new Audio("/assets/5.mp3");
}

var base;
var board;
var left_wall;
var right_wall;
var player_paddle;
var enemy_paddle;
var ball;

function init()
{
  loadSounds();
  base = new Base();

  // Create Play Board
  board = new Board();
  var board_edge = new Edge(board);

  // Create Walls
  left_wall = new Wall(-6);
  right_wall = new Wall(6);

  // Wall edges
  new Edge(right_wall);
  new Edge(left_wall);

  // Create Paddles
  player_paddle = new Paddle(-9.5);
  enemy_paddle = new Paddle(9.5);

  new Edge(player_paddle);
  new Edge(enemy_paddle);

  // Create Ball
  ball = new Ball();
  new Edge(ball);

  render();
}

function listenForKeyboard()
{
  if(Key.isDown(Key.A) || Key.isDown(Key.LEFT_ARROW))
  {
    player_paddle.changeX(Paddle.SPEED * -1);
  }
  else if(Key.isDown(Key.D) || Key.isDown(Key.RIGHT_ARROW))
  {
    player_paddle.changeX(Paddle.SPEED);
  }
}

function checkPlayerWallCollision()
{
  if((player_paddle.getX() - Paddle.WIDTH) < left_wall.getX())
  {
    player_paddle.setX(left_wall.getX() + Paddle.WIDTH);
  }
  else if((player_paddle.getX() + Paddle.WIDTH) > right_wall.getX())
  {
    player_paddle.setX(right_wall.getX() - Paddle.WIDTH);
  }

}

function render()
{
  listenForKeyboard();
  checkPlayerWallCollision();
  moveBallAndMaintainPaddles();

  requestAnimationFrame(render);
  base.render();
}

window.onload = init;
