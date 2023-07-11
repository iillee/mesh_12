import * as utils from '@dcl/ecs-scene-utils';

export function createMorteezaScene() {

  /// Audio cube_21 Morteeeza
  //create audio clip and source

  const clip_21 = new AudioClip("sounds/MORTEEEZA.mp3")
  const source_21 = new AudioSource(clip_21)

  // Audio can loop, true or false, change volume here too
  source_21.loop = true
  source_21.volume = 10

  // Create entity and add glb
  let cube_21 = new Entity()
  let cube_21Path:string = "models/cube_02.glb"
      cube_21.addComponent(new GLTFShape(cube_21Path))
      cube_21.addComponent(new Transform({
          position: new Vector3(23.8, -.125, 310.2),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 0, 0)
  }))
  engine.addEntity(cube_21)

  //Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
  cube_21.addComponent(source_21)

  // Create TriggerBox for audio to play only inside the cube

  const trigger_21 = new Entity();
  trigger_21.addComponent(new BoxShape()),
  trigger_21.getComponent(BoxShape).withCollisions = false
  trigger_21.getComponent(BoxShape).visible = false
  trigger_21.addComponent(new Transform({
    position: new Vector3(25.8, -.125, 310.2)
  }));

  let triggerBox_21 = new utils.TriggerBoxShape(
    new Vector3 (12, 12, 12),
    new Vector3(0, 13, 0)
  );


  // Toggle audio on and off when entering / exiting the cube

  trigger_21.addComponent(
    new utils.TriggerComponent(
      triggerBox_21,
      {
        onCameraEnter : () => {
          log('play audio')
          source_21.playing = true
        },
        onCameraExit : () => {
          log('stop audio')
          source_21.playing = false
      },

    enableDebug: false
        }
    )
  )
  log('added new triggerbox')
  engine.addEntity(trigger_21)

  //END audio Morteeeza


}
