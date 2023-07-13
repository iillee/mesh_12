import * as utils from '@dcl/ecs-scene-utils';

export function createLejinScene() {

  /// Audio cube_14 Lejin
  //create audio clip and source

  const clip_14 = new AudioClip("sounds/JIN.mp3")
  const source_14 = new AudioSource(clip_14)

  // Audio can loop, true or false, change volume here too
  source_14.loop = true
  source_14.volume = 10

  let cube_14 = new Entity()
  let cube_14Path:string = "models/JIN.glb"
      cube_14.addComponent(new GLTFShape(cube_14Path))
      cube_14.addComponent(new Transform({
          position: new Vector3(11.42, 0, 104),
          scale: new Vector3(1, 1, 1 ),
          rotation: Quaternion.Euler(0, 180, 0)
  }))
  engine.addEntity(cube_14)

  //Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
  cube_14.addComponent(source_14)

  // Create TriggerBox for audio to play only inside the cube

  const trigger_14 = new Entity();
  trigger_14.addComponent(new BoxShape()),
  trigger_14.getComponent(BoxShape).withCollisions = false
  trigger_14.getComponent(BoxShape).visible = false


  trigger_14.addComponent(new Transform({
    position: new Vector3(11.35, 0, 104)
  }));

  let triggerBox_14 = new utils.TriggerBoxShape(
    new Vector3 (12, 12, 12),
    new Vector3(0, 13, 0)
  );


  // Toggle audio on and off when entering / exiting the cube

  trigger_14.addComponent(
    new utils.TriggerComponent(
      triggerBox_14,
      {
        onCameraEnter : () => {
          log('play audio')
          source_14.playing = true
        },
        onCameraExit : () => {
          log('stop audio')
          source_14.playing = false
      },

    enableDebug: false
        }
    )
  )
  log('added new triggerbox')
  engine.addEntity(trigger_14)

  // END Lejin audio

}
