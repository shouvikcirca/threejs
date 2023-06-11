import { 
  BoxBufferGeometry, 
  Mesh, 
  MeshStandardMaterial, 
  MathUtils,
  TextureLoader
} from "https://cdn.skypack.dev/three@0.132.2";


function createMaterial() 
{ 
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load(
    '/assets/textures/pexels-anni-roenkae-2832432.jpg',
    );
  // create a "standard" material
  const material = new MeshStandardMaterial({ map: texture})// color: 'yellow' });
  
  return material;
}



function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

// Switch the old "basic" material to
// a physically correct "standard" material
  // create a Mesh containing the geometry and material
  const material = createMaterial();
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