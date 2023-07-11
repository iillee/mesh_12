import * as utils from '@dcl/ecs-scene-utils';

export function createLeahScene() {

  /// Audio cube_19 Leah Smithson
  //create audio clip and source

  const clip_19 = new AudioClip("sounds/LEAH.mp3")
  const source_19 = new AudioSource(clip_19)



  // Audio can loop, true or false, change volume here too
  source_19.loop = true
  source_19.volume = 10

  //create entity and add glb
  let cube_19 = new Entity()
  let cube_19Path:string = "models/LEAH.glb"
      cube_19.addComponent(new GLTFShape(cube_19Path))
      cube_19.addComponent(new Transform({
          position: new Vector3(11.5 , 0, 279.9),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 180, 0)
  }))
  engine.addEntity(cube_19)

  //Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
  cube_19.addComponent(source_19)

  // Create TriggerBox for audio to play only inside the cube

  const trigger_19 = new Entity();
  trigger_19.addComponent(new BoxShape()),
  trigger_19.getComponent(BoxShape).withCollisions = false
  trigger_19.getComponent(BoxShape).visible = false


  trigger_19.addComponent(new Transform({
    position: new Vector3(11.2 , 0, 279.9)
  }));

  let triggerBox_19 = new utils.TriggerBoxShape(
    new Vector3 (12, 12, 12),
    new Vector3(0, 13, 0)
  );


  // Toggle audio on and off when entering / exiting the cube

  trigger_19.addComponent(
    new utils.TriggerComponent(
      triggerBox_19,
      {
        onCameraEnter : () => {
          log('play audio')
          source_19.playing = true
        },
        onCameraExit : () => {
          log('stop audio')
          source_19.playing = false
      },

    //enableDebug: true
        }
    )
  )
  log('added new triggerbox')
  engine.addEntity(trigger_19)

  // END Leah Smithson audio
}
