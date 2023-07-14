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
let constant_01Path:string = "models/basescene_01.glb"
    constant_01.addComponent(new GLTFShape(constant_01Path))
    constant_01.addComponent(new Transform({
        position: new Vector3(0, 0, 0),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(constant_01)


}
