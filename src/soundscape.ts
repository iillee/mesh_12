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
const box1 = new Entity()
box1.addComponent(new BoxShape())
box1.getComponent(BoxShape).withCollisions = false
box1.getComponent(BoxShape).visible = false
box1.addComponent(material01)
box1.addComponent(music)
box1.addComponent(new Transform({
        position: new Vector3(32, 17, 32),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box1)

const box2 = new Entity()
box2.addComponent(new BoxShape())
box2.getComponent(BoxShape).withCollisions = false
box2.getComponent(BoxShape).visible = false
box2.addComponent(material01)
box2.addComponent(music)
box2.addComponent(new Transform({
        position: new Vector3(32, 16, 48),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box2)


const box3 = new Entity()
box3.addComponent(new BoxShape())
box3.getComponent(BoxShape).withCollisions = false
box3.getComponent(BoxShape).visible = false
box3.addComponent(material01)
box3.addComponent(music)
box3.addComponent(new Transform({
        position: new Vector3(32, 15, 64),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box3)

const box4 = new Entity()
box4.addComponent(new BoxShape())
box4.getComponent(BoxShape).withCollisions = false
box4.getComponent(BoxShape).visible = false
box4.addComponent(material01)
box4.addComponent(music)
box4.addComponent(new Transform({
        position: new Vector3(32, 14, 80),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box4)

const box5 = new Entity()
box5.addComponent(new BoxShape())
box5.getComponent(BoxShape).withCollisions = false
box5.getComponent(BoxShape).visible = false
box5.addComponent(material01)
box5.addComponent(music)
box5.addComponent(new Transform({
        position: new Vector3(32, 13, 96),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box5)

const box6 = new Entity()
box6.addComponent(new BoxShape())
box6.getComponent(BoxShape).withCollisions = false
box6.getComponent(BoxShape).visible = false
box6.addComponent(material01)
box6.addComponent(music)
box6.addComponent(new Transform({
        position: new Vector3(32, 12, 112),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box6)

const box7 = new Entity()
box7.addComponent(new BoxShape())
box7.getComponent(BoxShape).withCollisions = false
box7.getComponent(BoxShape).visible = false
box7.addComponent(material01)
box7.addComponent(music)
box7.addComponent(new Transform({
        position: new Vector3(32, 11, 128),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box7)

const box8 = new Entity()
box8.addComponent(new BoxShape())
box8.getComponent(BoxShape).withCollisions = false
box8.getComponent(BoxShape).visible = false
box8.addComponent(material01)
box8.addComponent(music)
box8.addComponent(new Transform({
        position: new Vector3(32, 10, 144),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box8)

const box9 = new Entity()
box9.addComponent(new BoxShape())
box9.getComponent(BoxShape).withCollisions = false
box9.getComponent(BoxShape).visible = false
box9.addComponent(material01)
box9.addComponent(music)
box9.addComponent(new Transform({
        position: new Vector3(32, 9, 160),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box9)

const box10 = new Entity()
box10.addComponent(new BoxShape())
box10.getComponent(BoxShape).withCollisions = false
box10.getComponent(BoxShape).visible = false
box10.addComponent(material01)
box10.addComponent(music)
box10.addComponent(new Transform({
        position: new Vector3(32, 10, 176),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box10)

const box11 = new Entity()
box11.addComponent(new BoxShape())
box11.getComponent(BoxShape).withCollisions = false
box11.getComponent(BoxShape).visible = false
box11.addComponent(material01)
box11.addComponent(music)
box11.addComponent(new Transform({
        position: new Vector3(32, 11, 192),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box11)

const box12 = new Entity()
box12.addComponent(new BoxShape())
box12.getComponent(BoxShape).withCollisions = false
box12.getComponent(BoxShape).visible = false
box12.addComponent(material01)
box12.addComponent(music)
box12.addComponent(new Transform({
        position: new Vector3(32, 12, 208),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box12)

const box13 = new Entity()
box13.addComponent(new BoxShape())
box13.getComponent(BoxShape).withCollisions = false
box13.getComponent(BoxShape).visible = false
box13.addComponent(material01)
box13.addComponent(music)
box13.addComponent(new Transform({
        position: new Vector3(32, 13, 224),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box13)

const box14 = new Entity()
box14.addComponent(new BoxShape())
box14.getComponent(BoxShape).withCollisions = false
box14.getComponent(BoxShape).visible = false
box14.addComponent(material01)
box14.addComponent(music)
box14.addComponent(new Transform({
        position: new Vector3(32, 14, 240),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box14)

const box15 = new Entity()
box15.addComponent(new BoxShape())
box15.getComponent(BoxShape).withCollisions = false
box15.getComponent(BoxShape).visible = false
box15.addComponent(material01)
box15.addComponent(music)
box15.addComponent(new Transform({
        position: new Vector3(32, 15, 256),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box15)

const box16 = new Entity()
box16.addComponent(new BoxShape())
box16.getComponent(BoxShape).withCollisions = false
box16.getComponent(BoxShape).visible = false
box16.addComponent(material01)
box16.addComponent(music)
box16.addComponent(new Transform({
        position: new Vector3(32, 16, 272),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box16)

const box17 = new Entity()
box17.addComponent(new BoxShape())
box17.getComponent(BoxShape).withCollisions = false
box17.getComponent(BoxShape).visible = false
box17.addComponent(material01)
box17.addComponent(music)
box17.addComponent(new Transform({
        position: new Vector3(32, 17, 288),
        scale: new Vector3(0, 0, 0)
}))
engine.addEntity(box17)

music.playing = true
music.loop = true
music.volume = .1



}
