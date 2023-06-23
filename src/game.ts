import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'

//video Clips
const myVideoClip = new VideoClip("videos/water.mp4")
const aiscape_01= new VideoClip("videos/aiscape_01.mp4")
const aiscape_02= new VideoClip("videos/aiscape_02.mp4")

const myVideoTexture = new VideoTexture(myVideoClip)
const myVideoTexture2 = new VideoTexture(aiscape_01)
const myVideoTexture3 = new VideoTexture(aiscape_02)

//alpha layers
const alphaTexture2 = new Texture("images/alpha.png")
const alpharotate = new Texture("images/alpha_05r.png")
const alphafadeup = new Texture("images/alpha_05d.png")

//sounds
const sound01 = new AudioClip("sounds/button.mp3")
const click = new AudioSource(sound01)
const sound03 = new AudioClip("sounds/pond.mp3")
const pond = new AudioSource(sound03)

//Materials

// aiscape

const sheet01 = new Material()
      sheet01.albedoTexture = myVideoTexture2
      sheet01.castShadows = false
      sheet01.alphaTexture = alphafadeup
      sheet01.roughness = 0
      sheet01.specularIntensity = 0
      sheet01.metallic = -3

// aiscape
const sheet02 = new Material()
      sheet02.albedoTexture = myVideoTexture2
      sheet02.castShadows = false
      sheet02.alphaTexture = alpharotate
      sheet02.roughness = 0
      sheet02.specularIntensity = 0
      sheet02.metallic = -3

// aiscape
const sheet03 = new Material()
      sheet03.albedoTexture = myVideoTexture3
      sheet03.castShadows = false
      sheet03.alphaTexture = alpharotate
      sheet03.roughness = 0
      sheet03.specularIntensity = 0
      sheet03.metallic = -3

// aiscape
const sheet04 = new Material()
      sheet04.albedoTexture = myVideoTexture3
      sheet04.castShadows = false
      sheet04.alphaTexture = alphafadeup
      sheet04.roughness = 0
      sheet04.specularIntensity = 0
      sheet04.metallic = -3

// Water
const myMaterial = new Material()
      myMaterial.albedoTexture = myVideoTexture
      myMaterial.alphaTexture = alphaTexture2
      myMaterial.roughness = .05
      myMaterial.specularIntensity = 1
      myMaterial.metallic = -1

// water
const pondwater1 = new Entity()
      pondwater1.addComponent(new PlaneShape())
      pondwater1.addComponent(myMaterial)
      pondwater1.addComponent(pond)
      pondwater1.getComponent(PlaneShape).withCollisions = false
      pondwater1.addComponent(new Transform({
          position: new Vector3(32, .425, 160),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
engine.addEntity(pondwater1)

myVideoTexture.play()
myVideoTexture.loop = true

//constant_01
let constant_01 = new Entity()
let constant_01Path:string = "models/cubes_02.glb"
    constant_01.addComponent(new GLTFShape(constant_01Path))
    constant_01.addComponent(new Transform({
        position: new Vector3(0, 0, 0),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(constant_01)

//constant_02
let constant_02 = new Entity()
let constant_02Path:string = "models/cubes_03.glb"
    constant_02.addComponent(new GLTFShape(constant_02Path))
    constant_02.addComponent(new Transform({
        position: new Vector3(0, 0, 0),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(constant_02)

//screen_01
const screen_031 = new Entity()
      screen_031.addComponent(new PlaneShape())
      screen_031.getComponent(PlaneShape).withCollisions = false
      screen_031.addComponent(sheet02)
      screen_031.addComponent(new Transform({
          position: new Vector3(60.9, 41.5, 64),
          scale: new Vector3(121.8, 82, 1),
          rotation: Quaternion.Euler(180, 270, 180)
}))
engine.addEntity(screen_031)

//screen 02
const screen_032 = new Entity()
      screen_032.addComponent(new PlaneShape())
      screen_032.getComponent(PlaneShape).withCollisions = false
      screen_032.addComponent(sheet02)
      screen_032.addComponent(new Transform({
          position: new Vector3(3.1, 41.5, 64),
          scale: new Vector3(121.8, 82, 1),
          rotation: Quaternion.Euler(180, 90, 180)
}))
engine.addEntity(screen_032)

//screen 03
const screen_033 = new Entity()
      screen_033.addComponent(new PlaneShape())
      screen_033.getComponent(PlaneShape).withCollisions = false
      screen_033.addComponent(sheet01)
      screen_033.addComponent(new Transform({
          position: new Vector3(32, 41.5, 124.9),
          scale: new Vector3(57.8, 82, 1),
          rotation: Quaternion.Euler(180, 0, 180)
}))
engine.addEntity(screen_033)

//screen 04
const screen_034 = new Entity()
      screen_034.addComponent(new PlaneShape())
      screen_034.getComponent(PlaneShape).withCollisions = false
      screen_034.addComponent(sheet02)
      screen_034.addComponent(
        new Transform({
          position: new Vector3(32, 41.5, 3.1),
          scale: new Vector3(57.8, 82, 1),
          rotation: Quaternion.Euler(180, 180, 180)
}))
engine.addEntity(screen_034)

myVideoTexture2.play()
myVideoTexture2.loop = true


//screen_05
const screen_021 = new Entity()
      screen_021.addComponent(new PlaneShape())
      screen_021.getComponent(PlaneShape).withCollisions = false
      screen_021.addComponent(sheet03)
      screen_021.addComponent(new Transform({
          position: new Vector3(60.9, 41.5, 256),
          scale: new Vector3(121.8, 82, 1),
          rotation: Quaternion.Euler(180, 270, 180)
}))
engine.addEntity(screen_021)

//screen 06
const screen_022 = new Entity()
    screen_022.addComponent(new PlaneShape())
    screen_022.getComponent(PlaneShape).withCollisions = false
    screen_022.addComponent(sheet03)
    screen_022.addComponent(new Transform({
        position: new Vector3(3.1, 41.5, 256),
        scale: new Vector3(121.8, 82, 1),
        rotation: Quaternion.Euler(180, 90, 180)
}))
engine.addEntity(screen_022)

//screen 07
const screen_023 = new Entity()
      screen_023.addComponent(new PlaneShape())
      screen_023.getComponent(PlaneShape).withCollisions = false
      screen_023.addComponent(sheet03)
      screen_023.addComponent(new Transform({
          position: new Vector3(32, 40, 316.9),
          scale: new Vector3(57.8, 80, 1),
          rotation: Quaternion.Euler(180, 0, 180)
}))
engine.addEntity(screen_023)

//screen 08
const screen_024 = new Entity()
      screen_024.addComponent(new PlaneShape())
      screen_024.getComponent(PlaneShape).withCollisions = false
      screen_024.addComponent(sheet04)
      screen_024.addComponent(
        new Transform({
          position: new Vector3(32, 41.5, 195.1),
          scale: new Vector3(57.8, 82, 1),
          rotation: Quaternion.Euler(180, 180, 180)
}))
engine.addEntity(screen_024)

myVideoTexture3.play()
myVideoTexture3.loop = true
