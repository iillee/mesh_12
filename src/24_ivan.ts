import * as utils from '@dcl/ecs-scene-utils';

export function createIvanScene() {

  let cube_24 = new Entity()
  let cube_24Path:string = "models/HUGO.glb"
      cube_24.addComponent(new GLTFShape(cube_24Path))
      cube_24.addComponent(new Transform({
          position: new Vector3(54.2, -.125, 280.2),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 90, 0)
  }))
  engine.addEntity(cube_24)

}
