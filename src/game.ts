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
      myMaterial.roughness = 1
      myMaterial.specularIntensity = 0
      myMaterial.metallic = 0

//Material 01 - Cycles white
const material01 = new Material()
      material01.albedoColor = Color3.White()
      material01.metallic = 0
      material01.roughness = 1

      class ColorSystem1 {
                  fraction:number = 0
                  direction: number = 1

                  update(dt:number){
                      this.fraction += this.direction * dt * 0.25
                      if(this.fraction > 1){
                          this.fraction = 1
                          this.direction = -1

                      } else if(this.fraction < 0){
                        this.fraction = 0
                        this.direction = 1

                    }
                      material01.albedoColor = Color4.Lerp(new Color4(3, 3, 3, 1), new Color4(1.5, 1.5, 1.5, .5), this.fraction)
                  }
              }
engine.addSystem(new ColorSystem1())

// water
const water1 = new Entity()
      water1.addComponent(new PlaneShape())
      water1.addComponent(myMaterial)
      water1.addComponent(pond)
      water1.getComponent(PlaneShape).withCollisions = false
      water1.addComponent(new Transform({
          position: new Vector3(32, .5, 160),
          scale: new Vector3(316, 60, 1),
          rotation: Quaternion.Euler(90, 90, 0)
}))
engine.addEntity(water1)

pond.playing = true
pond.loop = true
pond.volume = 0.25
myVideoTexture.play()
myVideoTexture.loop = true

//constant_01
let constant_01 = new Entity()
let constant_01Path:string = "models/basescene_01.glb"
    constant_01.addComponent(new GLTFShape(constant_01Path))
    constant_01.addComponent(new Transform({
        position: new Vector3(0, 0, 0),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(constant_01)



// switch (trigger signifyer)
const switch1 = new Entity()
      switch1.addComponent(new BoxShape())
      switch1.getComponent(BoxShape).withCollisions = false
      switch1.getComponent(BoxShape).visible = true
      switch1.addComponent(material01)
      switch1.addComponent(new Transform({
              position: new Vector3(32, 4, 160),
              scale: new Vector3(2, 2, 2)
}))
engine.addEntity(switch1)

//screen_01
const screen_011 = new Entity()
      screen_011.addComponent(new PlaneShape())
      screen_011.getComponent(PlaneShape).withCollisions = false
      screen_011.addComponent(sheet02)
      screen_011.addComponent(new Transform({
          position: new Vector3(60.9, 41.5, 64),
          scale: new Vector3(121.8, 82, 1),
          rotation: Quaternion.Euler(180, 270, 180)
}))
engine.addEntity(screen_011)

//screen 02
const screen_012 = new Entity()
      screen_012.addComponent(new PlaneShape())
      screen_012.getComponent(PlaneShape).withCollisions = false
      screen_012.addComponent(sheet02)
      screen_012.addComponent(new Transform({
          position: new Vector3(3.1, 41.5, 64),
          scale: new Vector3(121.8, 82, 1),
          rotation: Quaternion.Euler(180, 90, 180)
}))
engine.addEntity(screen_012)

//screen 03
const screen_013 = new Entity()
      screen_013.addComponent(new PlaneShape())
      screen_013.getComponent(PlaneShape).withCollisions = false
      screen_013.addComponent(sheet01)
      screen_013.addComponent(new Transform({
          position: new Vector3(32, 41.5, 124.9),
          scale: new Vector3(57.8, 82, 1),
          rotation: Quaternion.Euler(180, 0, 180)
}))
engine.addEntity(screen_013)

//screen 04
const screen_014 = new Entity()
      screen_014.addComponent(new PlaneShape())
      screen_014.getComponent(PlaneShape).withCollisions = false
      screen_014.addComponent(sheet02)
      screen_014.addComponent(
        new Transform({
          position: new Vector3(32, 41.5, 3.1),
          scale: new Vector3(57.8, 82, 1),
          rotation: Quaternion.Euler(180, 180, 180)
}))
engine.addEntity(screen_014)

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


















//CUBES

//Courtyard 01 (SOUTH)

//cube_01
let cube_01 = new Entity()
let cube_01Path:string = "models/cube_01.glb"
    cube_01.addComponent(new GLTFShape(cube_01Path))
    cube_01.addComponent(new Transform({
        position: new Vector3(51.8, 0, 100.8),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
}))
engine.addEntity(cube_01)

//cube_02
let cube_02 = new Entity()
let cube_02Path:string = "models/cube_01.glb"
    cube_02.addComponent(new GLTFShape(cube_02Path))
    cube_02.addComponent(new Transform({
        position: new Vector3(51.8, 0, 84.8),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
}))
engine.addEntity(cube_02)

//cube_03
let cube_03 = new Entity()
let cube_03Path:string = "models/cube_01.glb"
    cube_03.addComponent(new GLTFShape(cube_03Path))
    cube_03.addComponent(new Transform({
        position: new Vector3(51.8, 0, 68.8),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
}))
engine.addEntity(cube_03)

//cube_04
let cube_04 = new Entity()
let cube_04Path:string = "models/cube_01.glb"
    cube_04.addComponent(new GLTFShape(cube_04Path))
    cube_04.addComponent(new Transform({
        position: new Vector3(51.8, 0, 52.8),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
}))
engine.addEntity(cube_04)

//cube_05
let cube_05 = new Entity()
let cube_05Path:string = "models/cube_01.glb"
    cube_05.addComponent(new GLTFShape(cube_05Path))
    cube_05.addComponent(new Transform({
        position: new Vector3(51.8, 0, 36.8),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
}))
engine.addEntity(cube_05)

//cube_06
let cube_06 = new Entity()
let cube_06Path:string = "models/cube_01.glb"
    cube_06.addComponent(new GLTFShape(cube_06Path))
    cube_06.addComponent(new Transform({
        position: new Vector3(51.8, 0, 20.8),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
}))
engine.addEntity(cube_06)

//cube_07
let cube_07 = new Entity()
let cube_07Path:string = "models/cube_01.glb"
    cube_07.addComponent(new GLTFShape(cube_07Path))
    cube_07.addComponent(new Transform({
        position: new Vector3(36.7, 0, 12.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_07)

//cube_08
let cube_08 = new Entity()
let cube_08Path:string = "models/cube_01.glb"
    cube_08.addComponent(new GLTFShape(cube_08Path))
    cube_08.addComponent(new Transform({
        position: new Vector3(20.7, 0, 12.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_08)

//cube_09
let cube_09 = new Entity()
let cube_09Path:string = "models/cube_01.glb"
    cube_09.addComponent(new GLTFShape(cube_09Path))
    cube_09.addComponent(new Transform({
        position: new Vector3(12.2, 0, 27.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_09)

//cube_10
let cube_10 = new Entity()
let cube_10Path:string = "models/cube_01.glb"
    cube_10.addComponent(new GLTFShape(cube_10Path))
    cube_10.addComponent(new Transform({
        position: new Vector3(12.2, 0, 43.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_10)

//cube_11
let cube_11 = new Entity()
let cube_11Path:string = "models/cube_01.glb"
    cube_11.addComponent(new GLTFShape(cube_11Path))
    cube_11.addComponent(new Transform({
        position: new Vector3(12.2, 0, 59.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_11)

//cube_12
let cube_12 = new Entity()
let cube_12Path:string = "models/cube_01.glb"
    cube_12.addComponent(new GLTFShape(cube_12Path))
    cube_12.addComponent(new Transform({
        position: new Vector3(12.2, 0, 75.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_12)

//cube_13
let cube_13 = new Entity()
let cube_13Path:string = "models/cube_01.glb"
    cube_13.addComponent(new GLTFShape(cube_13Path))
    cube_13.addComponent(new Transform({
        position: new Vector3(12.2, 0, 91.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_13)

//cube_14
let cube_14 = new Entity()
let cube_14Path:string = "models/cube_01.glb"
    cube_14.addComponent(new GLTFShape(cube_14Path))
    cube_14.addComponent(new Transform({
        position: new Vector3(12.2, 0, 107.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_14)





//Courtyard 02 (NORTH)


//cube_15
let cube_15 = new Entity()
let cube_15Path:string = "models/cube_02.glb"
    cube_15.addComponent(new GLTFShape(cube_15Path))
    cube_15.addComponent(new Transform({
        position: new Vector3(9.8, -.125, 215.8),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
}))
engine.addEntity(cube_15)

//cube_16
let cube_16 = new Entity()
let cube_16Path:string = "models/cube_02.glb"
    cube_16.addComponent(new GLTFShape(cube_16Path))
    cube_16.addComponent(new Transform({
        position: new Vector3(9.8, -.125, 231.8),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
}))
engine.addEntity(cube_16)

//cube_17
let cube_17 = new Entity()
let cube_17Path:string = "models/cube_02.glb"
    cube_17.addComponent(new GLTFShape(cube_17Path))
    cube_17.addComponent(new Transform({
        position: new Vector3(9.8, -.125, 247.8),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
}))
engine.addEntity(cube_17)

//cube_18
let cube_18 = new Entity()
let cube_18Path:string = "models/cube_02.glb"
    cube_18.addComponent(new GLTFShape(cube_18Path))
    cube_18.addComponent(new Transform({
        position: new Vector3(9.8, -.125, 263.8),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
}))
engine.addEntity(cube_18)

//cube_19
let cube_19 = new Entity()
let cube_19Path:string = "models/cube_02.glb"
    cube_19.addComponent(new GLTFShape(cube_19Path))
    cube_19.addComponent(new Transform({
        position: new Vector3(9.8, -.125, 279.8),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
}))
engine.addEntity(cube_19)

//cube_20
let cube_20 = new Entity()
let cube_20Path:string = "models/cube_02.glb"
    cube_20.addComponent(new GLTFShape(cube_20Path))
    cube_20.addComponent(new Transform({
        position: new Vector3(9.8, -.125, 295.8),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
}))
engine.addEntity(cube_20)

//cube_21
let cube_21 = new Entity()
let cube_21Path:string = "models/cube_02.glb"
    cube_21.addComponent(new GLTFShape(cube_21Path))
    cube_21.addComponent(new Transform({
        position: new Vector3(23.8, -.125, 310.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_21)

//cube_22
let cube_22 = new Entity()
let cube_22Path:string = "models/cube_02.glb"
    cube_22.addComponent(new GLTFShape(cube_22Path))
    cube_22.addComponent(new Transform({
        position: new Vector3(39.8, -.125, 310.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_22)

//cube_23
let cube_23 = new Entity()
let cube_23Path:string = "models/cube_02.glb"
    cube_23.addComponent(new GLTFShape(cube_23Path))
    cube_23.addComponent(new Transform({
        position: new Vector3(54.2, -.125, 296.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_23)

//cube_24
let cube_24 = new Entity()
let cube_24Path:string = "models/cube_02.glb"
    cube_24.addComponent(new GLTFShape(cube_24Path))
    cube_24.addComponent(new Transform({
        position: new Vector3(54.2, -.125, 280.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_24)

//cube_25
let cube_25 = new Entity()
let cube_25Path:string = "models/cube_02.glb"
    cube_25.addComponent(new GLTFShape(cube_25Path))
    cube_25.addComponent(new Transform({
        position: new Vector3(54.2, -.125, 264.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_25)

//cube_26
let cube_26 = new Entity()
let cube_26Path:string = "models/cube_02.glb"
    cube_26.addComponent(new GLTFShape(cube_26Path))
    cube_26.addComponent(new Transform({
        position: new Vector3(54.2, -.125, 248.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_26)

//cube_27
let cube_27 = new Entity()
let cube_27Path:string = "models/cube_02.glb"
    cube_27.addComponent(new GLTFShape(cube_27Path))
    cube_27.addComponent(new Transform({
        position: new Vector3(54.2, -.125, 232.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_27)

//cube_28
let cube_28 = new Entity()
let cube_28Path:string = "models/cube_02.glb"
    cube_28.addComponent(new GLTFShape(cube_28Path))
    cube_28.addComponent(new Transform({
        position: new Vector3(54.2, -.125, 216.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_28)
