
//export

export function createScreensScene() {

//VIDEO CLIPS
const aiscape_01= new VideoClip("videos/TAIGA_01.mp4")
const aiscape_02= new VideoClip("videos/TAIGA_02.mp4")

//VIDEO TEXTURES
const taigaTexture1 = new VideoTexture(aiscape_01)
const taigaTexture2 = new VideoTexture(aiscape_02)

//ALPHA LAYERS
const fade = new Texture("images/alpha_fade.png")
const fadeDoorway = new Texture("images/alpha_doorway.png")

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


//Screens

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

}
