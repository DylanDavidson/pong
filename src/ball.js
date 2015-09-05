var Ball = function()
{
  Ball.COLOR = 0x9b59b6;
  Ball.RADIUS = 0.5;
  this.geometry = new THREE.SphereGeometry(Ball.RADIUS);
  this.material = new THREE.MeshBasicMaterial({ color: Ball.COLOR });
  this.ball = new THREE.Mesh(this.geometry, this.material);
  this.ball.position.z = 1;
  this.ball.position.x = this.getStartPosition();

  base.addToScene(this.ball);
}

Ball.prototype.getStartPosition = function()
{
  var x = Math.random() * 5;
  if(Math.random() < 0.5)
  {
    x *= -1;
  }
  return x;
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

Ball.prototype.reset = function()
{
  this.ball.position.x = this.getStartPosition();
  this.ball.position.y = 0;
}
