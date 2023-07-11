import * as utils from '@dcl/ecs-scene-utils';

export function createWarrScene() {

  let cube_07 = new Entity()
  let cube_07Path:string = "models/WARR.glb"
      cube_07.addComponent(new GLTFShape(cube_07Path))
      cube_07.addComponent(new Transform({
          position: new Vector3(40.05, 0, 11.5),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 90, 0)
  }))
  engine.addEntity(cube_07)
}
