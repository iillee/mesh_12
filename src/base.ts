export function createBaseScene() {
  
//artist names - ile
let artists = new Entity()
let artistsPath:string = "models/artists.glb"
    artists.addComponent(new GLTFShape(artistsPath))
    artists.addComponent(new Transform({
        position: new Vector3(32, 35, 160),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(artists)

//Base Scene - ile
let constant_01 = new Entity()
let constant_01Path:string = "models/basescene_02.glb"
    constant_01.addComponent(new GLTFShape(constant_01Path))
    constant_01.addComponent(new Transform({
        position: new Vector3(0, 0, 0),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(constant_01)

//Boulder_01
let boulder_01 = new Entity()
let boulder_01Path:string = "models/boulder.glb"
    boulder_01.addComponent(new GLTFShape(boulder_01Path))
    boulder_01.addComponent(new Transform({
        position: new Vector3(14, -2, 172),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(boulder_01)

//Boulder_02
let boulder_02 = new Entity()
let boulder_02Path:string = "models/boulder.glb"
    boulder_02.addComponent(new GLTFShape(boulder_02Path))
    boulder_02.addComponent(new Transform({
        position: new Vector3(14, -1, 144),
        scale: new Vector3(.6, .6, .6),
        rotation: Quaternion.Euler(0, 40, 0)
}))
engine.addEntity(boulder_02)

//Boulder_03
let boulder_03 = new Entity()
let boulder_03Path:string = "models/boulder.glb"
    boulder_03.addComponent(new GLTFShape(boulder_03Path))
    boulder_03.addComponent(new Transform({
        position: new Vector3(52, -1, 140),
        scale: new Vector3(.8, .8, .8),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(boulder_03)


}
