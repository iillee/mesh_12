import * as utils from '@dcl/ecs-scene-utils';

export function createMichelleScene() {

  let cube_11 = new Entity()
  let cube_11Path:string = "models/MICHELLE.glb"
      cube_11.addComponent(new GLTFShape(cube_11Path))
      cube_11.addComponent(new Transform({
          position: new Vector3(11.35, 0, 56),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 180, 0)
  }))
  engine.addEntity(cube_11)


}
