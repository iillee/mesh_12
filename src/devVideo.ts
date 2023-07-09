import * as utils from '@dcl/ecs-scene-utils';


export function createDevVideoScene() {


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
devNPlane.addComponent(new PlaneShape());
devNPlane.getComponent(PlaneShape).visible = true;
devNPlane.addComponent(new Transform({
    position: new Vector3(9.595, 19.033, 73.4),
    rotation: Quaternion.Euler(90, 90, 0),
    scale: new Vector3(2.198*4.5, 1.235*4.5, 1*4.5)
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
  position: new Vector3(9.8, -.125, 73.7)
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

  //enableDebug: true
      }
  )
);
log('added dev triggerbox');
engine.addEntity(devtrigger)


}