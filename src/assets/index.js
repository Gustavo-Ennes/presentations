import * as THREE from 'three';
import Ball from './Ball.js'

const TWEEN = require("@tweenjs/tween.js")

let scene = null,
    camera = null,
    renderer = null,
    lightUp = null,
    lightBottom = null,
    cube = null



const mouseMoveListener = () => {
  const coord = new THREE.Vector2();
  
  const mouseListener = ( event ) =>{
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    coord.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    coord.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    scene.rotation.x = coord.y / 4
    scene.rotation.y = coord.x / 4
  }

  const touchListener = (event) => {   
    const touch = event.touches[0]
    coord.x = (touch.pageX / window.innerWidth) * 2 - 1;
    coord.y = (touch.pageY / window.innerHeight) * 2 - 1;
    scene.rotation.x += coord.y / 50
    scene.rotation.y += coord.x / 50  
  }

  window.addEventListener( 'mousemove', mouseListener, false );
  window.addEventListener( 'touchmove', touchListener, false );
}


const resizeListener = () => {
  window.addEventListener('resize', onWindowResize)
}

export const onWindowResize = () => {
  camera.aspect = document.body.offsetWidth / document.body.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( document.body.offsetWidth, document.body.offsetHeight);
}



const addLight = () => {
  lightUp = new THREE.SpotLight( 0xddffdd, 1, 700, 1, 1, 2)
  lightUp.position.set(0, 124, 124)
  lightUp.target = new THREE.Object3D()
  lightUp.target.position.set(0, 0, -124)
  lightUp.castShadow = true
  lightUp.shadow.mapSize.width = 2048;
  lightUp.shadow.mapSize.height = 2048;

  lightUp.shadow.camera.near = .1;
  lightUp.shadow.camera.far = 250;
  lightUp.shadow.camera.fov = 75;

  lightBottom = lightUp.clone()
  lightBottom.position.set(0, -120, 120)
  scene.add( lightUp, lightBottom );
  scene.add( lightUp.target)
}

export const init = (div) => {
  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

  renderer = new THREE.WebGL1Renderer({antialias: true});
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.enabled = true;

  div.appendChild( renderer.domElement );
 
  addLight()
  camera.lookAt(lightUp.target.position)
  initEventListeners()
  addCube()
  addBalls(15)
  _animate()

}


const addBalls = (qtd) => {
  for(let i = 0; i < qtd; i++){
    new Ball(scene)
  }
}

const addCube = () => {
  let g, m
  g = new THREE.BoxGeometry(250, 250, 250)
  m = new THREE.MeshPhongMaterial({color: new THREE.Color(0x82BF46), side:THREE.DoubleSide})
  cube = new THREE.Mesh(g, m)
  cube.receiveShadow = true
  // cube.castShadow = true
  scene.add(cube)
}


const initEventListeners = () => {  
  resizeListener()
  mouseMoveListener()
}





const cubeRoutine = () => {
  cube.geometry.computeBoundingBox()
}

const cameraRoutine = () => {  
  camera.lookAt(lightUp.target.position.x, lightUp.target.position.y, lightUp.target.position.z)
  camera.updateProjectionMatrix()
}


const _animate = () => {
	requestAnimationFrame( _animate );
  TWEEN.update()
  cubeRoutine()
  cameraRoutine()
  Ball.update(cube)
	renderer.render( scene, camera );
}


