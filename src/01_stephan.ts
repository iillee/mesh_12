import * as utils from '@dcl/ecs-scene-utils';

export function createStephanScene() {

  let cube_01 = new Entity()
  let cube_01Path:string = "models/STEPHAN.glb"
      cube_01.addComponent(new GLTFShape(cube_01Path))
      cube_01.addComponent(new Transform({
          position: new Vector3(52.5, 0, 104.04),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 0, 0)
  }))
  engine.addEntity(cube_01)

}
