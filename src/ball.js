var Ball = function()
{
  Ball.COLOR = 0x9b59b6;
  this.geometry = new THREE.SphereGeometry(0.5);
  this.material = new THREE.MeshBasicMaterial({ color: Ball.COLOR });
  this.ball = new THREE.Mesh(this.geometry, this.material);
  this.ball.position.z = 1;

  base.addToScene(this.ball);
}

Ball.prototype.getObject = function()
{
  return this.ball;
}

Ball.prototype.getX = function()
{
  return this.ball.position.x;
}

Ball.prototype.getY = function()
{
  return this.ball.position.y;
}

Ball.prototype.setX = function(x)
{
  this.ball.position.x = x;
}

Ball.prototype.setY = function(y)
{
  this.ball.position.y = y;
}

Ball.prototype.changeX = function(x)
{
  this.ball.position.x += x;
}

Ball.prototype.changeY = function(y)
{
  this.ball.position.y += y;
}
