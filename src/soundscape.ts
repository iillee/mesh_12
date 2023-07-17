import * as utils from '@dcl/ecs-scene-utils';


export function createSoundscapeScene() {

//SOUNDS
const bay = new AudioClip("sounds/MESH_voice.mp3")
const voiceover = new AudioSource(bay)

voiceover.playing = true
voiceover.loop = true
voiceover.volume = 1

const sound03 = new AudioClip("sounds/MESH_ENV_mixdown.mp3")
const pond = new AudioSource(sound03)

pond.playing = true
pond.loop = true
pond.volume = .5

//voice over audio
const box1 = new Entity()
box1.addComponent(new BoxShape())
box1.getComponent(BoxShape).withCollisions = false
box1.getComponent(BoxShape).visible = false
box1.addComponent(voiceover)
box1.addComponent(new Transform({
        position: new Vector3(32, 1, 160),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box1)

// Water
const plane1 = new Entity()
plane1.addComponent(new PlaneShape())
plane1.getComponent(PlaneShape).withCollisions = false
plane1.getComponent(PlaneShape).visible = false
plane1.addComponent(pond)
plane1.addComponent(new Transform({
    position: new Vector3(32, .8, 160 ),
    scale: new Vector3(316, 60, 1),
    rotation: Quaternion.Euler(90, 90, 0)
    }))
let triggerBox_music1 = new utils.TriggerBoxShape(
  new Vector3 (54, 3.5, 320),
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

enableDebug: false
}
)
)
log('added new triggerbox')
engine.addEntity(plane1)


}
