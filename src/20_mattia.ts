import * as utils from '@dcl/ecs-scene-utils';

export function createMattiaScene() {

  let cube_20 = new Entity()
  let cube_20Path:string = "models/MATTIA.glb"
      cube_20.addComponent(new GLTFShape(cube_20Path))
      cube_20.addComponent(new Transform({
          position: new Vector3(11.5, 0, 296),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 180, 0)
  }))
  engine.addEntity(cube_20)

}
