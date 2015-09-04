var Board = function()
{
  Board.COLOR = 0x27ae60;
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
