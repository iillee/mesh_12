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
          position: new Vector3(32, 60, 160 ),
          scale: new Vector3(60, 60, 1),
          rotation: Quaternion.Euler(270, 180, 0)
}))
engine.addEntity(artists)

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
