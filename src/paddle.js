var Paddle = function(y)
{
  Paddle.SPEED = 0.1;
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

Paddle.prototype.changeX = function(new_x)
{
  this.paddle.position.x += new_x;
}

Paddle.prototype.getX = function()
{
  return this.paddle.position.x;
}

Paddle.prototype.getY = function()
{
  return this.paddle.position.y;
}

Paddle.prototype.setX = function(x)
{
  this.paddle.position.x = x;
}
