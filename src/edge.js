// Dylan Davidson
// Pong - CAP 4720
//

// Adds edgehelper to passed in object
var Edge = function(object)
{
  this.edge = new THREE.EdgesHelper(object.getObject(), 0);
  base.addToScene(this.edge);
}

Edge.prototype.getObject = function()
{
  return this.edge;
}
