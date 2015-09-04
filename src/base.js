// Constants

// Colors
var BLACK = 0;
var OPAQUE_ALPHA = 1.0;

// Dimensions
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

// Renderer Constants
var ENABLE_SHADOW_MAPS = true;

// Camera Constants
var FOV = 45;
var ASPECT_RATIO = WIDTH / HEIGHT;
var NEAR_FRUSTRUM = 0.1;
var FAR_FRUSTRUM = 1000;

var Base = function()
{
  this.scene = new THREE.Scene();
  this.renderer = new THREE.WebGLRenderer();
  this.camera = new THREE.PerspectiveCamera(FOV, ASPECT_RATIO, NEAR_FRUSTRUM, FAR_FRUSTRUM);

  this.setupRenderer();
  this.setupCamera();
}

// Returns the scene object
Base.prototype.getScene = function()
{
  return this.scene;
}

// Adds given object to the scene
Base.prototype.addToScene = function(object)
{
  this.scene.add(object);
}

// Called every frame to render the scene
Base.prototype.render = function()
{
  this.renderer.render(this.scene, this.camera);
}

Base.prototype.setCameraPosition = function(x, y, z)
{
  this.camera.position.x = x;
  this.camera.position.y = y;
  this.camera.position.z = z;
}

// Sets the default values for the renderer and adds to page
Base.prototype.setupRenderer = function()
{
  this.renderer.setClearColor(BLACK, OPAQUE_ALPHA);
  this.renderer.setSize(WIDTH, HEIGHT);
  this.renderer.shadowMapEnabled = ENABLE_SHADOW_MAPS;

  // Adds renderer to the page
  document.body.appendChild(this.renderer.domElement);
}

Base.prototype.setupCamera = function()
{
  this.setCameraPosition(0, 0, 30);
  this.camera.lookAt(this.scene.position);

  this.addToScene(this.camera);
}
