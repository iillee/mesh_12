import * as utils from '@dcl/ecs-scene-utils';

export function createDevScene() {

  let cube_12 = new Entity()
  let cube_12Path:string = "models/DEV.glb"
      cube_12.addComponent(new GLTFShape(cube_12Path))
      cube_12.addComponent(new Transform({
          position: new Vector3(9.6, 0, 73.8),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 180, 0)
  }))
  engine.addEntity(cube_12)

}
