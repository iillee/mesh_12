import * as utils from '@dcl/ecs-scene-utils';

export function createDevScene() {

  let cube_12 = new Entity()
  let cube_12Path:string = "models/DEV.glb"
      cube_12.addComponent(new GLTFShape(cube_12Path))
      cube_12.addComponent(new Transform({
          position: new Vector3(9.6, 0, 73.8),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 180, 0)
  }))
  engine.addEntity(cube_12)



  /// Video Material
const devVideoClip = new VideoClip("https://player.vimeo.com/external/843664868.m3u8?s=2c60ef67f8789a9007b58c037725e8eebb29ae08");
const devVideoTexture = new VideoTexture(devVideoClip);
const devMaterial = new Material();
//const myVideoClip = new VideoClip("models_dh/CrashSites_SplitView.mp4",) https://player.vimeo.com/external/843664868.m3u8?s=2c60ef67f8789a9007b58c037725e8eebb29ae08
devVideoTexture.volume = 0.25;
devVideoTexture.loop = true;
devMaterial.albedoTexture = devVideoTexture;
devMaterial.emissiveColor = Color3.White();
devMaterial.emissiveTexture = devVideoTexture;
devMaterial.emissiveIntensity = 0.6
//myVideoTexture.seekTime(99999999999)


//// Video Plane
const devNPlane = new Entity("devNPlane")
devNPlane.setParent(cube_12)
devNPlane.addComponent(new PlaneShape());
devNPlane.getComponent(PlaneShape).visible = true;
devNPlane.addComponent(new Transform({
    position: new Vector3(1.595, 9.033, 3.996),
    rotation: Quaternion.Euler(11.74, 155.4, 89.8),
    scale: new Vector3(2.198, 1.235, 1)
}));
devNPlane.addComponent(devMaterial);
//devNPlane.setParent(devParent); // add entity with cube 12 transform
engine.addEntity(devNPlane)

devVideoTexture.play();


// Create trigger box
// Trigger box

// Create TriggerBox for audio to play only inside the cube

const devtrigger = new Entity();
devtrigger.addComponent(new BoxShape());
devtrigger.getComponent(BoxShape).withCollisions = false;
devtrigger.getComponent(BoxShape).visible = false;


devtrigger.addComponent(new Transform({
  position: new Vector3(9.8, 1, 73.8)
}));

let devTrigger = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

devtrigger.addComponent(
  new utils.TriggerComponent(
    devTrigger,
    {
      onCameraEnter : () => {
        log('play dev video')
        devVideoTexture.play()
        //alexSource.playing = true
      },
      onCameraExit : () => {
        log('stop dev video')
        devVideoTexture.playing = false
       // alexSource.playing = false,
        //jetskiVideoTexture.playing = false
    },

  enableDebug: false
      }
  )
);
log('added dev triggerbox');
engine.addEntity(devtrigger)


}
