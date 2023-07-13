export function createBaseScene() {


// ALbedo Layers
const artistTexture = new Texture("images/alpha_artists.png")

//ALPHA LAYERS
const artistAlpha = new Texture("images/alpha_artists.png")

// Materials
const artistMaterial = new Material()
      artistMaterial.castShadows = true
      artistMaterial.albedoTexture = artistTexture
      artistMaterial.alphaTexture = artistAlpha
      artistMaterial.roughness = 1
      artistMaterial.specularIntensity = 0
      artistMaterial.metallic = -6

//Artists Plane
const artists = new Entity()
const plane = new PlaneShape()
      artists.addComponent(plane)
      artists.addComponent(artistMaterial)
      artists.getComponent(PlaneShape).withCollisions = false
      artists.getComponent(PlaneShape).visible = true
      artists.addComponent(new Transform({
          position: new Vector3(32, 25, 160 ),
          scale: new Vector3(60, 60, 1),
          rotation: Quaternion.Euler(270, 180, 0)
}))
engine.addEntity(artists)









//Sign 01 - ile
let sign_01 = new Entity()
let sign_01Path:string = "models/sign_01.glb"
    sign_01.addComponent(new GLTFShape(sign_01Path))
    sign_01.addComponent(new Transform({
        position: new Vector3(32, 10, 126.7),
        scale: new Vector3(2, 2, 2),
        rotation: Quaternion.Euler(0, 270, 90)
}))
engine.addEntity(sign_01)

//Sign 02  - ile
let sign_02 = new Entity()
let sign_02Path:string = "models/sign_02.glb"
    sign_02.addComponent(new GLTFShape(sign_02Path))
    sign_02.addComponent(new Transform({
        position: new Vector3(32, 10, 193.3),
        scale: new Vector3(2, 2, 2),
        rotation: Quaternion.Euler(0, 90, 90)
}))
engine.addEntity(sign_02)

//Boulder  - ile
let boulder_01 = new Entity()
let boulder_01Path:string = "models/boulder.glb"
    boulder_01.addComponent(new GLTFShape(boulder_01Path))
    boulder_01.addComponent(new Transform({
        position: new Vector3(20, 1.5, 262.0),
        scale: new Vector3(1.1, .2, 1.1),
        rotation: Quaternion.Euler(0, 90, 180)
}))
engine.addEntity(boulder_01)

//Boulder  - ile
let boulder_02 = new Entity()
let boulder_02Path:string = "models/boulder.glb"
    boulder_02.addComponent(new GLTFShape(boulder_02Path))
    boulder_02.addComponent(new Transform({
        position: new Vector3(20, 1.5, 20.7),
        scale: new Vector3(1.1, .2, 1.1),
        rotation: Quaternion.Euler(0, 90, 180)
}))
engine.addEntity(boulder_02)




//Base Scene - ile
let constant_01 = new Entity()
let constant_01Path:string = "models/basescene_01.glb"
    constant_01.addComponent(new GLTFShape(constant_01Path))
    constant_01.addComponent(new Transform({
        position: new Vector3(0, 0, 0),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(constant_01)


}
