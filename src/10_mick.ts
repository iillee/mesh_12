import * as utils from '@dcl/ecs-scene-utils';

export function createMickScene() {

  let cube_10 = new Entity()
  let cube_10Path:string = "models/MICK.glb"
      cube_10.addComponent(new GLTFShape(cube_10Path))
      cube_10.addComponent(new Transform({
          position: new Vector3(11.35, .65, 40.1),
          scale: new Vector3(.95, .95, .95),
          rotation: Quaternion.Euler(0, 180, 0)
  }))
  engine.addEntity(cube_10)


}
