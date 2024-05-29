import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
// import { TransformControls } from './modules/TransformControls.js';
import { TransformControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const orbit = new OrbitControls( camera, renderer.domElement );

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('https://threejs.org/examples/textures/crate.gif');


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { map: texture } );
const cube = new THREE.Mesh( geometry, material );
cube.position.y = 0.5;
cube.rotation.y = Math.PI / 4;
scene.add( cube );

let control = new TransformControls(camera, renderer.domElement, 'rotate', );
control.addEventListener('dragging-changed', function (event) {
  orbit.enabled = !event.value;
});
scene.add(control);
control.attach(cube);

const grid = new THREE.GridHelper(20, 20);
grid.rotation.y = Math.PI / 4;
scene.add(grid);

camera.position.z = 4.37;
camera.position.y = 1.45;


function animate() {
  requestAnimationFrame( animate );


	renderer.render( scene, camera );
}

animate();