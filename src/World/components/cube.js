import { BoxBufferGeometry, Mesh, MeshStandardMaterial, MathUtils} from "https://cdn.skypack.dev/three@0.132.2";

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

// Switch the old "basic" material to
// a physically correct "standard" material
  const material = new MeshStandardMaterial({color: 'purple'});

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = () => {
    // increase the cube's rotation each frame
    cube.rotation.z += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  };


  return cube;
}

export { createCube };