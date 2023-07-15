import * as utils from '@dcl/ecs-scene-utils';

export function createV4wbScene() {


  /// Audio cube_02
  //create audio clip and source

  const clip_02 = new AudioClip("sounds/V4W.mp3")
  const source_02 = new AudioSource(clip_02)

  // Audio can loop, true or false, change volume here too
  source_02.loop = true
  source_02.volume = 1

  //ceate entity and add .glb
  let cube_02 = new Entity()
  let cube_02Path:string = "models/V4W2.glb"
      cube_02.addComponent(new GLTFShape(cube_02Path))
      cube_02.addComponent(new Transform({
        position: new Vector3(52.5, -0.2, 88.04),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
  }))
  engine.addEntity(cube_02)

  //Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
  cube_02.addComponent(source_02)

  // Create TriggerBox for audio to play only inside the cube

  const trigger_02 = new Entity();
  trigger_02.addComponent(new BoxShape()),
  trigger_02.getComponent(BoxShape).withCollisions = false
  trigger_02.getComponent(BoxShape).visible = false


  trigger_02.addComponent(new Transform({
        position: new Vector3(54.2, 1, 86.15)

  }));

  let triggerBox_02 = new utils.TriggerBoxShape(
    new Vector3 (12, 12, 12),
    new Vector3(0, 13, 0)
  );


  // Toggle audio on and off when entering / exiting the cube

  trigger_02.addComponent(
    new utils.TriggerComponent(
      triggerBox_02,
      {
        onCameraEnter : () => {
          log('play audio')
          source_02.playing = true
        },
        onCameraExit : () => {
          log('stop audio')
          source_02.playing = false
      },

    enableDebug: false
        }
    )
  )
  log('added new triggerbox')
  engine.addEntity(trigger_02)

}
