import * as utils from '@dcl/ecs-scene-utils';

export function createMellowmannScene() {

  /// Audio cube_04 Mellowmann
  //create audio clip and source
  const clip_04 = new AudioClip("sounds/MMSOUND.mp3")
  const source_04 = new AudioSource(clip_04)

  // Audio can loop, true or false, change volume here too
  source_04.loop = true
  source_04.volume = 10

  //create entity and add glb
  let cube_04 = new Entity()
  let cube_04Path:string = "models/MELLOWMANN.glb"
      cube_04.addComponent(new GLTFShape(cube_04Path))
      cube_04.addComponent(new Transform({
          position: new Vector3(54.4, 0, 56.15),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 90, 0)
  }))
  engine.addEntity(cube_04)

  //Add audio source to the main cube GLB file (so position is good)
  cube_04.addComponent(source_04)

  // Create TriggerBox for audio to play only inside the cube

  const trigger_04 = new Entity();
  trigger_04.addComponent(new BoxShape()),
  trigger_04.getComponent(BoxShape).withCollisions = false
  trigger_04.getComponent(BoxShape).visible = false


  trigger_04.addComponent(new Transform({
    position: new Vector3(54.4, 0, 56.15)
  }));

  let triggerBox_04 = new utils.TriggerBoxShape(
    new Vector3 (12, 12, 12),
    new Vector3(0, 13, 0)
  );


  // Toggle audio on and off when entering / exiting the cube

  trigger_04.addComponent(
    new utils.TriggerComponent(
      triggerBox_04,
      {
        onCameraEnter : () => {
          log('play audio')
          source_04.playing = true
        },
        onCameraExit : () => {
          log('stop audio')
          source_04.playing = false
      },

    //enableDebug: true
        }
    )
  )
  log('added new triggerbox')
  engine.addEntity(trigger_04)

}
