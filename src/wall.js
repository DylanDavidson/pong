var WALL_COLOR = 'yellow';

var Wall = function(x)
{
  this.geometry = new THREE.BoxGeometry(1, 18, 5);
  this.material = new THREE.MeshBasicMaterial({ color: WALL_COLOR });
  this.wall = new THREE.Mesh(this.geometry, this.material);
  this.wall.position.x = x;
}

Wall.prototype.getObject = function()
{
  return this.wall;
}
