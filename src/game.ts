

//IMPORTS
import * as utils from '@dcl/ecs-scene-utils';
import { createTripuraScene } from './tripura';
import { createDanScene } from './dan';
import { createAlexScene } from './alex';
import { createCKScene } from './ck';
import { createDevVideoScene } from './devVideo';
import { createMicahScene } from './micah';
import { movePlayerTo } from '@decentraland/RestrictedActions'

// INIT SCENES
createCKScene();
createAlexScene();
createDanScene();
createTripuraScene();
createDevVideoScene();
createMicahScene();

//VIDEO CLIPS
const watermp4 = new VideoClip("videos/water.mp4")
const aiscape_01= new VideoClip("videos/TAIGA_01.mp4")
const aiscape_02= new VideoClip("videos/TAIGA_02.mp4")

//VIDEO TEXTURES
const waterTexture = new VideoTexture(watermp4)
const taigaTexture1 = new VideoTexture(aiscape_01, { wrap: 1, samplingMode: 1 })
const taigaTexture2 = new VideoTexture(aiscape_02)



//ALPHA LAYERS
const semiTransparent = new Texture("images/alpha_transparent.png")
const fade = new Texture("images/alpha_fade.png")
const fadeDoorway = new Texture("images/alpha_doorway.png")

//SOUNDS
const sound01 = new AudioClip("sounds/button.mp3")
const click = new AudioSource(sound01)
const sound03 = new AudioClip("sounds/pond.mp3")
const pond = new AudioSource(sound03)

//MATERIALS

// aiscape
const sheet01 = new Material()
      sheet01.albedoTexture = taigaTexture1
      sheet01.alphaTexture = fadeDoorway
      sheet01.roughness = 0
      sheet01.specularIntensity = 0
      sheet01.metallic = -3

// aiscape
const sheet02 = new Material()
      sheet02.albedoTexture = taigaTexture1
      sheet02.alphaTexture = fade
      sheet02.roughness = 0
      sheet02.specularIntensity = 0
      sheet02.metallic = -3

// aiscape
const sheet03 = new Material()
      sheet03.albedoTexture = taigaTexture2
      sheet03.alphaTexture = fade
      sheet03.roughness = 0
      sheet03.specularIntensity = 0
      sheet03.metallic = -3

// aiscape
const sheet04 = new Material()
      sheet04.albedoTexture = taigaTexture2
      sheet04.alphaTexture = fadeDoorway
      sheet04.roughness = 0
      sheet04.specularIntensity = 0
      sheet04.metallic = -3

// Water
const waterMaterial = new Material()
      waterMaterial.castShadows = false
      waterMaterial.albedoTexture = waterTexture
      waterMaterial.alphaTexture = semiTransparent
      waterMaterial.roughness = 1
      waterMaterial.specularIntensity = 0
      waterMaterial.metallic = -2


const point1 = new Vector3(32, .66, 160)
const point2 = new Vector3(32, .8, 160)


const myPath = new Path3D([point1, point2])

@Component("pathData")
export class PathData {
  origin: Vector3 = myPath.path[0]
  target: Vector3 = myPath.path[1]
  fraction: number = 0
  nextPathIndex: number = 1
}

export class PatrolPath implements ISystem {
  update(dt: number) {
    let transform = water1.getComponent(Transform)
    let path = water1.getComponent(PathData)
    if (path.fraction < 1) {
      transform.position = Vector3.Lerp(path.origin, path.target, path.fraction)
      path.fraction += dt / 6
    } else {
      path.nextPathIndex += 1
      if (path.nextPathIndex >= myPath.path.length) {
        path.nextPathIndex = 0
      }
      path.origin = path.target
      path.target = myPath.path[path.nextPathIndex]
      path.fraction = 0
    }
  }
}

engine.addSystem(new PatrolPath())

//water
const water1 = new Entity()
const plane = new PlaneShape()
      water1.addComponent(plane)

      water1.addComponent(pond)
      water1.getComponent(PlaneShape).withCollisions = false
      water1.getComponent(PlaneShape).visible = true
      water1.addComponent(new PathData())
      water1.addComponent(new Transform({
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

//screen_01
const screen_01 = new Entity()
      screen_01.addComponent(new PlaneShape())
      screen_01.getComponent(PlaneShape).withCollisions = false
      screen_01.addComponent(sheet02)
      screen_01.addComponent(new Transform({
          position: new Vector3(60.9, 41.5, 64),
          scale: new Vector3(121.8, 82, 1),
          rotation: Quaternion.Euler(180, 270, 180)
}))
engine.addEntity(screen_01)

//screen 02
const screen_02 = new Entity()
      screen_02.addComponent(new PlaneShape())
      screen_02.getComponent(PlaneShape).withCollisions = false
      screen_02.addComponent(sheet02)
      screen_02.addComponent(new Transform({
          position: new Vector3(3.1, 41.5, 64),
          scale: new Vector3(121.8, 82, 1),
          rotation: Quaternion.Euler(180, 90, 180)
}))
engine.addEntity(screen_02)

//screen 03
const screen_03 = new Entity()
      screen_03.addComponent(new PlaneShape())
      screen_03.getComponent(PlaneShape).withCollisions = false
      screen_03.addComponent(sheet01)
      screen_03.addComponent(new Transform({
          position: new Vector3(32, 41.5, 124.9),
          scale: new Vector3(57.8, 82, 1),
          rotation: Quaternion.Euler(180, 0, 180)
}))
engine.addEntity(screen_03)

//screen 04
const screen_04 = new Entity()
      screen_04.addComponent(new PlaneShape())
      screen_04.getComponent(PlaneShape).withCollisions = false
      screen_04.addComponent(sheet02)
      screen_04.addComponent(
        new Transform({
          position: new Vector3(32, 41.5, 3.1),
          scale: new Vector3(57.8, 82, 1),
          rotation: Quaternion.Euler(180, 180, 180)
}))
engine.addEntity(screen_04)

taigaTexture1.play()
taigaTexture1.loop = true

//screen_05
const screen_05 = new Entity()
      screen_05.addComponent(new PlaneShape())
      screen_05.getComponent(PlaneShape).withCollisions = false
      screen_05.addComponent(sheet03)
      screen_05.addComponent(new Transform({
          position: new Vector3(60.9, 41.5, 256),
          scale: new Vector3(121.8, 82, 1),
          rotation: Quaternion.Euler(180, 270, 180)
}))
engine.addEntity(screen_05)

//screen 06
const screen_06 = new Entity()
      screen_06.addComponent(new PlaneShape())
      screen_06.getComponent(PlaneShape).withCollisions = false
      screen_06.addComponent(sheet03)
      screen_06.addComponent(new Transform({
          position: new Vector3(3.1, 41.5, 256),
          scale: new Vector3(121.8, 82, 1),
          rotation: Quaternion.Euler(180, 90, 180)
}))
engine.addEntity(screen_06)

//screen 07
const screen_07 = new Entity()
      screen_07.addComponent(new PlaneShape())
      screen_07.getComponent(PlaneShape).withCollisions = false
      screen_07.addComponent(sheet03)
      screen_07.addComponent(new Transform({
          position: new Vector3(32, 40, 316.9),
          scale: new Vector3(57.8, 80, 1),
          rotation: Quaternion.Euler(180, 0, 180)
}))
engine.addEntity(screen_07)

//screen 08
const screen_08 = new Entity()
      screen_08.addComponent(new PlaneShape())
      screen_08.getComponent(PlaneShape).withCollisions = false
      screen_08.addComponent(sheet04)
      screen_08.addComponent(
        new Transform({
          position: new Vector3(32, 41.5, 195.1),
          scale: new Vector3(57.8, 82, 1),
          rotation: Quaternion.Euler(180, 180, 180)
}))
engine.addEntity(screen_08)

taigaTexture2.play()
taigaTexture2.loop = true




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
    },
    {
          hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
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
      },
      {
            hoverText: "ARTIST NAME website"
      }))
engine.addEntity(shell_28)



/*
//CHANNEL TRIGGERS

//Channel Trigger 01
const trigger_01 = new Entity()
      trigger_01.addComponent(new PlaneShape())
      trigger_01.getComponent(PlaneShape).withCollisions = false
      trigger_01.getComponent(PlaneShape).visible = false
      trigger_01.addComponent(new Transform({
        position: new Vector3(32, 4, 126),
        scale: new Vector3(16, 8, 1),
        rotation: Quaternion.Euler(0, 0, 0)
      }))
      let triggerBox01 = new utils.TriggerBoxShape(new Vector3(16, 8, .5))
      trigger_01.addComponent(
        new utils.TriggerComponent(
          triggerBox01,
        {
         // enableDebug: false,
          //onCameraExit :() => {
            //log('triggered!')
            //channel_01.getComponent(utils.ToggleComponent).toggle()}
      }))
engine.addEntity(trigger_01)

//Channel Trigger 02
const trigger_02 = new Entity()
      trigger_02.addComponent(new PlaneShape())
      trigger_02.getComponent(PlaneShape).withCollisions = false
      trigger_02.getComponent(PlaneShape).visible = false
      trigger_02.addComponent(new Transform({
        position: new Vector3(32, 4, 194),
        scale: new Vector3(16, 8, 1),
        rotation: Quaternion.Euler(0, 0, 0)
      }))
      let triggerBox02 = new utils.TriggerBoxShape(new Vector3(16, 8, .5))
      trigger_02.addComponent(
        new utils.TriggerComponent(
          triggerBox02,
        {
          //enableDebug: false,
          //onCameraExit :() => {
          //  log('triggered!')
          //  channel_02.getComponent(utils.ToggleComponent).toggle()}
      }))
engine.addEntity(trigger_02)

*/









//CUBES

//Courtyard 01 (SOUTH)

//Channel 01 - Parent
//let channel_01 = new Entity()
    //channel_01.addComponent(
    //    new utils.ToggleComponent(utils.ToggleState.On, value => {
    //        engine.addEntity(channel_01)
   // }))

        //cube_01 Stephan Duquesnoyc
        let cube_01 = new Entity()
        let cube_01Path:string = "models/STEPHAN.glb"
            cube_01.addComponent(new GLTFShape(cube_01Path))
            cube_01.addComponent(new Transform({
                position: new Vector3(52.5, 0, 104.04),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 0, 0)
        }))
        engine.addEntity(cube_01)

        //cube_02 V4W2
        let cube_02 = new Entity()
        let cube_02Path:string = "models/V4W.glb"
            cube_02.addComponent(new GLTFShape(cube_02Path))
            cube_02.addComponent(new Transform({
                position: new Vector3(52.5, 0, 88.04),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 0, 0)
        }))
        engine.addEntity(cube_02)

        //cube_03 Hannes Hummel
        let cube_03 = new Entity()
        let cube_03Path:string = "models/HANNES2.glb"
            cube_03.addComponent(new GLTFShape(cube_03Path))
            cube_03.addComponent(new Transform({
                position: new Vector3(52.5, 0, 72.05),
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
                position: new Vector3(9.6, 0, 73.8),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 180, 0)
        }))
        engine.addEntity(cube_12)

        //cube_13 Nyankee
        let cube_13 = new Entity()
        let cube_13Path:string = "models/NYANKEE.glb"
            cube_13.addComponent(new GLTFShape(cube_13Path))
            cube_13.addComponent(new Transform({
                position: new Vector3(11.35, 0, 87.8),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 180, 0)
        }))
        engine.addEntity(cube_13)

        //cube_14 Lejin
        let cube_14 = new Entity()
        let cube_14Path:string = "models/JIN.glb"
            cube_14.addComponent(new GLTFShape(cube_14Path))
            cube_14.addComponent(new Transform({
                position: new Vector3(11.35, 0, 104),
                scale: new Vector3(1, 1, 1 ),
                rotation: Quaternion.Euler(0, 180, 0)
        }))
        engine.addEntity(cube_14)

//Set  above cubes to parent_01
//cube_01.setParent(channel_01)
//cube_02.setParent(channel_01)
//cube_03.setParent(channel_01)
//cube_04.setParent(channel_01)
//cube_05.setParent(channel_01)
//cube_06.setParent(channel_01)
//cube_07.setParent(channel_01)
//cube_08.setParent(channel_01)
//cube_09.setParent(channel_01)
//cube_10.setParent(channel_01)
//cube_11.setParent(channel_01)
//cube_12.setParent(channel_01)
//cube_13.setParent(channel_01)
//cube_14.setParent(channel_01)




//Courtyard 02 (NORTH)

//Channel 02 - Parent
//let channel_02 = new Entity()
//    channel_02.addComponent(
//        new utils.ToggleComponent(utils.ToggleState.On, value => {
//            engine.addEntity(channel_02)
//    }))

        //cube_15
        let cube_15 = new Entity()
        let cube_15Path:string = "models/cube_02.glb"
            cube_15.addComponent(new GLTFShape(cube_15Path))
            cube_15.addComponent(new Transform({
                position: new Vector3(9.8, -.125, 215.8),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 270, 0)
        }))

        //cube_16
        let cube_16 = new Entity()
        let cube_16Path:string = "models/cube_02.glb"
            cube_16.addComponent(new GLTFShape(cube_16Path))
            cube_16.addComponent(new Transform({
                position: new Vector3(9.8, -.125, 231.8),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 270, 0)
        }))

        //cube_17
        let cube_17 = new Entity()
        let cube_17Path:string = "models/cube_02.glb"
            cube_17.addComponent(new GLTFShape(cube_17Path))
            cube_17.addComponent(new Transform({
                position: new Vector3(9.8, -.125, 247.8),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 270, 0)
        }))

        //cube_18
        let cube_18 = new Entity()
        let cube_18Path:string = "models/cube_02.glb"
            cube_18.addComponent(new GLTFShape(cube_18Path))
            cube_18.addComponent(new Transform({
                position: new Vector3(9.8, -.125, 263.8),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 270, 0)
        }))

        //cube_19
        let cube_19 = new Entity()
        let cube_19Path:string = "models/cube_02.glb"
            cube_19.addComponent(new GLTFShape(cube_19Path))
            cube_19.addComponent(new Transform({
                position: new Vector3(9.8, -.125, 279.8),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 270, 0)
        }))

        //cube_20
        let cube_20 = new Entity()
        let cube_20Path:string = "models/cube_02.glb"
            cube_20.addComponent(new GLTFShape(cube_20Path))
            cube_20.addComponent(new Transform({
                position: new Vector3(9.8, -.125, 295.8),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 270, 0)
        }))

        //cube_21
        let cube_21 = new Entity()
        let cube_21Path:string = "models/cube_02.glb"
            cube_21.addComponent(new GLTFShape(cube_21Path))
            cube_21.addComponent(new Transform({
                position: new Vector3(23.8, -.125, 310.2),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 0, 0)
        }))

        //cube_22
        let cube_22 = new Entity()
        let cube_22Path:string = "models/cube_02.glb"
            cube_22.addComponent(new GLTFShape(cube_22Path))
            cube_22.addComponent(new Transform({
                position: new Vector3(39.8, -.125, 310.2),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 0, 0)
        }))

        //cube_23
        let cube_23 = new Entity()
        let cube_23Path:string = "models/cube_02.glb"
            cube_23.addComponent(new GLTFShape(cube_23Path))
            cube_23.addComponent(new Transform({
                position: new Vector3(54.2, -.125, 296.2),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 90, 0)
        }))

        //cube_24
        let cube_24 = new Entity()
        let cube_24Path:string = "models/cube_02.glb"
            cube_24.addComponent(new GLTFShape(cube_24Path))
            cube_24.addComponent(new Transform({
                position: new Vector3(54.2, -.125, 280.2),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 90, 0)
        }))

        //cube_25
        let cube_25 = new Entity()
        let cube_25Path:string = "models/cube_02.glb"
            cube_25.addComponent(new GLTFShape(cube_25Path))
            cube_25.addComponent(new Transform({
                position: new Vector3(54.2, -.125, 264.2),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 90, 0)
        }))

        //cube_26
        let cube_26 = new Entity()
        let cube_26Path:string = "models/cube_02.glb"
            cube_26.addComponent(new GLTFShape(cube_26Path))
            cube_26.addComponent(new Transform({
                position: new Vector3(54.2, -.125, 248.2),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 90, 0)
        }))

        //cube_27
        let cube_27 = new Entity()
        let cube_27Path:string = "models/cube_02.glb"
            cube_27.addComponent(new GLTFShape(cube_27Path))
            cube_27.addComponent(new Transform({
                position: new Vector3(54.2, -.125, 232.2),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 90, 0)
        }))

        //cube_28
        let cube_28 = new Entity()
        let cube_28Path:string = "models/cube_02.glb"
            cube_28.addComponent(new GLTFShape(cube_28Path))
            cube_28.addComponent(new Transform({
                position: new Vector3(54.2, -.125, 216.2),
                scale: new Vector3(1, 1, 1),
                rotation: Quaternion.Euler(0, 90, 0)
        }))

/*
//Set  above cubes to parent_02
cube_15.setParent(channel_02)
cube_16.setParent(channel_02)
cube_17.setParent(channel_02)
cube_18.setParent(channel_02)
cube_19.setParent(channel_02)
cube_20.setParent(channel_02)
cube_21.setParent(channel_02)
cube_22.setParent(channel_02)
cube_23.setParent(channel_02)
cube_24.setParent(channel_02)
cube_25.setParent(channel_02)
cube_26.setParent(channel_02)
cube_27.setParent(channel_02)
cube_28.setParent(channel_02)
*/

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

/// Audio cube_06 Linda Loh
//create audio clip and source
const clip_06 = new AudioClip("sounds/LINDA.mp3")
const source_06 = new AudioSource(clip_06)

//Add audio source to the main cube GLB file (so position is good)
cube_06.addComponent(source_06)

// Audio can loop, true or false, change volume here too
source_06.loop = true
source_06.volume = 10


// Create TriggerBox for audio to play only inside the cube

const trigger_06 = new Entity();
trigger_06.addComponent(new BoxShape()),
trigger_06.getComponent(BoxShape).withCollisions = false
trigger_06.getComponent(BoxShape).visible = false


trigger_06.addComponent(new Transform({
  position: new Vector3(52.5, 0, 24.05)
}));

let triggerBox_06 = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

trigger_06.addComponent(
  new utils.TriggerComponent(
    triggerBox_06,
    {
      onCameraEnter : () => {
        log('play audio')
        source_06.playing = true
      },
      onCameraExit : () => {
        log('stop audio')
        source_06.playing = false
    },

  //enableDebug: true
      }
  )
)
log('added new triggerbox')
engine.addEntity(trigger_06)



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





/// Audio cube_14 Lejin
//create audio clip and source

const clip_14 = new AudioClip("sounds/JIN.mp3")
const source_14 = new AudioSource(clip_14)

//Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
cube_14.addComponent(source_14)

// Audio can loop, true or false, change volume here too
source_14.loop = true
source_14.volume = 10


// Create TriggerBox for audio to play only inside the cube

const trigger_14 = new Entity();
trigger_14.addComponent(new BoxShape()),
trigger_14.getComponent(BoxShape).withCollisions = false
trigger_14.getComponent(BoxShape).visible = false


trigger_14.addComponent(new Transform({
  position: new Vector3(11.35, 0, 104)
}));

let triggerBox_14 = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

trigger_14.addComponent(
  new utils.TriggerComponent(
    triggerBox_14,
    {
      onCameraEnter : () => {
        log('play audio')
        source_14.playing = true
      },
      onCameraExit : () => {
        log('stop audio')
        source_14.playing = false
    },

  //enableDebug: true
      }
  )
)
log('added new triggerbox')
engine.addEntity(trigger_14)
