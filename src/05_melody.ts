import * as utils from '@dcl/ecs-scene-utils';

export function createMelodyScene() {

// Audio cube_05 ALPHACLIP
//create audio clip and source
const clip_05 = new AudioClip("sounds/MELODY.mp3")
const source_05 = new AudioSource(clip_05)
source_05.loop = true
source_05.volume = 1

let cube_05 = new Entity()
let cube_05Path:string = "models/MELODY.glb"
    cube_05.addComponent(new GLTFShape(cube_05Path))
    cube_05.addComponent(new Transform({
        position: new Vector3(52.5, 0, 40.05),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_05)

// Create TriggerBox for audio to play only inside the cube
const trigger_05 = new Entity();
      trigger_05.addComponent(new BoxShape()),
      trigger_05.getComponent(BoxShape).withCollisions = false
      trigger_05.getComponent(BoxShape).visible = false
      trigger_05.addComponent(new Transform({
        position: new Vector3(54.5, 1, 38)
      }));

      let triggerBox_05 = new utils.TriggerBoxShape(
        new Vector3 (12, 12, 12),
        new Vector3(0, 13, 0)
      );

// Toggle audio on and off when entering / exiting the cube
trigger_05.addComponent(
  new utils.TriggerComponent(
    triggerBox_05,
    {
      onCameraEnter : () => {
        log('play audio')
        source_05.playing = true
      },
      onCameraExit : () => {
        log('stop audio')
        source_05.playing = false
    },

  enableDebug: false
      }
  )
)
log('added new triggerbox')
engine.addEntity(trigger_05)

//Constant - orb (trigger signifyer)
const box2 = new Entity()
box2.addComponent(new BoxShape())
box2.getComponent(BoxShape).withCollisions = false
box2.getComponent(BoxShape).visible = false
box2.addComponent(source_05)
box2.addComponent(new Transform({
  position: new Vector3(54.4, 10, 38.2),
  scale: new Vector3(12, 3, 12),
  rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(box2)




}
