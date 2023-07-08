
//import { hud } from "@dcl/builder-hud";
import * as utils from '@dcl/ecs-scene-utils';
//import { MoveTransformComponent } from "@dcl/ecs-scene-utils"

export function createTripuraScene() {

//Create material and configure fields
const tripuraMaterial = new BasicMaterial();
const tripuraVideoClip = new VideoClip("https://player.vimeo.com/external/841056743.m3u8?s=16219d6c13823d8c9a7b5c2103b33d4796dfbfb8");
const tripuraVideoTexture = new VideoTexture(tripuraVideoClip, { wrap: 1, samplingMode: 1 });

tripuraVideoTexture.play();
tripuraVideoTexture.volume = 0.25;
tripuraVideoTexture.loop = true;
//tripuraVideoTexture.seekTime(99999999999);
tripuraMaterial.texture = tripuraVideoTexture;

const tripura_scene = new Entity('tripura_scene');
engine.addEntity(tripura_scene);
const tripuratransform = new Transform({
    position: new Vector3(17.5, -.125, 226),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 180, 0)
});
tripura_scene.addComponentOrReplace(tripuratransform);



//Create First Plane shape component for the Northern Interior Plane of the MESH Cube
const tripurafirstplane = new PlaneShape();

// map the texture to each of the four corners of the plane
tripurafirstplane.uvs = [
  // Inside
    0.3164, 1,
  
    0, 1, 
  
    0, 0,
  
    0.3164, 0,
  
  // Outside
    0.3164, 1,
  
    0, 1, 
  
    0, 0,
  
    0.3164, 0,
  ]

//Create entity and assign shape and material
const tripuraFirstPlane = new Entity();
tripuraFirstPlane.setParent(tripura_scene);
tripuraFirstPlane.addComponent(tripurafirstplane);
tripuraFirstPlane.addComponent(tripuraMaterial);
tripuraFirstPlane.addComponent(new Transform({
  position: new Vector3(10, 13.91, 14.0),
  rotation: Quaternion.Euler(0, 0, 0),
  scale: new Vector3(7.2, 11.6, 1)
}));

engine.addEntity(tripuraFirstPlane);
//hud.attachToEntity(FirstPlane)

/////////////////////////////////////////////

//Create Second Plane shape component for the Eastern Interior Plane of the MESH Cube
const tripurasecondplane = new PlaneShape();

// map the texture to each of the four corners of the plane
tripurasecondplane.uvs = [
  // Inside
    0.47, 1,
  
    0.3164, 1,
  
    0.3164, 0,
  
    0.47, 0,
  
  // Outside
    0.427, 1,
  
    0.3164, 1,
  
    0.3164, 0,
  
    0.427, 0,
  ]

//Create entity and assign shape and material
const tripuraSecondPlane = new Entity();
tripuraSecondPlane.setParent(tripura_scene);
tripuraSecondPlane.addComponent(tripurasecondplane);
tripuraSecondPlane.addComponent(tripuraMaterial);
tripuraSecondPlane.addComponent(new Transform({
  position: new Vector3(13.6, 13.91, 12.825),
  rotation: Quaternion.Euler(0, 90, 0),
  scale: new Vector3(2.4, 11.6, 1)
}));

engine.addEntity(tripuraSecondPlane);
//hud.attachToEntity(tripuraSecondPlane)

/////////////////////////////////////////////

//Create Third Plane shape component for the Southern Interior Plane of the MESH Cube
const tripurathirdplane = new PlaneShape();

// map the texture to each of the four corners of the plane
// first third of the video file
tripurathirdplane.uvs = [
  // Inside
    0.59, 1,
  
    0.427, 1, 
  
    0.427, 0,
  
    0.59, 0,
  
  // Outside
    0.59, 1,
  
    0.427, 1, 
  
    0.427, 0,
  
    0.59, 0,
  ]

//Create entity and assign shape and material
const tripuraThirdPlane = new Entity();
tripuraThirdPlane.setParent(tripura_scene);
tripuraThirdPlane.addComponent(tripurathirdplane);
tripuraThirdPlane.addComponent(tripuraMaterial);
tripuraThirdPlane.addComponent(new Transform({
  position: new Vector3(3.82, 13.915, 2.415),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(3.6, 11.6, 1)
}));

engine.addEntity(tripuraThirdPlane);
//hud.attachToEntity(tripuraThirdPlane)

/////////////////////////////////////////////

//Create Fourth Plane shape component for the Western Interior Plane of the MESH Cube
const tripurafourthplane = new PlaneShape();

// map the texture to each of the four corners of the plane
tripurafourthplane.uvs = [
  // Inside
    0.75, 1,
  
    0.591, 1,
  
    0.591, 0,
  
    0.75, 0,
  
  // Outside
    0.75, 1,
  
    0.591, 1,
  
    0.591, 0,
  
    0.75, 0,
  ]

//Create entity and assign shape and material
const tripuraFourthPlane = new Entity();
tripuraFourthPlane.setParent(tripura_scene);
tripuraFourthPlane.addComponent(tripurafourthplane);
tripuraFourthPlane.addComponent(tripuraMaterial);
tripuraFourthPlane.addComponent(new Transform({
  position: new Vector3(2.047, 13.915, 4.220),
  rotation: Quaternion.Euler(0, 270, 0),
  scale: new Vector3(3.6, 11.6, 1)
}));

engine.addEntity(tripuraFourthPlane);
//hud.attachToEntity(FourthPlane)

/////////////////////////////////////////////

//Create shape component for the second Eastern Interior Plane of the MESH Cube
const tripurafifthplane = new PlaneShape();

// map the texture to each of the four corners of the plane
tripurafifthplane.uvs = [
  // Inside
    0.87, 1,
  
    0.76, 1,
  
    0.76, 0,
  
    0.87, 0,
  
  // Outside
    0.87, 1,
  
    0.76, 1,
  
    0.76, 0,
  
    0.87, 0,
  
  ]

//Create entity and assign shape and material
const tripuraFifthPlane = new Entity();
tripuraFifthPlane.setParent(tripura_scene);
tripuraFifthPlane.addComponent(tripurafifthplane);
tripuraFifthPlane.addComponent(tripuraMaterial);
tripuraFifthPlane.addComponent(new Transform({
  position: new Vector3(13.6, 13.915, 3.91),
  rotation: Quaternion.Euler(0, 90, 0),
  scale: new Vector3(3, 11.6, 1)
}));

engine.addEntity(tripuraFifthPlane)
//hud.attachToEntity(FifthPlane)


// play video texture
//tripuraVideoTexture.play()
tripuraVideoTexture.playing = false;

  
// // // Builder aligned assets // // //


/*
const tripuraentity = new Entity('tripura-entity')
engine.addEntity(tripuraentity)
tripuraentity.setParent(tripura_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
tripuraentity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tripuraentity.addComponentOrReplace(transform2)
*/


const newwave = new Entity('newwave');
engine.addEntity(newwave);
newwave.setParent(tripura_scene);
const tripuraTransform3 = new Transform({
  position: new Vector3(9.366019248962402, 8.645828247070312, 8.742096900939941),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
});
newwave.addComponentOrReplace(tripuraTransform3);
const tripuragltfShape2 = new GLTFShape("models/newwave1.glb");
tripuragltfShape2.withCollisions = true;
tripuragltfShape2.isPointerBlocker = true;
tripuragltfShape2.visible = true;
newwave.addComponentOrReplace(tripuragltfShape2);

const tripurabox = new Entity('tripurabox');
engine.addEntity(tripurabox);
tripurabox.setParent(tripura_scene);
const tripuraTransform4 = new Transform({
  position: new Vector3(6, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
tripurabox.addComponentOrReplace(tripuraTransform4);
const tripuragltfShape3 = new GLTFShape("models/BOX4.glb");
tripuragltfShape3.withCollisions = true;
tripuragltfShape3.isPointerBlocker = true;
tripuragltfShape3.visible = true;
tripurabox.addComponentOrReplace(tripuragltfShape3);





// Create TriggerBox for audio to play only inside the cube

const tripuratrigger = new Entity();
tripuratrigger.addComponent(new BoxShape());
tripuratrigger.getComponent(BoxShape).withCollisions = false;
tripuratrigger.getComponent(BoxShape).visible = false;


tripuratrigger.addComponent(new Transform({
  position: new Vector3(10, -.125, 217.5)
}));

let tripuraTrigger = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

tripuratrigger.addComponent(
  new utils.TriggerComponent(
    tripuraTrigger,
    {
      onCameraEnter : () => {
        log('play tripura video')
        tripuraVideoTexture.play()
      },
      onCameraExit : () => {
        log('stop tripura video')
        tripuraVideoTexture.playing = false
    },

  //enableDebug: true
      }
  )
);
log('added tripura triggerbox');
engine.addEntity(tripuratrigger)
    }


