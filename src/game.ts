import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'

//video Clips
const myVideoClip = new VideoClip("videos/PIXEL2.mp4")
const aiscape_01= new VideoClip("videos/TAIGA_01.mp4")
const aiscape_02= new VideoClip("videos/TAIGA_02.mp4")

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




//Shells

let shellPath:string = "models/shell_01.glb"

//Courtyard 01 (SOUTH)

//shell_01
let shell_01 = new Entity()
    shell_01.addComponent(new GLTFShape(shellPath))
    shell_01.addComponent(new Transform({
        position: new Vector3(48, 0, 96),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    shell_01.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_01)

//shell_02
let shell_02 = new Entity()
    shell_02.addComponent(new GLTFShape(shellPath))
    shell_02.addComponent(new Transform({
        position: new Vector3(48, 0, 80),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    shell_02.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_02)

//shell_03
let shell_03 = new Entity()
    shell_03.addComponent(new GLTFShape(shellPath))
    shell_03.addComponent(new Transform({
        position: new Vector3(48, 0, 64),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    shell_03.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_03)

//shell_04
let shell_04 = new Entity()
    shell_04.addComponent(new GLTFShape(shellPath))
    shell_04.addComponent(new Transform({
        position: new Vector3(48, 0, 48),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    shell_04.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_04)

//shell_05
let shell_05 = new Entity()
    shell_05.addComponent(new GLTFShape(shellPath))
    shell_05.addComponent(new Transform({
        position: new Vector3(48, 0, 32),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    shell_05.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_05)

//shell_06
let shell_06 = new Entity()
    shell_06.addComponent(new GLTFShape(shellPath))
    shell_06.addComponent(new Transform({
        position: new Vector3(48, 0, 16),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    shell_06.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_06)

//shell_07
let shell_07 = new Entity()
    shell_07.addComponent(new GLTFShape(shellPath))
    shell_07.addComponent(new Transform({
        position: new Vector3(32, 0, 16),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
    }))
    shell_07.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_07)

//shell_08
let shell_08 = new Entity()
    shell_08.addComponent(new GLTFShape(shellPath))
    shell_08.addComponent(new Transform({
        position: new Vector3(16, 0, 16),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 270, 0)
    }))
    shell_08.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_08)

//shell_09
let shell_09 = new Entity()
    shell_09.addComponent(new GLTFShape(shellPath))
    shell_09.addComponent(new Transform({
        position: new Vector3(16, 0, 32),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    shell_09.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_09)

//shell_10
let shell_10 = new Entity()
    shell_10.addComponent(new GLTFShape(shellPath))
    shell_10.addComponent(new Transform({
        position: new Vector3(16, 0, 48),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    shell_10.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_10)

//shell_11
let shell_11 = new Entity()
    shell_11.addComponent(new GLTFShape(shellPath))
    shell_11.addComponent(new Transform({
        position: new Vector3(16, 0, 64),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    shell_11.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_11)

//shell_12
let shell_12 = new Entity()
    shell_12.addComponent(new GLTFShape(shellPath))
    shell_12.addComponent(new Transform({
        position: new Vector3(16, 0, 80),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    shell_12.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_12)

//shell_13
let shell_13 = new Entity()
    shell_13.addComponent(new GLTFShape(shellPath))
    shell_13.addComponent(new Transform({
        position: new Vector3(16, 0, 96),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    shell_13.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_13)

//shell_14
let shell_14 = new Entity()
    shell_14.addComponent(new GLTFShape(shellPath))
    shell_14.addComponent(new Transform({
        position: new Vector3(16, 0, 112),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    shell_14.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_14)


//Courtyard 02 (NORTH)


//shell_15
let shell_15 = new Entity()
    shell_15.addComponent(new GLTFShape(shellPath))
    shell_15.addComponent(new Transform({
        position: new Vector3(16, 0, 224),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    shell_15.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_15)

//shell_16
let shell_16 = new Entity()
    shell_16.addComponent(new GLTFShape(shellPath))
    shell_16.addComponent(new Transform({
        position: new Vector3(16, 0, 240),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    shell_16.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_16)

//shell_17
let shell_17 = new Entity()
    shell_17.addComponent(new GLTFShape(shellPath))
    shell_17.addComponent(new Transform({
        position: new Vector3(16, 0, 256),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    shell_17.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_17)

//shell_18
let shell_18 = new Entity()
    shell_18.addComponent(new GLTFShape(shellPath))
    shell_18.addComponent(new Transform({
        position: new Vector3(16, 0, 272),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    shell_18.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_18)

//shell_19
let shell_19 = new Entity()
    shell_19.addComponent(new GLTFShape(shellPath))
    shell_19.addComponent(new Transform({
        position: new Vector3(16, 0, 288),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    shell_19.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_19)

//shell_20
let shell_20 = new Entity()
    shell_20.addComponent(new GLTFShape(shellPath))
    shell_20.addComponent(new Transform({
        position: new Vector3(16, 0, 304),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    shell_20.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_20)

//shell_21
let shell_21 = new Entity()
    shell_21.addComponent(new GLTFShape(shellPath))
    shell_21.addComponent(new Transform({
        position: new Vector3(32, 0, 304),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
    }))
    shell_21.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_21)

//shell_22
let shell_22 = new Entity()
    shell_22.addComponent(new GLTFShape(shellPath))
    shell_22.addComponent(new Transform({
        position: new Vector3(48, 0, 304),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
    }))
    shell_22.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_22)

//shell_23
let shell_23 = new Entity()
    shell_23.addComponent(new GLTFShape(shellPath))
    shell_23.addComponent(new Transform({
        position: new Vector3(48, 0, 288),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    shell_23.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_23)

//shell_24
let shell_24 = new Entity()
    shell_24.addComponent(new GLTFShape(shellPath))
    shell_24.addComponent(new Transform({
        position: new Vector3(48, 0, 272),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    shell_24.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_24)

//shell_25
let shell_25 = new Entity()
    shell_25.addComponent(new GLTFShape(shellPath))
    shell_25.addComponent(new Transform({
        position: new Vector3(48, 0, 256),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    shell_25.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_25)

//shell_26
let shell_26 = new Entity()
    shell_26.addComponent(new GLTFShape(shellPath))
    shell_26.addComponent(new Transform({
        position: new Vector3(48, 0, 240),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    shell_26.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_26)

//shell_27
let shell_27 = new Entity()
    shell_27.addComponent(new GLTFShape(shellPath))
    shell_27.addComponent(new Transform({
        position: new Vector3(48, 0, 224),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    shell_27.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_27)

//shell_28
let shell_28 = new Entity()
    shell_28.addComponent(new GLTFShape(shellPath))
    shell_28.addComponent(new Transform({
        position: new Vector3(48, 0, 208),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    shell_28.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://www.atlasofplaces.com/architecture/usaf-aircraft-hangar/")
    }))
engine.addEntity(shell_28)
















//CUBES

//Courtyard 01 (SOUTH)

//cube_01 Stephan Duquesnoy
let cube_01 = new Entity()
let cube_01Path:string = "models/STEPHANe.glb"
    cube_01.addComponent(new GLTFShape(cube_01Path))
    cube_01.addComponent(new Transform({
        position: new Vector3(52.5, 0, 104.05),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_01)


//cube_02 Hannes Hummel without emission
let cube_02 = new Entity()
let cube_02Path:string = "models/HANNES.glb"
    cube_02.addComponent(new GLTFShape(cube_02Path))
    cube_02.addComponent(new Transform({
        position: new Vector3(52.5, 0, 88.05),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_02)

//cube_03 Hannes Hummel emission
let cube_03 = new Entity()
let cube_03Path:string = "models/HANNESe.glb"
    cube_03.addComponent(new GLTFShape(cube_03Path))
    cube_03.addComponent(new Transform({
        position: new Vector3(52.7, 0, 72.05),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_03)

//cube_04 Mellowmann
let cube_04 = new Entity()
let cube_04Path:string = "models/MELLOWMANN.glb"
    cube_04.addComponent(new GLTFShape(cube_04Path))
    cube_04.addComponent(new Transform({
        position: new Vector3(54.4, 0, 56.15),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_04)

//cube_05 Melody Owen
let cube_05 = new Entity()
let cube_05Path:string = "models/MELODY.glb"
    cube_05.addComponent(new GLTFShape(cube_05Path))
    cube_05.addComponent(new Transform({
        position: new Vector3(52.5, 0, 40.05),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_05)

//cube_06 Linda	Loh
let cube_06 = new Entity()
let cube_06Path:string = "models/LINDA.glb"
    cube_06.addComponent(new GLTFShape(cube_06Path))
    cube_06.addComponent(new Transform({
        position: new Vector3(52.5, 0, 24.05),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_06)

//cube_07 warrragwag
let cube_07 = new Entity()
let cube_07Path:string = "models/WARR.glb"
    cube_07.addComponent(new GLTFShape(cube_07Path))
    cube_07.addComponent(new Transform({
        position: new Vector3(40.05, 0, 11.5),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_07)

//cube_08 Martínez	Siesta
let cube_08 = new Entity()
let cube_08Path:string = "models/SIESTA.glb"
    cube_08.addComponent(new GLTFShape(cube_08Path))
    cube_08.addComponent(new Transform({
        position: new Vector3(20.7, 0, 12.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_08)

//cube_09 Mango
let cube_09 = new Entity()
let cube_09Path:string = "models/MANGO.glb"
    cube_09.addComponent(new GLTFShape(cube_09Path))
    cube_09.addComponent(new Transform({
        position: new Vector3(11.7, 0, 25.6),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_09)

//cube_10 MickRenders
let cube_10 = new Entity()
let cube_10Path:string = "models/MICK.glb"
    cube_10.addComponent(new GLTFShape(cube_10Path))
    cube_10.addComponent(new Transform({
        position: new Vector3(11.35, .65, 40.1),
        scale: new Vector3(.95, .95, .95),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(cube_10)

//cube_11 Michelle Brown
let cube_11 = new Entity()
let cube_11Path:string = "models/MICHELLE.glb"
    cube_11.addComponent(new GLTFShape(cube_11Path))
    cube_11.addComponent(new Transform({
        position: new Vector3(11.35, 0, 56),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(cube_11)

//cube_12 Dev Harlan
let cube_12 = new Entity()
let cube_12Path:string = "models/DEV.glb"
    cube_12.addComponent(new GLTFShape(cube_12Path))
    cube_12.addComponent(new Transform({
        position: new Vector3(9.6, 0, 73.8 ),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(cube_12)

//cube_13 Tripura
let cube_13 = new Entity()
let cube_13Path:string = "models/TRIPURA.glb"
    cube_13.addComponent(new GLTFShape(cube_13Path))
    cube_13.addComponent(new Transform({
        position: new Vector3(11.35, 0, 88),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
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


// SOUND BOXES

/// Audio cube_04 Mellowmann
//create audio clip and source
const clip_04 = new AudioClip("sounds/MMSOUND.mp3")
const source_04 = new AudioSource(clip_04)

//Add audio source to the main cube GLB file (so position is good)
cube_04.addComponent(source_04)

// Audio can loop, true or false, change volume here too
source_04.loop = true
source_04.volume = 10


// Create TriggerBox for audio to play only inside the cube

const trigger_04 = new Entity();
trigger_04.addComponent(new BoxShape()),
trigger_04.getComponent(BoxShape).withCollisions = false
trigger_04.getComponent(BoxShape).visible = false


trigger_04.addComponent(new Transform({
  position: new Vector3(54.4, 0, 56.15)
}));

let triggerBox_04 = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

trigger_04.addComponent(
  new utils.TriggerComponent(
    triggerBox_04,
    {
      onCameraEnter : () => {
        log('play audio')
        source_04.playing = true
      },
      onCameraExit : () => {
        log('stop audio')
        source_04.playing = false
    },

  //enableDebug: true
      }
  )
)
log('added new triggerbox')
engine.addEntity(trigger_04)



/// Audio cube_09 Mango
//create audio clip and source

const clip_09 = new AudioClip("sounds/HEART.mp3")
const source_09 = new AudioSource(clip_09)

//Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
cube_09.addComponent(source_09)

// Audio can loop, true or false, change volume here too
source_09.loop = true
source_09.volume = 10


// Create TriggerBox for audio to play only inside the cube

const trigger_09 = new Entity();
trigger_09.addComponent(new BoxShape()),
trigger_09.getComponent(BoxShape).withCollisions = false
trigger_09.getComponent(BoxShape).visible = false


trigger_09.addComponent(new Transform({
  position: new Vector3(11.7, 0, 25.6)
}));

let triggerBox_09 = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

trigger_09.addComponent(
  new utils.TriggerComponent(
    triggerBox_09,
    {
      onCameraEnter : () => {
        log('play audio')
        source_09.playing = true
      },
      onCameraExit : () => {
        log('stop audio')
        source_09.playing = false
    },

  //enableDebug: true
      }
  )
)
log('added new triggerbox')
engine.addEntity(trigger_09)
