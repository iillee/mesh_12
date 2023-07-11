import * as utils from '@dcl/ecs-scene-utils';

export function createKrushScene() {

  let cube_25 = new Entity()
  let cube_25Path:string = "models/KRUSH.glb"
      cube_25.addComponent(new GLTFShape(cube_25Path))
      cube_25.addComponent(new Transform({
          position: new Vector3(54, -.125, 264.2),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 90, 0)
  }))
  engine.addEntity(cube_25)

}
