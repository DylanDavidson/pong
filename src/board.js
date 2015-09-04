var PLANE_COLOR = 0x4BD121;

var Board = function()
{
  this.geometry = new THREE.PlaneGeometry(10, 20, 10, 10);
  this.material = new THREE.MeshLambertMaterial({ color: PLANE_COLOR });
  this.plane = new THREE.Mesh(this.geometry, this.material);
}

Board.prototype.getObject = function()
{
  return this.plane;
}
