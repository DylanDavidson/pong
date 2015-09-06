// Dylan Davidson
// Pong - CAP 4720
//

// Class that creates and maintains the bottom of the Pong board
var Board = function()
{
  Board.COLOR = 0x27ae60;

  // Create the BoxGeometry and material and add to scene
  this.geometry = new THREE.BoxGeometry(13, 20, 10);
  this.material = new THREE.MeshBasicMaterial({ color: Board.COLOR });
  this.board = new THREE.Mesh(this.geometry, this.material);

  this.board.position.z = -5;

  base.addToScene(this.board)
}

Board.prototype.getObject = function()
{
  return this.board;
}
