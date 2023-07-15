import * as utils from '@dcl/ecs-scene-utils';

export function createJikkeScene() {

  // Audio cube_26 Jikke Lesterhuis
  //create audio clip and source

  const clip_26 = new AudioClip("sounds/JIKKE.mp3")
  const source_26 = new AudioSource(clip_26)

  // Audio can loop, true or false, change volume here too
  source_26.loop = true
  source_26.volume = 10

  // creat entity and assign glb
  let cube_26 = new Entity()
  let cube_26Path:string = "models/JIKKE.glb"
      cube_26.addComponent(new GLTFShape(cube_26Path))
      cube_26.addComponent(new Transform({
          position: new Vector3(52.5, .25, 248),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 0, 0)
  }))
  engine.addEntity(cube_26)

  //Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
  cube_26.addComponent(source_26)

  // Create TriggerBox for audio to play only inside the cube
  const trigger_26 = new Entity();
  trigger_26.addComponent(new BoxShape()),
  trigger_26.getComponent(BoxShape).withCollisions = false
  trigger_26.getComponent(BoxShape).visible = false
  trigger_26.addComponent(new Transform({
    position: new Vector3(54.2, 1, 246.2)
  }));
  let triggerBox_26 = new utils.TriggerBoxShape(
    new Vector3 (12, 12, 12),
    new Vector3(0, 13, 0)
  );

  // Toggle audio on and off when entering / exiting the cube
  trigger_26.addComponent(
    new utils.TriggerComponent(
      triggerBox_26,
      {
        onCameraEnter : () => {
          log('play audio')
          source_26.playing = true
        },
        onCameraExit : () => {
          log('stop audio')
          source_26.playing = false
      },

    enableDebug: false
        }
    )
  )
  log('added new triggerbox')
  engine.addEntity(trigger_26)

  //END audio Jikke

}
