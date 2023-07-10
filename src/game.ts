//IMPORTS
import * as utils from '@dcl/ecs-scene-utils';
import { createBaseScene } from './base';
import { createShellScene } from './shells';
import { createScreensScene } from './screens';
import { createWaterScene } from './water';
import { createTripuraScene } from './tripura';
import { createDanScene } from './dan';
import { createAlexScene } from './alex';
import { createCKScene } from './ck';
import { createDevVideoScene } from './devVideo';
import { createMicahScene } from './micah'

// INIT SCENES
createBaseScene();
createShellScene();
createScreensScene();
createWaterScene();
createCKScene();
createAlexScene();
createDanScene();
createTripuraScene();
createDevVideoScene();
createMicahScene();


//CUBES

//Courtyard 01 (SOUTH)

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
let cube_02Path:string = "models/V4Wb.glb"
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
        position: new Vector3(11.4, 0, 87.8),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(cube_13)

//cube_14 Lejin
let cube_14 = new Entity()
let cube_14Path:string = "models/JIN.glb"
    cube_14.addComponent(new GLTFShape(cube_14Path))
    cube_14.addComponent(new Transform({
        position: new Vector3(11.42, 0, 104),
        scale: new Vector3(1, 1, 1 ),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(cube_14)









//cube_15 - see tripura.ts assembled by KJ

//cube_16 - see dan.ts assembled by KJ

//cube_17 - see alex.ts assembled by KJ

//cube_18 - see ck.ts assembled by KJ

//cube_19 Leah Smithson
let cube_19 = new Entity()
let cube_19Path:string = "models/LEAH.glb"
    cube_19.addComponent(new GLTFShape(cube_19Path))
    cube_19.addComponent(new Transform({
        position: new Vector3(11.5 , 0, 279.9),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(cube_19)

//cube_20 Mattia Cuttini
let cube_20 = new Entity()
let cube_20Path:string = "models/MATTIA.glb"
    cube_20.addComponent(new GLTFShape(cube_20Path))
    cube_20.addComponent(new Transform({
        position: new Vector3(11.5, 0, 296),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(cube_20)

//cube_21 Morteeeza / needs correction - massive armature
let cube_21 = new Entity()
let cube_21Path:string = "models/cube_02.glb"
    cube_21.addComponent(new GLTFShape(cube_21Path))
    cube_21.addComponent(new Transform({
        position: new Vector3(23.8, -.125, 310.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))

//cube_22 see micah.ts assembled by KJ

//cube_23 Hyperdavy
let cube_23 = new Entity()
let cube_23Path:string = "models/HYPERDAVY.glb"
    cube_23.addComponent(new GLTFShape(cube_23Path))
    cube_23.addComponent(new Transform({
        position: new Vector3(52.5, 0, 296),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_23)

//cube_24 Ivan Hugo - needs correction
let cube_24 = new Entity()
let cube_24Path:string = "models/HUGO.glb"
    cube_24.addComponent(new GLTFShape(cube_24Path))
    cube_24.addComponent(new Transform({
        position: new Vector3(54.2, -.125, 280.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_24)

//cube_25 Krush
let cube_25 = new Entity()
let cube_25Path:string = "models/KRUSH.glb"
    cube_25.addComponent(new GLTFShape(cube_25Path))
    cube_25.addComponent(new Transform({
        position: new Vector3(54, -.125, 264.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))
engine.addEntity(cube_25)

//cube_26 Jikke
let cube_26 = new Entity()
let cube_26Path:string = "models/JIKKE.glb"
    cube_26.addComponent(new GLTFShape(cube_26Path))
    cube_26.addComponent(new Transform({
        position: new Vector3(52.5, 0, 248),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_26)

//cube_27
let cube_27 = new Entity()
let cube_27Path:string = "models/cube_02.glb"
    cube_27.addComponent(new GLTFShape(cube_27Path))
    cube_27.addComponent(new Transform({
        position: new Vector3(54.2, 0 , 232.2),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 90, 0)
}))

//cube_28 Rebecca Rose
let cube_28 = new Entity()
let cube_28Path:string = "models/REBECCA.glb"
    cube_28.addComponent(new GLTFShape(cube_28Path))
    cube_28.addComponent(new Transform({
        position: new Vector3(52.5, 0, 216),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
}))
engine.addEntity(cube_28)


// SOUND BOXES

/// Audio cube_02 V4W
//create audio clip and source
const clip_02c = new AudioClip("sounds/V4W.mp3")
const source_02c = new AudioSource(clip_02c)

//Add audio source to the main cube GLB file (so position is good)
cube_02.addComponent(source_02c)

// Audio can loop, true or false, change volume here too
source_02c.loop = true
source_02c.volume = 10


// Create TriggerBox for audio to play only inside the cube

const trigger_02c = new Entity();
trigger_02c.addComponent(new BoxShape()),
trigger_02c.getComponent(BoxShape).withCollisions = false
trigger_02c.getComponent(BoxShape).visible = false


trigger_02c.addComponent(new Transform({
  position: new Vector3(52.5, 0, 88.04)
}));

let triggerBox_02c = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

trigger_02c.addComponent(
  new utils.TriggerComponent(
    triggerBox_02c,
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
engine.addEntity(trigger_02c)

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

// END Lejin audio


/// Audio cube_19 Leah Smithson
//create audio clip and source

const clip_19 = new AudioClip("sounds/LEAH.mp3")
const source_19 = new AudioSource(clip_19)

//Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
cube_19.addComponent(source_19)

// Audio can loop, true or false, change volume here too
source_19.loop = true
source_19.volume = 10


// Create TriggerBox for audio to play only inside the cube

const trigger_19 = new Entity();
trigger_19.addComponent(new BoxShape()),
trigger_19.getComponent(BoxShape).withCollisions = false
trigger_19.getComponent(BoxShape).visible = false


trigger_19.addComponent(new Transform({
  position: new Vector3(11.2 , 0, 279.9)
}));

let triggerBox_19 = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

trigger_19.addComponent(
  new utils.TriggerComponent(
    triggerBox_19,
    {
      onCameraEnter : () => {
        log('play audio')
        source_19.playing = true
      },
      onCameraExit : () => {
        log('stop audio')
        source_19.playing = false
    },

  //enableDebug: true
      }
  )
)
log('added new triggerbox')
engine.addEntity(trigger_19)

// END Leah Smithson audio


/// Audio cube_21 Morteeeza
//create audio clip and source

const clip_21 = new AudioClip("sounds/MORTEEEZA.mp3")
const source_21 = new AudioSource(clip_21)

//Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
cube_21.addComponent(source_21)

// Audio can loop, true or false, change volume here too
source_21.loop = true
source_21.volume = 10


// Create TriggerBox for audio to play only inside the cube

const trigger_21 = new Entity();
trigger_21.addComponent(new BoxShape()),
trigger_21.getComponent(BoxShape).withCollisions = false
trigger_21.getComponent(BoxShape).visible = false


trigger_21.addComponent(new Transform({
  position: new Vector3(23.8, -.125, 310.2)
}));

let triggerBox_21 = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

trigger_21.addComponent(
  new utils.TriggerComponent(
    triggerBox_21,
    {
      onCameraEnter : () => {
        log('play audio')
        source_21.playing = true
      },
      onCameraExit : () => {
        log('stop audio')
        source_21.playing = false
    },

  //enableDebug: true
      }
  )
)
log('added new triggerbox')
engine.addEntity(trigger_21)

//END audio Morteeeza


// Audio cube_23 Hyperdavy
//create audio clip and source

const clip_23 = new AudioClip("sounds/HYPERDAVY.mp3")
const source_23 = new AudioSource(clip_23)

//Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
cube_23.addComponent(source_23)

// Audio can loop, true or false, change volume here too
source_23.loop = true
source_23.volume = 10


// Create TriggerBox for audio to play only inside the cube

const trigger_23 = new Entity();
trigger_23.addComponent(new BoxShape()),
trigger_23.getComponent(BoxShape).withCollisions = false
trigger_23.getComponent(BoxShape).visible = false


trigger_23.addComponent(new Transform({
  position: new Vector3(54.2, -.125, 296.2)
}));

let triggerBox_23 = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

trigger_23.addComponent(
  new utils.TriggerComponent(
    triggerBox_23,
    {
      onCameraEnter : () => {
        log('play audio')
        source_23.playing = true
      },
      onCameraExit : () => {
        log('stop audio')
        source_23.playing = false
    },

  //enableDebug: true
      }
  )
)
log('added new triggerbox')
engine.addEntity(trigger_23)

//END audio Hyperdavy


// Audio cube_26 Jikke Lesterhuis
//create audio clip and source

const clip_26 = new AudioClip("sounds/JIKKE.mp3")
const source_26 = new AudioSource(clip_26)

//Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
cube_26.addComponent(source_26)

// Audio can loop, true or false, change volume here too
source_26.loop = true
source_26.volume = 10


// Create TriggerBox for audio to play only inside the cube

const trigger_26 = new Entity();
trigger_26.addComponent(new BoxShape()),
trigger_26.getComponent(BoxShape).withCollisions = false
trigger_26.getComponent(BoxShape).visible = false


trigger_26.addComponent(new Transform({
  position: new Vector3(54.2, -.125, 296.2)
}));

let triggerBox_26 = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

trigger_26.addComponent(
  new utils.TriggerComponent(
    triggerBox_26,
    {
      onCameraEnter : () => {
        log('play audio')
        source_26.playing = true
      },
      onCameraExit : () => {
        log('stop audio')
        source_26.playing = false
    },

  //enableDebug: true
      }
  )
)
log('added new triggerbox')
engine.addEntity(trigger_26)

//END audio Jikke


// Audio cube_28 Rebecca Rose
//create audio clip and source

const clip_28 = new AudioClip("sounds/REBECCA.mp3")
const source_28 = new AudioSource(clip_28)

//Add audio source to the main cube GLB file (so position is good) - change LPMcube to the name of the Artists cube entity
cube_26.addComponent(source_28)

// Audio can loop, true or false, change volume here too
source_28.loop = true
source_28.volume = 10


// Create TriggerBox for audio to play only inside the cube

const trigger_28 = new Entity();
trigger_28.addComponent(new BoxShape()),
trigger_28.getComponent(BoxShape).withCollisions = false
trigger_28.getComponent(BoxShape).visible = false


trigger_28.addComponent(new Transform({
  position: new Vector3(54.2, -.125, 296.2)
}));

let triggerBox_28 = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

trigger_28.addComponent(
  new utils.TriggerComponent(
    triggerBox_28,
    {
      onCameraEnter : () => {
        log('play audio')
        source_28.playing = true
      },
      onCameraExit : () => {
        log('stop audio')
        source_28.playing = false
    },

  //enableDebug: true
      }
  )
)
log('added new triggerbox')
engine.addEntity(trigger_28)

//END audio Rebecca
