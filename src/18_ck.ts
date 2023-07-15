import * as utils from '@dcl/ecs-scene-utils'

export function createCKScene() {

const ck_scene = new Entity('ck_scene');
engine.addEntity(ck_scene);
ck_scene.addComponent(new Transform({
    position: new Vector3(19, -.095, 272.6),
    rotation: Quaternion.Euler(0, 180, 0),
    scale: new Vector3(1, 1, 1)
  }));




/// VIDEO SCREEN

// VideoClip
const ckVideoClip = new VideoClip(
  'https://player.vimeo.com/external/842697301.m3u8?s=06c8c2dea61d8ec5533aa6d9f5454dd75534beee'
);

// VideoTexture
const ckVideoTexture = new VideoTexture(ckVideoClip);

// Video Material
const ckMaterial = new Material();
ckMaterial.albedoTexture = ckVideoTexture;
ckMaterial.roughness = 1;
ckMaterial.specularIntensity = 0;
ckMaterial.metallic = 0;
ckMaterial.albedoColor = new Color4(1, 1, 1, 1);



// Video Entity East Wall
const ckscreen1 = new Entity();
ckscreen1.setParent(ck_scene);
ckscreen1.addComponent(new PlaneShape());
ckscreen1.addComponent(
  new Transform({
    position: new Vector3(15.0, 13.95, 6.8424248695373535),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(11.6, 11.6, 3.101372718811035)
  })
);
ckscreen1.addComponent(ckMaterial);
engine.addEntity(ckscreen1);


// Video Entity North Wall
const ckscreen2 = new Entity();
ckscreen2.setParent(ck_scene);
ckscreen2.addComponent(new PlaneShape());
ckscreen2.addComponent(
  new Transform({
    position: new Vector3(9.2, 13.95, 12.635),
    rotation: Quaternion.Euler(0, 180, 0),
    scale: new Vector3(11.6, 11.6, 3.101372718811035)
  })
);
ckscreen2.addComponent(ckMaterial);
engine.addEntity(ckscreen2);


// Video Entity South Wall
const ckscreen3 = new Entity();
ckscreen3.setParent(ck_scene);
ckscreen3.addComponent(new PlaneShape());
ckscreen3.addComponent(
  new Transform({
    position: new Vector3(9.2, 13.95, 1.15),
    rotation: Quaternion.Euler(0, -180, 0),
    scale: new Vector3(11.6, 11.6, 3.101372718811035)
  })
);
ckscreen3.addComponent(ckMaterial);
engine.addEntity(ckscreen3);


// Video Entity West Wall
const ckscreen4 = new Entity();
ckscreen4.setParent(ck_scene);
ckscreen4.addComponent(new PlaneShape());
ckscreen4.addComponent(
  new Transform({
    position: new Vector3(3.48, 13.95, 6.8424248695373535),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(11.6, 11.6, 3.101372718811035)
  })
);
ckscreen4.addComponent(ckMaterial);
engine.addEntity(ckscreen4);


// Video Entity Top Wall
const ckscreen5 = new Entity();
ckscreen5.setParent(ck_scene);
ckscreen5.addComponent(new PlaneShape());
ckscreen5.addComponent(
  new Transform({
    position: new Vector3(9.2, 19.5, 6.8424248695373535),
    rotation: Quaternion.Euler(90, 90, 0),
    scale: new Vector3(11.6, 11.6, 3.101372718811035)
  })
);
ckscreen5.addComponent(ckMaterial);
engine.addEntity(ckscreen5);

// Video Play Function
ckVideoTexture.volume = 0.5;
ckVideoTexture.loop = true;
//ckVideoTexture.play()


const ckcubefinal = new Entity('meshfinal');
engine.addEntity(ckcubefinal);
ckcubefinal.setParent(ck_scene);
ckcubefinal.addComponent(new Transform({
    position: new Vector3(7.464935302734375, 0, 8.688339233398438),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  }));
ckcubefinal.addComponent(new GLTFShape("models/ck-mesh.glb"));





/*
///// Particle system


// Particles


@Component('particle')
class Particle {
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

const particleGroup = engine.getComponentGroup(Particle)

class ParticleSystem {
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
    position: new Vector3(9.198, 7.95, 6.6905),
    rotation: Quaternion.Euler(0, 0, 0)
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

*/


// Trigger box

// Create TriggerBox for audio to play only inside the cube

const cktrigger = new Entity();
cktrigger.addComponent(new BoxShape());
cktrigger.getComponent(BoxShape).withCollisions = false;
cktrigger.getComponent(BoxShape).visible = false;


cktrigger.addComponent(new Transform({
  position: new Vector3(9.7, -.095, 265.6)
}));

let ckTrigger = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

cktrigger.addComponent(
  new utils.TriggerComponent(
    ckTrigger,
    {
      onCameraEnter : () => {
        log('play ck video')
        ckVideoTexture.play()

      },
      onCameraExit : () => {
        log('stop ck video')
        ckVideoTexture.playing = false;

    },

  //enableDebug: true
      }
  )
);
log('added ck triggerbox');
engine.addEntity(cktrigger)
    }
