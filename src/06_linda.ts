import * as utils from '@dcl/ecs-scene-utils';

export function createLindaScene() {

  /// Audio cube_06 Linda Loh
  //create audio clip and source
  const clip_06 = new AudioClip("sounds/LINDA.mp3")
  const source_06 = new AudioSource(clip_06)

  // Audio can loop, true or false, change volume here too
  source_06.loop = true
  source_06.volume = .1

  // create entity and add .glb
  let cube_06 = new Entity()
  let cube_06Path:string = "models/LINDA.glb"
      cube_06.addComponent(new GLTFShape(cube_06Path))
      cube_06.addComponent(new Transform({
          position: new Vector3(52.5, 0, 24.05),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 0, 0)
  }))
  engine.addEntity(cube_06)

  //Add audio source to the main cube GLB file (so position is good)
  cube_06.addComponent(source_06)

  // Create TriggerBox for audio to play only inside the cube

  const trigger_06 = new Entity();
  trigger_06.addComponent(new BoxShape()),
  trigger_06.getComponent(BoxShape).withCollisions = false
  trigger_06.getComponent(BoxShape).visible = false


  trigger_06.addComponent(new Transform({
    position: new Vector3(52.5, 0, 24.05)
  }));

  let triggerBox_06 = new utils.TriggerBoxShape(
    new Vector3 (12, 12, 12),
    new Vector3(2, 14, -2)
  );


  // Toggle audio on and off when entering / exiting the cube

  trigger_06.addComponent(
    new utils.TriggerComponent(
      triggerBox_06,
      {
        onCameraEnter : () => {
          log('play audio')
          source_06.playing = true
        },
        onCameraExit : () => {
          log('stop audio')
          source_06.playing = false
      },

    enableDebug: false
        }
    )
  )
  log('added new triggerbox')
  engine.addEntity(trigger_06)

}
