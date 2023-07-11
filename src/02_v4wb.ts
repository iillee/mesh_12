import * as utils from '@dcl/ecs-scene-utils';

export function createV4wbScene() {

  /// Audio cube_02 V4W
  //create audio clip and source
  const clip_02c = new AudioClip("sounds/V4W.mp3")
  const source_02c = new AudioSource(clip_02c)

  // Audio can loop, true or false, change volume here too
  source_02c.loop = true
  source_02c.volume = 10

  // create entity and add .glb
  let cube_02 = new Entity()
  let cube_02Path:string = "models/V4Wb.glb"
      cube_02.addComponent(new GLTFShape(cube_02Path))
      cube_02.addComponent(new Transform({
          position: new Vector3(52.5, 0, 88.04),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 0, 0)
  }))
  engine.addEntity(cube_02)


  //Add audio source to the main cube GLB file (so position is good)
  cube_02.addComponent(source_02c)

  // Create TriggerBox for audio to play only inside the cube
  const trigger_02c = new Entity();
  trigger_02c.addComponent(new BoxShape()),
  trigger_02c.getComponent(BoxShape).withCollisions = false
  trigger_02c.getComponent(BoxShape).visible = false
  trigger_02c.addComponent(new Transform({
    position: new Vector3(52.5, 0, 88.04)
  }));

  let triggerBox_02c = new utils.TriggerBoxShape(
    new Vector3 (12, 12, 12),
    new Vector3(0, 13, 0)
  );


  // Toggle audio on and off when entering / exiting the cube

  trigger_02c.addComponent(
    new utils.TriggerComponent(
      triggerBox_02c,
      {
        onCameraEnter : () => {
          log('play audio')
          source_02c.playing = true
        },
        onCameraExit : () => {
          log('stop audio')
          source_02c.playing = false
      },

    //enableDebug: true
        }
    )
  )
  log('added new triggerbox')
  engine.addEntity(trigger_02c)

}
