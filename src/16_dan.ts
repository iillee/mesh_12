import * as utils from '@dcl/ecs-scene-utils';

export function createDanScene() {
const dan_scene = new Entity('dan_scene');
engine.addEntity(dan_scene);
const danTransform = new Transform({
    position: new Vector3(19.5, -.0, 239.95),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 180, 0)
 });
dan_scene.addComponentOrReplace(danTransform);


const meshCUBEBETA = new Entity('meshCUBEBETA');
engine.addEntity(meshCUBEBETA);
meshCUBEBETA.setParent(dan_scene);
meshCUBEBETA.addComponent(new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
}));
meshCUBEBETA.addComponent(new GLTFShape("models/MESH CUBE_DAK_solo_cube.glb"));

const danLinkButton = new GLTFShape("models/hiper.glb");

const danLink = new Entity('danLink');
engine.addEntity(danLink);
danLink.setParent(dan_scene);
danLink.addComponent(new Transform({
    position: new Vector3(13, 11.5, 2),
    rotation: new Quaternion(2.1051237046217222e-16, 0.3826833963394165, -4.5619408695074526e-8, -0.9238795638084412),
    scale: new Vector3(1, 1, 1)
}));
danLink.addComponent(danLinkButton);
danLink.addComponent(new OnPointerDown(() => {
    openExternalURL("https://objkt.com/asset/hicetnunc/809877")
},
{
    hoverText: "AR. Mutt Fountain\" on OBJKT"
}));



const danLink2 = new Entity('danLink2');
engine.addEntity(danLink2);
danLink2.setParent(dan_scene);
danLink2.addComponent(danLinkButton);
danLink2.addComponent(new Transform({
    position: new Vector3(10, 9.5, 3),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
}));
danLink2.addComponent(new OnPointerDown(() => {
    openExternalURL('https://objkt.com/asset/hicetnunc/827648')
},
{
    hoverText: "Collect \"penny loAfeRs\" on OBJKT"
}));


const danLink3 = new Entity('danLink3');
engine.addEntity(danLink3);
danLink3.setParent(dan_scene);
danLink3.addComponent(danLinkButton);
danLink3.addComponent(new Transform({
    position: new Vector3(5.5, 11.5, 1.5),
    rotation: new Quaternion(4.2423369877523775e-15, 0.3826834261417389, -4.5619412247788205e-8, 0.9238795638084412),
    scale: new Vector3(1, 1, 1)
}));
danLink3.addComponent(new OnPointerDown(() => {
    openExternalURL('https://objkt.com/asset/hicetnunc/826970')
},
{
    hoverText: "Collect \"SILLÓN rECLINaBLE\" on OBJKT"
}));


const danLink4 = new Entity('danLink4');
engine.addEntity(danLink4);
danLink4.setParent(dan_scene);
danLink4.addComponent(danLinkButton);
danLink4.addComponent(new Transform({
    position: new Vector3(13, 10, 10),
    rotation: new Quaternion(-6.755876024389584e-16, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
    scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
}));
danLink4.addComponent(new OnPointerDown(() => {
    openExternalURL('https://objkt.com/asset/hicetnunc/761318')
},
{
    hoverText: "Collect \"trA$h dAy\" on OBJKT"
}));


const danLink5 = new Entity('danLink5');
engine.addEntity(danLink5);
danLink5.setParent(dan_scene);
danLink5.addComponent(danLinkButton);
danLink5.addComponent(new Transform({
    position: new Vector3(13, 10.5, 6.5),
    rotation: new Quaternion(-1.10062582369541e-15, -0.6343932747840881, 7.562556447737734e-8, 0.7730104327201843),
    scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
}));
danLink5.addComponent(new OnPointerDown(() => {
    openExternalURL('https://objkt.com/asset/hicetnunc/802676')
},
{
    hoverText: "Collect \"Junkin CommissARy VACUUM\" on OBJKT"
}));

const danLink6 = new Entity('danLink6');
engine.addEntity(danLink6);
danLink6.setParent(dan_scene);
danLink6.addComponent(danLinkButton);
danLink6.addComponent(new Transform({
    position: new Vector3(6, 9.5, 7),
    rotation: new Quaternion(-6.512368875130549e-16, 0.5555702447891235, -6.622912707143769e-8, 0.8314696550369263),
    scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
}));
danLink6.addComponent(new OnPointerDown(() => {
    openExternalURL('https://objkt.com/asset/hicetnunc/824598')
},
{
    hoverText: "Collect \"Free Sealy mAttRess\" on OBJKT"
}));


const danInstagramButtonLink = new Entity('danInstagramButtonLink');
engine.addEntity(danInstagramButtonLink);
danInstagramButtonLink.setParent(dan_scene);
danInstagramButtonLink.addComponent(new GLTFShape("models/instagram.glb"));
danInstagramButtonLink.addComponent(new Transform({
    position: new Vector3(8.5, 9.5, 11.5),
    rotation: new Quaternion(-1.785248991280526e-15, -0.7730104923248291, 9.21500173944878e-8, 0.6343933343887329),
    scale: new Vector3(1, 1, 1)
}));
const danInstagramAnimator = new Animator();
danInstagramButtonLink.addComponent(danInstagramAnimator);
const danInstagramClip = new AnimationState('Action');
danInstagramButtonLink.addComponent(new OnPointerDown(() => {
    openExternalURL('https://www.instagram.com/dananthonykelly'),
    danInstagramClip.play(),
    danInstagramClip.looping = false
},
{
    hoverText: "follow on Instagram"
}));

const danTwitterButtonLink = new Entity('danTwitterButtonLink');
engine.addEntity(danTwitterButtonLink);
danTwitterButtonLink.setParent(dan_scene);
danTwitterButtonLink.addComponent(new GLTFShape("models/twitter.glb"));
danTwitterButtonLink.addComponent(new Transform({
    position: new Vector3(8.5, 8.5, 11.5),
    rotation: new Quaternion(-6.668626442745589e-15, -0.7730106115341187, 9.215002449991516e-8, 0.6343932747840881),
    scale: new Vector3(1.0000005960464478, 1, 1.0000005960464478)
}));
const danTwitterAnimator = new Animator();
danTwitterButtonLink.addComponent(danTwitterAnimator);
const danTwitterClip = new AnimationState('Action');
danTwitterButtonLink.addComponent(new OnPointerDown(() => {
    openExternalURL('https://twitter.com/dananthonykelly'),
    danTwitterClip.play(),
    danTwitterClip.looping = false
},
{
    hoverText: "follow on Twitter"
}));


const freeYarDARTCollidersDAK = new Entity('freeYarDARTCollidersDAK');
engine.addEntity(freeYarDARTCollidersDAK);
freeYarDARTCollidersDAK.setParent(dan_scene);
freeYarDARTCollidersDAK.addComponent(new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  }));
freeYarDARTCollidersDAK.addComponent(new GLTFShape("models/FREE_YarD_ART_colliders_DAK.glb"));


// SOUND BOXES

/// Audio cube_04 Mellowmann
//create audio clip and source
const danClip = new AudioClip("sounds/fluorescent-lightbulb-hum_loop_02.mp3");
const danSource = new AudioSource(danClip);

//Add audio source to the main cube GLB file (so position is good)
meshCUBEBETA.addComponent(danSource);

// Audio can loop, true or false, change volume here too
danSource.loop = true;
danSource.volume = 100;


// Create TriggerBox for audio to play only inside the cube

const danTrigger = new Entity();
danTrigger.addComponent(new BoxShape());
danTrigger.getComponent(BoxShape).withCollisions = false;
danTrigger.getComponent(BoxShape).visible = false;


danTrigger.addComponent(new Transform({
  position: new Vector3(9.8, -.0, 233.5)
}));

let danTriggerBox = new utils.TriggerBoxShape(
  new Vector3 (12, 12, 12),
  new Vector3(0, 13, 0)
);


// Toggle audio on and off when entering / exiting the cube

danTrigger.addComponent(
  new utils.TriggerComponent(
    danTriggerBox,
    {
      onCameraEnter : () => {
        log('play dan audio')
        danSource.playing = true
      },
      onCameraExit : () => {
        log('stop dan audio')
        danSource.playing = false
    },

  //enableDebug: true
      }
  )
);
log('added dan triggerbox');
engine.addEntity(danTrigger)
    }
