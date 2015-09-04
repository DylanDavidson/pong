var PADDLE_COLOR = 'salmon';

var Paddle = function(y)
{
  this.geometry = new THREE.BoxGeometry(2, .5, 3);
  this.material = new THREE.MeshBasicMaterial({ color: PADDLE_COLOR });
  this.paddle = new THREE.Mesh(this.geometry, this.material);
  this.paddle.position.y = y;
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

Paddle.prototype.setX = function(x)
{
  this.paddle.position.x = x;
}
