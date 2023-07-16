import * as utils from '@dcl/ecs-scene-utils';


export function createMicahScene() {

    // for cube 22
// Add the Cube.glb model
const micahbaseScene = new Entity();
engine.addEntity(micahbaseScene);


const micahcubeTransform = new Transform({
  position: new Vector3(47.93, -0.175, 300.5),
  rotation: Quaternion.Euler(0, -90, 0)
});
micahbaseScene.addComponent(micahcubeTransform);

// Add the Walls1.glb model
const wallsScene = new Entity();
wallsScene.setParent(micahbaseScene)
engine.addEntity(wallsScene);

const wallsModelShape = new GLTFShape("models/Walls1.glb");
wallsScene.addComponent(wallsModelShape);

const wallsTransform = new Transform({
  position: new Vector3(8, 0, 8),
});
wallsScene.addComponent(wallsTransform);

// Dancer1.glb with Animation1
const dancer1 = new Entity()
dancer1.setParent(micahbaseScene)
engine.addEntity(dancer1)

dancer1.addComponent(new GLTFShape("models/Dancer1.glb"))
dancer1.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))

let animator1 = new Animator()
dancer1.addComponent(animator1)

let clip1 = new AnimationState("Animation1")
animator1.addClip(clip1)


// Dancer2.glb with Animation2
const dancer2 = new Entity()
dancer2.setParent(micahbaseScene)
engine.addEntity(dancer2)

dancer2.addComponent(new GLTFShape("models/Dancer2.glb"))
dancer2.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))

let animator2 = new Animator()
dancer2.addComponent(animator2)

let clip2 = new AnimationState("Animation2")
animator2.addClip(clip2)


// Dancer3.glb with Animation3
const dancer3 = new Entity()
dancer3.setParent(micahbaseScene)
engine.addEntity(dancer3)

dancer3.addComponent(new GLTFShape("models/Dancer3.glb"))
dancer3.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))

let animator3 = new Animator()
dancer3.addComponent(animator3)

let clip3 = new AnimationState("Animation3")
animator3.addClip(clip3)


// Dancer4.glb with Animation4
const dancer4 = new Entity()
dancer4.setParent(micahbaseScene)
engine.addEntity(dancer4)

dancer4.addComponent(new GLTFShape("models/Dancer4.glb"))
dancer4.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))

let animator4 = new Animator()
dancer4.addComponent(animator4)

let clip4 = new AnimationState("Animation4")
animator4.addClip(clip4)


// Dancer5.glb with Animation5
const dancer5 = new Entity()
dancer5.setParent(micahbaseScene)
engine.addEntity(dancer5)

dancer5.addComponent(new GLTFShape("models/Dancer5.glb"))
dancer5.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))

let animator5 = new Animator()
dancer5.addComponent(animator5)

let clip5 = new AnimationState("Animation5")
animator5.addClip(clip5)


// Dancer6.glb with Animation6
const dancer6 = new Entity()
dancer6.setParent(micahbaseScene)
engine.addEntity(dancer6)

dancer6.addComponent(new GLTFShape("models/Dancer6.glb"))
dancer6.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))

let animator6 = new Animator()
dancer6.addComponent(animator6)

let clip6 = new AnimationState("Animation6")
animator6.addClip(clip6)


// Dancer7.glb with Animation7
const dancer7 = new Entity()
dancer7.setParent(micahbaseScene)
engine.addEntity(dancer7)

dancer7.addComponent(new GLTFShape("models/Dancer7.glb"))
dancer7.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))

let animator7 = new Animator()
dancer7.addComponent(animator7)

let clip7 = new AnimationState("Animation7")
animator7.addClip(clip7)



// ... Rest of your dancers and other models ...

// Dancer8.glb with Animation8
const dancer8 = new Entity()
dancer8.setParent(micahbaseScene)
engine.addEntity(dancer8)

dancer8.addComponent(new GLTFShape("models/Dancer8.glb"))
dancer8.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))

let animator8 = new Animator()
dancer8.addComponent(animator8)

let clip8 = new AnimationState("Animation8")
animator8.addClip(clip8)


// Create a new entity to represent the audio source
//const audioEntity = new Entity();
//engine.addEntity(audioEntity);

// Set the entity's position (optional, only needed if you want the sound to have a position in the scene)
//micahbaseScene.addComponent(new Transform({ position: new Vector3(8, 8, 8) }));

// Create an AudioClip component, using the path to the audio file
const micahclip = new AudioClip("sounds/GlitchAudio1.mp3");

// Create an AudioSource component, using the AudioClip
const micahsource = new AudioSource(micahclip);

// Add the AudioSource component to the entity
micahbaseScene.addComponent(micahsource);

// Set the volume to 85%
micahsource.volume = 0.85;

// Start playing the audio


// Set the audio to loop
micahsource.loop = true;

// Add the Plants.glb model
const plantsScene = new Entity();
plantsScene.setParent(micahbaseScene)
engine.addEntity(plantsScene);

const plantsModelShape = new GLTFShape("models/Plants.glb");
plantsScene.addComponent(plantsModelShape);

const plantsTransform = new Transform({
  position: new Vector3(8, 0, 8),
});
plantsScene.addComponent(plantsTransform);



// Create trigger box
// Trigger box 

// Create TriggerBox for audio to play only inside the cube

const micahtrigger = new Entity();
micahtrigger.addComponent(new BoxShape());
micahtrigger.getComponent(BoxShape).withCollisions = false;
micahtrigger.getComponent(BoxShape).visible = false;


micahtrigger.addComponent(new Transform({
  position: new Vector3(41.75, 0, 310),
  rotation: Quaternion.Euler(0, -90, 0)
}));

let micahTrigger = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

micahtrigger.addComponent(
  new utils.TriggerComponent(
    micahTrigger,
    {
      onCameraEnter : () => {
        log('trigger micah scene'),
        clip1.play(true),
        clip2.play(true),
        clip3.play(true),
        clip4.play(true),
        clip5.play(true),
        clip6.play(true),
        clip7.play(true),
        clip8.play(true),
        micahsource.playing = true;
        
      },
      onCameraExit : () => {
        log('stop micah scene'),
        clip1.playing = false,
        clip2.playing = false,
        clip3.playing = false,
        clip4.playing = false,
        clip5.playing = false,
        clip6.playing = false,
        clip7.playing = false,
        clip8.playing = false,
        micahsource.playing = false;
        
    },

  //enableDebug: true
      }
  )
);
log('added micah triggerbox');
engine.addEntity(micahtrigger)



}