export function createSoundScapeScene() {

//SOUNDS
const sound03 = new AudioClip("sounds/D.I.E.T.R.I.C.H. - P R O V I D E N C I A - 04 SEOUL 1988.mp3")
const pond = new AudioSource(sound03)

//water
const plane = new PlaneShape()
      plane.uvs = setUVs(4, 20)

const main = new Entity()
      main.addComponent(plane)
      main.addComponent(pond)
      main.getComponent(PlaneShape).withCollisions = false
      main.getComponent(PlaneShape).visible = false
      main.addComponent(new Transform({
          position: new Vector3(32, 5, 160 ),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
engine.addEntity(main)


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

}
