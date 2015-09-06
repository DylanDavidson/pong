var Particle = function(x, y, z, color)
{
  Particle.COUNT = 700;
  this.x = x;
  this.y = y;
  this.z = z;
  this.geometry = new THREE.Geometry();
  this.material = new THREE.ParticleBasicMaterial({ color: color, size: 1 });
  this.stopped = false;

  for(var i = 0; i < Particle.COUNT; i++)
  {
    var particle = new THREE.Vector3(this.x, this.y, this.z);

    var velocity = [Math.random() * 0.7, Math.random() * 0.7, Math.random() * 0.7];
    for(var j = 0; j < velocity.length; j++)
    {
      if(Math.random() < 0.5)
      {
        velocity[j] *= -1;
      }
    }
    particle.velocity = new THREE.Vector3(velocity[0], velocity[1], velocity[2]);
    this.geometry.vertices.push(particle);
  }

  this.particles = new THREE.ParticleSystem(this.geometry, this.material)

  base.addToScene(this.particles);

}

Particle.prototype.update = function()
{
  if(this.stopped)
  {
    return;
  }

  for(var i = 0; i < Particle.COUNT; i++)
  {
    var particle = this.geometry.vertices[i];
    particle.x += particle.velocity.x;
    particle.y += particle.velocity.y;
    particle.z += particle.velocity.z;
  }
  this.particles.geometry.verticesNeedUpdate = true;
}

Particle.prototype.stop = function()
{
  this.stopped = true;
}
