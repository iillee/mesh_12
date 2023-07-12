import * as utils from '@dcl/ecs-scene-utils';

export function createKrushScene() {

  let cube_25 = new Entity()
  let cube_25Path:string = "models/cube.new1.glb"
      cube_25.addComponent(new GLTFShape(cube_25Path))
      cube_25.addComponent(new Transform({
          position: new Vector3(52.6 , -.08, 264.1),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 0, 0)
  }))
  engine.addEntity(cube_25)

}
