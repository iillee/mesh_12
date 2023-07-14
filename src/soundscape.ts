export function createSoundScapeScene() {

//SOUNDS
const nostalgia = new AudioClip("sounds/D.I.E.T.R.I.C.H. - P R O V I D E N C I A - 04 SEOUL 1988.mp3")
const music = new AudioSource(nostalgia)

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

//Constant - orb (trigger signifyer)
const box = new Entity()
box.addComponent(new BoxShape())
box.getComponent(BoxShape).withCollisions = false
box.getComponent(BoxShape).visible = false
box.addComponent(material01)
box.addComponent(music)
box.addComponent(new Transform({
        position: new Vector3(32, 6, 160),
        scale: new Vector3(1, 1, 1)
}))
engine.addEntity(box)

music.playing = false
music.loop = true
music.volume = 0.25



}
