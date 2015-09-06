// Dylan Davidson
// Pong - CAP 4720
//

// Creates a paddle, takes in starting y position
var Paddle = function(y)
{
  Paddle.SPEED = 0.11; // How fast the paddle moves
  Paddle.COLOR = 0x2c3e50;
  Paddle.WIDTH = 2;

  this.geometry = new THREE.BoxGeometry(Paddle.WIDTH, .5, 1);
  this.material = new THREE.MeshBasicMaterial({ color: Paddle.COLOR });
  this.paddle = new THREE.Mesh(this.geometry, this.material);

  this.paddle.position.z = 1;
  this.paddle.position.y = y;

  base.addToScene(this.paddle)
}


Paddle.prototype.getObject = function()
{
  return this.paddle;
}

// Moves paddle based on input
Paddle.prototype.changeX = function(new_x)
{
  this.paddle.position.x += new_x;
}

// Returns x value of paddle
Paddle.prototype.getX = function()
{
  return this.paddle.position.x;
}

// Returns y value of paddle
Paddle.prototype.getY = function()
{
  return this.paddle.position.y;
}

// Sets x value of paddle
Paddle.prototype.setX = function(x)
{
  this.paddle.position.x = x;
}
