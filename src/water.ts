//export
export function createWaterScene() {

//VIDEO CLIPS
const watermp4 = new VideoClip("videos/water14.mp4")

//VIDEO TEXTURES
const waterTexture = new VideoTexture(watermp4)

//ALPHA LAYERS
const semiTransparent = new Texture("images/alpha_transparent.png")

//SOUNDS
const sound03 = new AudioClip("sounds/pond.mp3")
const pond = new AudioSource(sound03)

// Water
const waterMaterial = new Material()
      waterMaterial.castShadows = false
      waterMaterial.albedoTexture = waterTexture
      waterMaterial.alphaTexture = semiTransparent
      waterMaterial.roughness = -5
      waterMaterial.specularIntensity = 0
      waterMaterial.metallic = -1.5

//water
const water1 = new Entity()
const plane = new PlaneShape()
      water1.addComponent(plane)
      water1.addComponent(pond)
      water1.getComponent(PlaneShape).withCollisions = false
      water1.getComponent(PlaneShape).visible = true
      water1.addComponent(new Transform({
          position: new Vector3(32, .72, 160 ),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
engine.addEntity(water1)
water1.addComponent(waterMaterial)
plane.uvs = setUVs(4, 20)

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
pond.volume = 0.25
waterTexture.play()
waterTexture.loop = true

}
