import * as utils from '@dcl/ecs-scene-utils';

export function createNyankeeScene() {

  let cube_13 = new Entity()
  let cube_13Path:string = "models/NYANKEE.glb"
      cube_13.addComponent(new GLTFShape(cube_13Path))
      cube_13.addComponent(new Transform({
          position: new Vector3(11.4, 0, 87.8),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 180, 0)
  }))
  engine.addEntity(cube_13)

}
