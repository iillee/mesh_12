import * as utils from '@dcl/ecs-scene-utils';

export function createMelodyScene() {

  let cube_05 = new Entity()
  let cube_05Path:string = "models/MELODY.glb"
      cube_05.addComponent(new GLTFShape(cube_05Path))
      cube_05.addComponent(new Transform({
          position: new Vector3(52.5, 0, 40.05),
          scale: new Vector3(1, 1, 1),
          rotation: Quaternion.Euler(0, 0, 0)
  }))
  engine.addEntity(cube_05)
}
