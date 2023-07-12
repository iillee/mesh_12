import * as utils from '@dcl/ecs-scene-utils';

export function createOgiworldsScene() {


    /// Audio cube_24
    //create audio clip and source

    const clip_24 = new AudioClip("sounds/Apeire_02.mp3")
    const source_24 = new AudioSource(clip_24)

    // Audio can loop, true or false, change volume here too
    source_24.loop = true
    source_24.volume = 10

    // Create entity and add glb
      let cube_24 = new Entity()
      let cube_24Path:string = "models/OGIWORLDS2.glb"
          cube_24.addComponent(new GLTFShape(cube_24Path))
          cube_24.addComponent(new Transform({
              position: new Vector3(52.45, -.125, 280),
              scale: new Vector3(1, 1, 1),
              rotation: Quaternion.Euler(0, 0, 0)
      }))
      engine.addEntity(cube_24)

    //Add audio source to the mainw cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
    cube_24.addComponent(source_24)

    // Create TriggerBox for audio to play only inside the cube

    const trigger_24 = new Entity();
    trigger_24.addComponent(new BoxShape()),
    trigger_24.getComponent(BoxShape).withCollisions = false
    trigger_24.getComponent(BoxShape).visible = false
    trigger_24.addComponent(new Transform({
          position: new Vector3(54.8, -.125, 278)
    }));

    let triggerBox_24 = new utils.TriggerBoxShape(
      new Vector3 (12, 12, 12),
      new Vector3(0, 13, 0)
    );


    // Toggle audio on and off when entering / exiting the cube

    trigger_24.addComponent(
      new utils.TriggerComponent(
        triggerBox_24,
        {
          onCameraEnter : () => {
            log('play audio')
            source_24.playing = true
          },
          onCameraExit : () => {
            log('stop audio')
            source_24.playing = false
        },

      enableDebug: false
          }
      )
    )
    log('added new triggerbox')
    engine.addEntity(trigger_24)

    //END audio Morteeeza


}
