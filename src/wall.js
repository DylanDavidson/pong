var Wall = function(x)
{
  Wall.COLOR = 0x2980b9;
  this.geometry = new THREE.BoxGeometry(1, 20, 4);
  this.material = new THREE.MeshBasicMaterial({ color: Wall.COLOR });
  this.wall = new THREE.Mesh(this.geometry, this.material);
  this.wall.position.z = 2;
  this.wall.position.x = x;

  base.addToScene(this.wall);
}

Wall.prototype.getObject = function()
{
  return this.wall;
}

Wall.prototype.getX = function()
{
  return this.wall.position.x;
}
