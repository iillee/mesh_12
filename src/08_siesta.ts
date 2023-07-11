import * as utils from '@dcl/ecs-scene-utils';

export function createSiestaScene() {

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

}
