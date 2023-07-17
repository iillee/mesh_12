import * as utils from '@dcl/ecs-scene-utils';

export function createMangoScene() {


  /// Audio cube_09 Mango
  //create audio clip and source

  const clip_09 = new AudioClip("sounds/HEART.mp3")
  const source_09 = new AudioSource(clip_09)

  // Audio can loop, true or false, change volume here too
  source_09.loop = true
  source_09.volume = 1

  //ceate entity and add .glb
  let cube_09 = new Entity()
  let cube_09Path:string = "models/MANGO.glb"
      cube_09.addComponent(new GLTFShape(cube_09Path))
      cube_09.addComponent(new Transform({
          position: new Vector3(11.7, 0, 25.6),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 0, 0)
  }))
  engine.addEntity(cube_09)

  //Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
  cube_09.addComponent(source_09)

  // Create TriggerBox for audio to play only inside the cube

  const trigger_09 = new Entity();
  trigger_09.addComponent(new BoxShape()),
  trigger_09.getComponent(BoxShape).withCollisions = false
  trigger_09.getComponent(BoxShape).visible = false


  trigger_09.addComponent(new Transform({
    position: new Vector3(9.8, 1, 25.8)
  }));

  let triggerBox_09 = new utils.TriggerBoxShape(
    new Vector3 (12, 12, 12),
    new Vector3(0, 13, 0)
  );


  // Toggle audio on and off when entering / exiting the cube

  trigger_09.addComponent(
    new utils.TriggerComponent(
      triggerBox_09,
      {
        onCameraEnter : () => {
          log('play audio')
          source_09.playing = true
        },
        onCameraExit : () => {
          log('stop audio')
          source_09.playing = false
      },

    enableDebug: false
        }
    )
  )
  log('added new triggerbox')
  engine.addEntity(trigger_09)

}
