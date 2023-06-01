import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

let camera;
let scene;
let renderer;

class World
{
    // 1. Create an instance of the World app
    constructor(container)
    {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);        
    
        const cube = createCube();
        const light = createLights();

        scene.add(cube, light);
        const resizer = new Resizer(container, camera, renderer);
        resizer.onResize = () => {
          this.render();
        };
    }
    
    // 2. Render the scene
    render() 
    {
        renderer.render(scene, camera);
    }
}
    
export { World };