import * as utils from '@dcl/ecs-scene-utils';

export function createHannesScene() {

  let cube_03 = new Entity()
  let cube_03Path:string = "models/HANNES2.glb"
      cube_03.addComponent(new GLTFShape(cube_03Path))
      cube_03.addComponent(new Transform({
          position: new Vector3(52.5, 0, 72.05),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 0, 0)
  }))
  engine.addEntity(cube_03)
}
