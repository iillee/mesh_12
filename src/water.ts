import * as utils from '@dcl/ecs-scene-utils';

export function createWaterScene() {

const watermp4 = new VideoClip("videos/water23.mp4")
const visiblemp4 = new VideoClip("videos/water27.mp4")

//VIDEO TEXTURES
const waterTexture = new VideoTexture(watermp4)
const colorTexture = new VideoTexture(visiblemp4)

//ALPHA LAYERS
const semiTransparent = new Texture("images/alpha_transparent.png")

//SOUNDS
const sound03 = new AudioClip("sounds/pond.mp3")
const pond = new AudioSource(sound03)// WARNING:

// Water
const waterMaterial = new Material()
      waterMaterial.castShadows = false
      waterMaterial.albedoTexture = colorTexture
      waterMaterial.alphaTexture = waterTexture
      waterMaterial.roughness = 1
      waterMaterial.specularIntensity = 0
      waterMaterial.metallic = -2

//water

const plane = new PlaneShape()
      plane.uvs = setUVs(4, 20)

const water1 = new Entity()
      water1.addComponent(plane)
      water1.addComponent(pond)
      water1.addComponent(waterMaterial)
      water1.getComponent(PlaneShape).withCollisions = false
      water1.getComponent(PlaneShape).visible = true
      water1.addComponent(new Transform({
          position: new Vector3(32, .8, 160 ),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
let triggerBox_water = new utils.TriggerBoxShape(
  new Vector3 (54, 1, 320),
  new Vector3(0, 1.5, 0)
);

// Toggle audio on and off when entering / exiting the cube
water1.addComponent(
new utils.TriggerComponent(
triggerBox_water,
{
onCameraEnter : () => {
  log('play audio')
  pond.playing = true
},
onCameraExit : () => {
  log('stop audio')
  pond.playing = false
},

enableDebug: false
}
)
)
log('added new triggerbox')
engine.addEntity(water1)

const water2 = new Entity()
      water2.addComponent(plane)
      water2.addComponent(waterMaterial)
      water2.getComponent(PlaneShape).withCollisions = false
      water2.getComponent(PlaneShape).visible = true
      water2.addComponent(new Transform({
          position: new Vector3(32, .75, 160 ),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
engine.addEntity(water2)

const water3 = new Entity()
      water3.addComponent(plane)
      water3.addComponent(waterMaterial)
      water3.getComponent(PlaneShape).withCollisions = false
      water3.getComponent(PlaneShape).visible = true
      water3.addComponent(new Transform({
          position: new Vector3(32, .7, 160 ),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
engine.addEntity(water3)

const water4 = new Entity()
      water4.addComponent(plane)
      water4.addComponent(waterMaterial)
      water4.getComponent(PlaneShape).withCollisions = false
      water4.getComponent(PlaneShape).visible = true
      water4.addComponent(new Transform({
          position: new Vector3(32, .65, 160 ),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
engine.addEntity(water4)

const water5 = new Entity()
      water5.addComponent(plane)
      water5.addComponent(waterMaterial)
      water5.getComponent(PlaneShape).withCollisions = false
      water5.getComponent(PlaneShape).visible = true
      water5.addComponent(new Transform({
          position: new Vector3(32, .6, 160 ),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
engine.addEntity(water5)

const water6 = new Entity()
      water6.addComponent(plane)
      water6.addComponent(waterMaterial)
      water6.getComponent(PlaneShape).withCollisions = false
      water6.getComponent(PlaneShape).visible = true
      water6.addComponent(new Transform({
          position: new Vector3(32, .55, 160 ),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
engine.addEntity(water6)

const water7 = new Entity()
      water7.addComponent(plane)
      water7.addComponent(waterMaterial)
      water7.getComponent(PlaneShape).withCollisions = false
      water7.getComponent(PlaneShape).visible = true
      water7.addComponent(new Transform({
          position: new Vector3(32, .5, 160 ),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
engine.addEntity(water7)

const water8 = new Entity()
      water8.addComponent(plane)
      water8.addComponent(waterMaterial)
      water8.getComponent(PlaneShape).withCollisions = false
      water8.getComponent(PlaneShape).visible = true
      water8.addComponent(new Transform({
          position: new Vector3(32, .45, 160 ),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
engine.addEntity(water8)

const water9 = new Entity()
      water9.addComponent(plane)
      water9.addComponent(waterMaterial)
      water9.getComponent(PlaneShape).withCollisions = false
      water9.getComponent(PlaneShape).visible = true
      water9.addComponent(new Transform({
          position: new Vector3(32, .4, 160 ),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
engine.addEntity(water9)

const water10 = new Entity()
      water10.addComponent(plane)
      water10.addComponent(waterMaterial)
      water10.getComponent(PlaneShape).withCollisions = false
      water10.getComponent(PlaneShape).visible = true
      water10.addComponent(new Transform({
          position: new Vector3(32, .35, 160 ),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
engine.addEntity(water10)




function setUVs(rows: number, cols: number) {
  return [
    // North side of unrortated plane
    0, //lower-left corner
    0,

    cols, //lower-right corner
    0,

    cols, //upper-right corner
    rows,

    0, //upper left-corner
    rows,

    // South side of unrortated plane
    cols, // lower-right corner
    0,

    0, // lower-left corner
    0,

    0, // upper-left corner
    rows,

    cols, // upper-right corner
    rows,
  ]
}


pond.playing = true
pond.loop = true
pond.volume = 1
waterTexture.play()
waterTexture.loop = true
colorTexture.play()
colorTexture.loop = true

}
