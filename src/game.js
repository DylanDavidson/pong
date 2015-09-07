// Dylan Davidson
// Pong - CAP 4720
//

var explode, one, two, three, four, five;
// Load Audio assets
function loadSounds()
{
  explode = new Audio("assets/Explosion.mp3");
  one = new Audio("assets/1.mp3");
  two = new Audio("assets/2.mp3");
  three = new Audio("assets/3.mp3");
  four = new Audio("assets/4.mp3");
  five = new Audio("assets/5.mp3");
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
var particles;

// Setup objects on scene in inital position and store for global access
function init()
{
  loadSounds();
  // Base maintains the scene, camera, renderer and lighting
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

  // Paddle edges
  new Edge(player_paddle);
  new Edge(enemy_paddle);

  // Create Ball with edge
  ball = new Ball();
  new Edge(ball);

  // Object that maintains ball position and velocity
  ballPhysics = new BallPhysics();

  // Object that controls enemy paddle and responds to ball
  enemyAI = new EnemyAI(enemy_paddle, ball);

  // Object that maintains the score for the game
  score = new Score();

  base.render();
}

var count = 3;
// Starts the countdown for the game and hides menu
function start(difficulty)
{
  // Hide menu
  document.getElementById('menu').style.display = "none";
  // Update difficulty based on user choice
  enemyAI.setDifficulty(difficulty);
  countdown();
}

// Called to show the next digit on screen during countdown, and starts game when 0 is reached
function countdown()
{
  // Count has hit 0, start the game!
  if(count <= 0)
   {
     Banner.hideBanner();
     render(); // Officially start game
   }
   else
   {
     // Show the new number and call this again in 1 second
     Banner.showText(count);
     count -= 1;
     setTimeout(countdown, 1000);
   }
}

// Listens for keyboard input and moves player
function listenForKeyboard()
{
  // A or <-, move left
  if(Key.isDown(Key.A) || Key.isDown(Key.LEFT_ARROW))
  {
    player_paddle.changeX(Paddle.SPEED * -1);
  }
  // D or ->, move right
  else if(Key.isDown(Key.D) || Key.isDown(Key.RIGHT_ARROW))
  {
    player_paddle.changeX(Paddle.SPEED);
  }
}

// Prevents player from enetering the walls
function checkPlayerWallCollision()
{
  // If player has gone too far left, reset at edge of wall
  if((player_paddle.getX() - Paddle.WIDTH) < left_wall.getX())
  {
    player_paddle.setX(left_wall.getX() + Paddle.WIDTH);
  }
  else if((player_paddle.getX() + Paddle.WIDTH) > right_wall.getX())
  {
    player_paddle.setX(right_wall.getX() - Paddle.WIDTH);
  }
}

// Called each frame to check for input, and update the screen
function render()
{
  listenForKeyboard();
  checkPlayerWallCollision();

  ballPhysics.update();
  enemyAI.update();

  if(particles != null)
  {
    particles.update();
  }

  requestAnimationFrame(render);
  base.render();
}

window.onload = init;
