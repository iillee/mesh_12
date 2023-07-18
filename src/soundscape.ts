import * as utils from '@dcl/ecs-scene-utils';


export function createSoundScapeScene() {

//SOUNDS
const bay = new AudioClip("sounds/MESH_voice.mp3")
const voiceover = new AudioSource(bay)

voiceover.playing = true
voiceover.loop = true
voiceover.volume = 1

const sound03 = new AudioClip("sounds/pond.mp3")
const pond = new AudioSource(sound03)

pond.playing = true
pond.loop = true
pond.volume = .3

//voice over audio
const box1 = new Entity()
box1.addComponent(new BoxShape())
box1.getComponent(BoxShape).withCollisions = false
box1.getComponent(BoxShape).visible = false
box1.addComponent(voiceover)
box1.addComponent(new Transform({
        position: new Vector3(32, -10, 160),
        scale: new Vector3(1, 1, 1)
}))
engine.addEntity(box1)

// Water
const plane1 = new Entity()
plane1.addComponent(new PlaneShape())
plane1.getComponent(PlaneShape).withCollisions = false
plane1.getComponent(PlaneShape).visible = true
plane1.addComponent(pond)
plane1.addComponent(new Transform({
    position: new Vector3(32, -10, 64 ),
    scale: new Vector3(128, 60, 1),
    rotation: Quaternion.Euler(90, 90, 0)
    }))
let triggerBox_music1 = new utils.TriggerBoxShape(
  new Vector3 (54, 3.5, 120),
  new Vector3(0, 1, 0)
);

// Toggle audio on and off when entering / exiting the cube
plane1.addComponent(
new utils.TriggerComponent(
triggerBox_music1,
{
onCameraEnter : () => {
  log('play audio')
  pond.playing = true
},
onCameraExit : () => {
  log('stop audio')
  pond.playing = false
},

enableDebug: true
}
)
)
log('added new triggerbox')
engine.addEntity(plane1)

// Water
const plane2 = new Entity()
plane2.addComponent(new PlaneShape())
plane2.getComponent(PlaneShape).withCollisions = false
plane2.getComponent(PlaneShape).visible = true
plane2.addComponent(pond)
plane2.addComponent(new Transform({
    position: new Vector3(32, -10, 256 ),
    scale: new Vector3(128, 60, 1),
    rotation: Quaternion.Euler(90, 90, 0)
    }))
let triggerBox_music2 = new utils.TriggerBoxShape(
  new Vector3 (54, 3.5, 120),
  new Vector3(0, 1, 0)
);

// Toggle audio on and off when entering / exiting the cube
plane2.addComponent(
new utils.TriggerComponent(
triggerBox_music2,
{
onCameraEnter : () => {
  log('play audio')
  pond.playing = true
},
onCameraExit : () => {
  log('stop audio')
  pond.playing = false
},

enableDebug: true
}
)
)
log('added new triggerbox')
engine.addEntity(plane2)


}
