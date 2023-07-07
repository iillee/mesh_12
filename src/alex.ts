//import { hud } from "@dcl/builder-hud";
import * as utils from '@dcl/ecs-scene-utils';


const waterLink = "https://player.vimeo.com/external/842836880.m3u8?s=b6d452550986bca47952dfef3081f329e344359f";
const jetskiLink = "https://player.vimeo.com/external/842836757.m3u8?s=86c04329bafa266181bb5f6dc6b2dbac186aaf79";

// // // Create the scene as a parent for all assets within // // //
const alex_scene = new Entity('alex_scene');
engine.addEntity(alex_scene);
const alextransform = new Transform({
  position: new Vector3(17.8, -.125, 257.6),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(1, 1, 1)
});
alex_scene.addComponentOrReplace(alextransform);

// Create the box stop to suspend the avatar at the proper height //
const boxstop = new Entity('boxstop');
boxstop.setParent(alex_scene);
boxstop.addComponent(new GLTFShape("models/boxstop.glb"));
boxstop.getComponent(GLTFShape).visible = false;

boxstop.addComponent(new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  }));

engine.addEntity(boxstop);



const swamp = new Entity('swamp');
swamp.setParent(alex_scene);
swamp.addComponent(new Transform({
    position: new Vector3(6.25, 0, 9.75),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  }));
swamp.addComponent(new GLTFShape("models/swamp.glb"));
engine.addEntity(swamp);


// Image Textures

const towerMaterial1 = new BasicMaterial();
const towerMaterial2 = new BasicMaterial();
const towerTexture1 = new Texture('images/512cell1.png');
const towerTexture2 = new Texture('images/512cell2.png');

towerMaterial1.texture = towerTexture1;
towerMaterial2.texture = towerTexture2;

// Video stream link from Vimeo
const alexvideoMaterial = new BasicMaterial();
const alexVideoClip = new VideoClip(waterLink);
const jetskiClip = new VideoClip(jetskiLink);
const alexVideoTexture = new VideoTexture(alexVideoClip, { wrap: 1, samplingMode: 0 });
const jetskiVideoTexture = new VideoTexture(jetskiClip, { wrap: 1, samplingMode: 0 });
alexvideoMaterial.texture = alexVideoTexture;

alexVideoTexture.play();
alexVideoTexture.volume = 0.25;
alexVideoTexture.loop = true
alexVideoTexture.seekTime(99999999999)

//////////////////////////////////////////
//// Create shape component for the Eastern Plane of the MESH Cube
const alexnplane = new PlaneShape()

// map the texture to each of the four corners of the plane
// middle third of the screen
alexnplane.uvs = [
  // inside
    0.5, 1,
  
    0, 1,
  
    0, 0.5,
  
    0.5, 0.5,

  // outside
    0.5, 1,
  
    0, 1,
  
    0, 0.5,
  
    0.5, 0.5,
  ]

//Create entity and assign shape and material
const alexNPlane = new Entity("alexNPlane")
alexNPlane.setParent(alex_scene)
alexNPlane.addComponent(alexnplane)
alexNPlane.addComponent(towerMaterial1)
alexNPlane.addComponent(new Transform({
  position: new Vector3(8, 13.993, 12.703),
  rotation: Quaternion.Euler(0, 0, 0),
  scale: new Vector3(11.6, 11.6, 1)
}))
engine.addEntity(alexNPlane)

//////////////////////////////////////////
//// Create shape component for the Eastern Plane of the MESH Cube
const alexeplane = new PlaneShape()

// map the texture to each of the four corners of the plane
// middle third of the screen
alexeplane.uvs = [
  // inside
    1, 1,

    0.5, 1,

    0.5, 0.5,

    1, 0.5,

  // outside
    1, 1,

    0.5, 1,

    0.5, 0.5,

    1, 0.5

  ]

//Create entity and assign shape and material
const alexEPlane = new Entity("alexEPlane")
alexEPlane.setParent(alex_scene)
alexEPlane.addComponent(alexeplane)
alexEPlane.addComponent(towerMaterial1)
alexEPlane.addComponent(new Transform({
  position: new Vector3(13.8, 13.993, 7.935),
  rotation: Quaternion.Euler(0, 90, 0),
  scale: new Vector3(11.6, 11.6, 1)
}))
engine.addEntity(alexEPlane)


//////////////////////////////////////////

//Create shape component for the Southern Interior Plane of the MESH Cube
const alexsplane = new PlaneShape()

// map the texture to each of the four corners of the plane
// middle third of the screen
alexsplane.uvs = [
  // inside
    0.5, 0.5,
  
    0, 0.5, 
  
    0, 0,
  
    0.5, 0,
  
  // outside
    0.5, 0.5,
  
    0, 0.5, 
  
    0, 0,
  
    0.5, 0,
  ]

//Create entity and assign shape and material
const alexSPlane = new Entity("alexSPlane")
alexSPlane.setParent(alex_scene)
alexSPlane.addComponent(alexsplane)
alexSPlane.addComponent(towerMaterial2)
alexSPlane.addComponent(new Transform({
  position: new Vector3(8.0, 14.001, 3.135),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(11.6, 11.6, 1)
}))
//alexSPlane.addComponent(new VideoScreen())

engine.addEntity(alexSPlane)
//hud.attachToEntity(alexSPlane)

//////////////////////////////////////////////////

//// Create shape component for the Western Plane of the MESH Cube
const alexwplane = new PlaneShape()

// map the texture to each of the four corners of the plane
// middle third of the screen
alexwplane.uvs = [
  // inside
    1, 0.5,
  
    0.5, 0.5,
  
    0.5, 0,
  
    1, 0,
    
  // outside
    1, 0.5,
  
    0.5, 0.5,
  
    0.5, 0,
  
    1, 0,
  ]

//Create entity and assign shape and material
const alexWPlane = new Entity("alexWPlane")
alexWPlane.setParent(alex_scene)
alexWPlane.addComponent(alexwplane)
alexWPlane.addComponent(towerMaterial2)
alexWPlane.addComponent(new Transform({
  position: new Vector3(3.240, 14.0, 7.935),
  rotation: Quaternion.Euler(0, 270, 0),
  scale: new Vector3(11.6, 11.6, 1)
}))
//alexWPlane.addComponent(new VideoScreen())

engine.addEntity(alexWPlane)
//hud.attachToEntity(alexWPlane)

//////////////////////////////////////////////////

//// Create shape component for the Western Plane of the MESH Cube
const alexbplane = new PlaneShape()

// map the texture to each of the four corners of the plane
// middle third of the screen
alexbplane.uvs = [
  // inside
    1, 0.5,
  
    0.5, 0.5,
  
    0.5, 0,
  
    1, 0,
    
  // outside
    1, 0.5,
  
    0.5, 0.5,
  
    0.5, 0,
  
    1, 0,
  ]

//Create entity and assign shape and material
const alexBPlane = new Entity("alexBPlane")
alexBPlane.setParent(alex_scene)
alexBPlane.addComponent(alexbplane)
alexBPlane.addComponent(alexvideoMaterial)
alexBPlane.addComponent(new Transform({
  position: new Vector3(8.05, 8.22, 7.92),
  rotation: Quaternion.Euler(90, 0, 0),
  scale: new Vector3(11.6, 11.6, 1)
}))
engine.addEntity(alexBPlane)


///////////////////////////////////////////


// Elevator 
const alexelevator = new Entity("alexelevator");
alexelevator.setParent(alex_scene);
engine.addEntity(alexelevator);
alexelevator.addComponent(new PlaneShape());
alexelevator.getComponent(PlaneShape).withCollisions = true;
alexelevator.addComponent(new Transform({
    position: new Vector3(9.75, 8, 6.15),
    rotation: Quaternion.Euler(90, 0, 0),
    scale: new Vector3(11.75, 12, 16),
  }));
const alexmaterial = new Material();
alexmaterial.albedoColor = new Color4(1, 1, 1, 0);
alexelevator.addComponent(alexmaterial);

let StartPos = new Vector3(9.75, 8, 6.15)
let EndPos = new Vector3(9.75, 16, 6.15)



// sound

const alexsound01 = new AudioClip("sounds/sounds for cube_01.mp3")
const alexSource = new AudioSource(alexsound01)
swamp.addComponent(alexSource)
alexSource.loop = true
alexSource.volume = 100



// Bowl click
const bowl = new Entity('bowl')
bowl.setParent(alex_scene)
bowl.addComponent(new Transform({
    position: new Vector3(1.2, -8.6, 12.1),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(2, 2, 2)
  }))
bowl.addComponent(new GLTFShape('models/bowl.glb'))
engine.addEntity(bowl)


bowl.addComponent(new OnPointerDown(() => {
    alexelevator.addComponent(new utils.MoveTransformComponent(StartPos, EndPos, 4)),
    alexVideoTexture.playing = false,
    alexvideoMaterial.texture = jetskiVideoTexture,
    jetskiVideoTexture.play(),
    alexSource.playing = false
    
    
}))



// Trigger box 

// Create TriggerBox for audio to play only inside the cube

const alextrigger = new Entity();
alextrigger.addComponent(new BoxShape());
alextrigger.getComponent(BoxShape).withCollisions = false;
alextrigger.getComponent(BoxShape).visible = false;


alextrigger.addComponent(new Transform({
  position: new Vector3(9.8, -.125, 249.6)
}));

let alexTrigger = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

alextrigger.addComponent(
  new utils.TriggerComponent(
    alexTrigger,
    {
      onCameraEnter : () => {
        log('play alex video')
        alexVideoTexture.play(),
        alexSource.playing = true
      },
      onCameraExit : () => {
        log('stop alex video')
        alexVideoTexture.playing = false,
        alexSource.playing = false,
        jetskiVideoTexture.playing = false
    },

  //enableDebug: true
      }
  )
);
log('added alex triggerbox');
engine.addEntity(alextrigger)