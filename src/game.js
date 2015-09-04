var renderer;
var camera;

function createPlayBottom()
{
  var planeGeometry = new THREE.PlaneGeometry( 10, 20, 10, 10 );
  var planeMaterial = new THREE.MeshLambertMaterial({color: 0x4BD121});
  var plane = new THREE.Mesh( planeGeometry, planeMaterial );
  base.addToScene(plane);
}

function createBoundingWalls()
{
  var leftWall = new THREE.BoxGeometry( 1, 18, 5 );
  var wallMaterial = new THREE.MeshBasicMaterial({color:'yellow'});
  var wall1 = new THREE.Mesh( leftWall, wallMaterial );
  wall1.position.x = -5;
  base.addToScene( wall1 );

  var edges1 = new THREE.EdgesHelper( wall1, 0x5555555 );
  base.addToScene( edges1 );

  var rightWall = new THREE.BoxGeometry( 1, 18, 5 );
  var wall2 = new THREE.Mesh( rightWall, wallMaterial );
  wall2.position.x = 5;
  base.addToScene( wall2 );

  var edges2 = new THREE.EdgesHelper( wall2, 0x555555 );
  base.addToScene( edges2 );
}

var paddle1, paddle2;
function createPaddles()
{
  var opponentPaddle = new THREE.BoxGeometry( 2, .5, 3 );
  var paddleMaterial = new THREE.MeshBasicMaterial({color:'salmon'});
  paddle1 = new THREE.Mesh( opponentPaddle, paddleMaterial );
  paddle1.position.y = 9;
  base.addToScene( paddle1 );

  var edges1 = new THREE.EdgesHelper( paddle1, 0x000000 );
  base.addToScene( edges1 );

  var playerPaddle = new THREE.BoxGeometry( 2, .5, 3 );
  paddle2 = new THREE.Mesh( playerPaddle, paddleMaterial );
  paddle2.position.y = -9;
  base.addToScene( paddle2 );

  var edges2 = new THREE.EdgesHelper( paddle2, 0x000000 );
  base.addToScene( edges2 );
}

var ball;
function createBall()
{
  var ballSphere = new THREE.SphereGeometry( .5 );
  var ballMaterial = new THREE.MeshBasicMaterial({color:'blue'});
  ball = new THREE.Mesh( ballSphere, ballMaterial );
  base.addToScene( ball );
}

var xDir = .02;
var yDir = .04;
function moveBallAndMaintainPaddles()
{

  ball.position.x += xDir;
  ball.position.y += yDir;

  if( Key.isDown( Key.A ) )
  {
    paddle2.position.x -= 0.02;
  }
  else if( Key.isDown( Key.D ) )
  {
    paddle2.position.x += 0.02;
  }

  if( ball.position.x < -4 )
  {
    xDir = .02;
    three.play();
  }
  else if( ball.position.x > 4 )
  {
    xDir = -0.02;
    four.play();
  }

  if( ball.position.y < -8.5 && yDir < 0 )
  {
    yDir = 0.04;

    if( Math.abs( paddle2.position.x - ball.position.x ) <= 2 )
    {
      xDir = -xDir;
      one.play();
    }
    else
    {
      ball.position.x = ball.position.y = 0;
      explode.play();
    }
  }
  else if( ball.position.y > 8.5 && yDir > 0 )
  {
    yDir = -0.04;

    if( Math.abs( paddle1.position.x - ball.position.x ) <= 2 )
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

  paddle1.position.x = ball.position.x;
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

function init()
{
  loadSounds();
  base = new Base();

  // 1. show a plane representing the bottom of the pong table
  createPlayBottom();

  // 2. Create sideboards, which will be parallelapipeds
  createBoundingWalls();

  // 3. Create the paddles
  createPaddles();

  // 4 Create the ball
  createBall();

  // add spotlight for the shadows
  var spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.position.set( 10, 20, 20 );
  spotLight.shadowCameraNear = 20;
  spotLight.shadowCameraFar = 50;
  spotLight.castShadow = true;
  base.addToScene(spotLight);

  render();
}

function render()
{
  moveBallAndMaintainPaddles();
  requestAnimationFrame( render );
  base.render();
}

window.onload = init;
