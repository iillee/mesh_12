import * as utils from '@dcl/ecs-scene-utils';

export function createHyperdavyScene() {

  // Audio cube_23 Hyperdavy
  //create audio clip and source

  const clip_23 = new AudioClip("sounds/HYPERDAVY.mp3")
  const source_23 = new AudioSource(clip_23)

  // Audio can loop, true or false, change volume here too
  source_23.loop = true
  source_23.volume = 10

  let cube_23 = new Entity()
  let cube_23Path:string = "models/HYPERDAVY.glb"
      cube_23.addComponent(new GLTFShape(cube_23Path))
      cube_23.addComponent(new Transform({
          position: new Vector3(52.5, 0, 296),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 0, 0)
  }))
  engine.addEntity(cube_23)

  //Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
  cube_23.addComponent(source_23)

  // Create TriggerBox for audio to play only inside the cube

  const trigger_23 = new Entity();
  trigger_23.addComponent(new BoxShape()),
  trigger_23.getComponent(BoxShape).withCollisions = false
  trigger_23.getComponent(BoxShape).visible = false


  trigger_23.addComponent(new Transform({
    position: new Vector3(54.2, -.125, 296.2)
  }));

  let triggerBox_23 = new utils.TriggerBoxShape(
    new Vector3 (12, 12, 12),
    new Vector3(0, 13, 0)
  );


  // Toggle audio on and off when entering / exiting the cube

  trigger_23.addComponent(
    new utils.TriggerComponent(
      triggerBox_23,
      {
        onCameraEnter : () => {
          log('play audio')
          source_23.playing = true
        },
        onCameraExit : () => {
          log('stop audio')
          source_23.playing = false
      },

    //enableDebug: true
        }
    )
  )
  log('added new triggerbox')
  engine.addEntity(trigger_23)

  //END audio Hyperdavy



}
