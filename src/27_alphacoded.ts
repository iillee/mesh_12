import * as utils from '@dcl/ecs-scene-utils';

export function createAlphacodedScene() {

// Audio cube_27 ALPHACLIP
//create audio clip and source
const clip_27 = new AudioClip("sounds/ALPHACODED.mp3")
const source_27 = new AudioSource(clip_27)
      source_27.loop = true
      source_27.volume = 10

//Add cube and assign GlB
let cube_27 = new Entity()
let cube_27Path:string = "models/ALPHACODED.glb"
    cube_27.addComponent(new GLTFShape(cube_27Path))
    cube_27.addComponent(source_27)
    cube_27.addComponent(new Transform({
        position: new Vector3(52.5, 0 , 232),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_27)

// Create TriggerBox for audio to play only inside the cube
const trigger_27 = new Entity();
      trigger_27.addComponent(new BoxShape()),
      trigger_27.getComponent(BoxShape).withCollisions = false
      trigger_27.getComponent(BoxShape).visible = false
      trigger_27.addComponent(new Transform({
        position: new Vector3(54.5, 1, 230)
      }));

      let triggerBox_27 = new utils.TriggerBoxShape(
        new Vector3 (12, 12, 12),
        new Vector3(0, 13, 0)
      );

// Toggle audio on and off when entering / exiting the cube
trigger_27.addComponent(
  new utils.TriggerComponent(
    triggerBox_27,
    {
      onCameraEnter : () => {
        log('play audio')
        source_27.playing = true
      },
      onCameraExit : () => {
        log('stop audio')
        source_27.playing = false
    },

  enableDebug: false
      }
  )
)
log('added new triggerbox')
engine.addEntity(trigger_27)

}
