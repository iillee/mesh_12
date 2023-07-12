//export

export function createShellScene() {

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
          hoverText: "Pre-highpolyists by Stephan Duquesnoy",
          distance: 24
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
            hoverText: "Space Modules by V4W.ENKO",
            distance: 24
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
            hoverText: "Idle Hands by Hannes Hummel",
            distance: 24
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
            hoverText: "Marvellous Meowies Wonderland by Mellowmann",
            distance: 24
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
            hoverText: "The Volume of Language: FOXP2 AI by Melody Owen aka Pearl Hyacinth",
            distance: 24
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
            hoverText: "Crack by Linda Loh",
            distance: 24
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
            hoverText: "Brutal Cubes by warrragwag",
            distance: 24
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
            hoverText: "A WHITE WALL IS NOT by Martínez Siesta",
            distance: 24
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
            hoverText: "333Mujer by Mango",
            distance: 24
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
            hoverText: "Strokes of Once What Was by MickRenders",
            distance: 24
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
            hoverText: "Memphis Revisited by Michelle Brown aka @thebadlament",
            distance: 24
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
            hoverText: "Crash / Sites by Dev Harlan",
            distance: 24
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
            hoverText: "Fade Away Bunny Bread by Nyankee",
            distance: 24
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
            hoverText: "jin’s trilogy: air by Lejin Fan",
            distance: 24
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
            hoverText: "Warm Currents by Tripura",
            distance: 24
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
            hoverText: "FREE YarD ART by Dan Anthony Kelly",
            distance: 24
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
            hoverText: "Eagerness to Reach Those Lush Hills by Alex Adkinson",
            distance: 24
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
            hoverText: "The Waters of Lilaca by CKBubbles",
            distance: 24
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
            hoverText: "Soft Oblique Horizons by Leah Smithson",
            distance: 24
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
            hoverText: "Distanced Cube by Mattia Cuttini",
            distance: 24
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
            hoverText: "BLINDNESS by Morteeeza",
            distance: 24
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
            hoverText: "The Glitch Boutique by Micah Alhadeff",
            distance: 24
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
            hoverText: "Hyper Vanity by Hyperdavy",
            distance: 24
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
            hoverText: "Glitch Pagan Altar by Ivan Hugo de Carvalho Cerqueira",
            distance: 24
      }))
 engine.addEntity(shell_24)

// shell_25
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
            hoverText: "Krush 3D by Krush",
            distance: 24
      }))
engine.addEntity(shell_25)

// shell_26
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
            hoverText: "Wind Dwellers by Jikke Lesterhuis",
            distance: 24
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
            hoverText: "A Portal to Another World by ALPHACODED",
            distance: 24
      }))
engine.addEntity(shell_27)

// shell_28
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
            hoverText: "Man Upon Man by Rebecca Rose",
            distance: 24
      }))
 engine.addEntity(shell_28)
}
