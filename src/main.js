import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
  } from "https://cdn.skypack.dev/three@0.132.2";

  // Get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');

// create a Scene
const scene = new Scene();
// Set the background color
scene.background = new Color('skyblue');

// Create a camera
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

camera.position.set(0, 0, 10);

// create a geometry
const geometry = new BoxBufferGeometry(2,2,2);

// create a default (white) Basic material
const material = new MeshBasicMaterial();

const cube = new Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);    

// create the renderer
const renderer = new WebGLRenderer();


// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

renderer.render(scene, camera);









