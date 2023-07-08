import * as utils from '@dcl/ecs-scene-utils'

@Component('particle')
export class Particle {
  life = Math.random()
  seed = Math.random() * this.width
  xOffset = utils.map(Math.random(), 0, 1, -this.length, this.length)
  zOffset = utils.map(Math.random(), 0, 1, -this.width, this.width)
  constructor(
    public width: number,
    public length: number,
    public height: number,
    public speed: number,
    public parentTransform: Entity,
    public curEntity: Entity
  ) {}
}

export const particleGroup = engine.getComponentGroup(Particle)

export class ParticleSystem {
  update(dt: number) {
    for (const entity of particleGroup.entities) {
      const particle = entity.getComponent(Particle)
      const transform = entity.getComponent(Transform)

      particle.life += dt * particle.speed // Particle speed
      particle.life %= 1 // Reset particle life

      transform.position.set(particle.xOffset, particle.life * particle.height, particle.zOffset)
      entity.setParent(particle.parentTransform) // Transform particles using parent's transform
    }
  }
}

// Setup particles
const particles: Entity[] = []
const shape = new BoxShape()
const material = new Material()
material.metallic = 1
material.albedoColor = new Color4(0.5, 1.5, 2, 1)
material.emissiveColor = Color3.Teal()
material.emissiveIntensity = 100
shape.withCollisions = false

// Position particles with a
const particleTransform = new Entity()
particleTransform.addComponent(
  new Transform({
    position: new Vector3(9.7, 7.95, 265.6),
    rotation: Quaternion.Euler(0, 0, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(particleTransform)

// Initialise particles
const MAX_PARTICLES = 200

for (let i = 0; i < MAX_PARTICLES; i++) {
  const particle = new Entity()
  particle.addComponent(shape)
  particle.addComponent(material)
  const particleComponent = new Particle(5.7, 5.7, 12, 0.015, particleTransform, particle)

  particle.addComponent(particleComponent)
  particle.addComponent(
    new Transform({
      rotation: Quaternion.Euler(0, 90, 0),
      scale: new Vector3(0.01, 0.01, 0.01),
      position: new Vector3(
        particleComponent.xOffset,
        particleComponent.life * particleComponent.height,
        particleComponent.zOffset
      )
    })
  )
  particle.setParent(particleTransform)
  engine.addEntity(particle)
  particles.push(particle)
}

engine.addSystem(new ParticleSystem())
