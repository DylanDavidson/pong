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
var ballPhysics;
var enemyAI;
var score;

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

  ballPhysics = new BallPhysics();
  enemyAI = new EnemyAI(enemy_paddle, ball);

  score = new Score();

  base.render();
}

var count = 3;
function start()
{
  document.getElementById('menu').remove();
  countdown();
}

function countdown()
{
  if(count <= 0)
   {
     Banner.hideBanner();
     render(); // Officially start game
   }
   else
   {
     Banner.showText(count);
     count -= 1;
     setTimeout(countdown, 1000);
   }
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

  ballPhysics.update();
  enemyAI.update();

  requestAnimationFrame(render);
  base.render();
}

window.onload = init;
