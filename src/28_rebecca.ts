import * as utils from '@dcl/ecs-scene-utils';

export function createRebeccaScene() {

  // Audio cube_28 Rebecca Rose
  //create audio clip and source
  const clip_28 = new AudioClip("sounds/REBECCA.mp3")
  const source_28 = new AudioSource(clip_28)

  // Audio can loop, true or false, change volume here too
  source_28.loop = true
  source_28.volume = 10

  let cube_28 = new Entity()
  let cube_28Path:string = "models/REBECCA.glb"
      cube_28.addComponent(new GLTFShape(cube_28Path))
      cube_28.addComponent(new Transform({
          position: new Vector3(52.5, 0, 216),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 0, 0)
  }))
  engine.addEntity(cube_28)

  //Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
  cube_28.addComponent(source_28)

  // Create TriggerBox for audio to play only inside the cube
  const trigger_28 = new Entity();
        trigger_28.addComponent(new BoxShape()),
        trigger_28.getComponent(BoxShape).withCollisions = false
        trigger_28.getComponent(BoxShape).visible = false
        trigger_28.addComponent(new Transform({
          position: new Vector3(54.2, -.125, 214.2)
        }));

  let triggerBox_28 = new utils.TriggerBoxShape(
    new Vector3 (12, 12, 12),
    new Vector3(0, 13, 0)
  );


  // Toggle audio on and off when entering / exiting the cube
  trigger_28.addComponent(
    new utils.TriggerComponent(
      triggerBox_28,
      {
        onCameraEnter : () => {
          log('play audio')
          source_28.playing = true
        },
        onCameraExit : () => {
          log('stop audio')
          source_28.playing = false
      },

    enableDebug: false
        }
    )
  )
  log('added new triggerbox')
  engine.addEntity(trigger_28)
  //END audio Rebecca

}
