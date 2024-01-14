---
layout: page
title:
permalink: /bio/
---

Interdimensional wizard.

<div id="canvas-container"></div>
<script src="https://threejs.org/build/three.js"></script>
<script src="https://threejs.org/examples/js/loaders/GLTFLoader.js"></script>
<script src="https://threejs.org/examples/js/controls/OrbitControls.js"></script>

<script>
let scene, camera, renderer, controls, model;

let scene, camera, renderer, controls, model;

function init() {
  // Scene
  scene = new THREE.Scene();
  scene.background = null; // Transparent background

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1, 2);

  // Renderer with transparent background
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  // Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(0, 1, 0);
  scene.add(directionalLight);

  // Load GLB model
  const loader = new THREE.GLTFLoader();
  loader.load('/img/3d/cactus-test.glb', function (gltf) {
    model = gltf.scene;
    scene.add(model);
  });

  // Handle window resize
  window.addEventListener('resize', onWindowResize, false);

  // Animation loop
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
</script>

---

<a rel="license"
href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img
alt="Creative Commons License" style="border-width:0"
src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>

<!--<div>
<center><br>
Today, like every other day, we wake up empty
and frightened.<br>
Don’t open the door to the study and begin reading. <br>
Take down a musical instrument.<br>
<br>-->

<!--Let the beauty we love be what we do.<br>
There are hundreds of ways to kneel and kiss the ground.
</center> <br>-->
<!--</div>-->

<!--<div style="text-align: right">Rumi, <i>Quatrain 82</i></div>-->

<!-- "Saxifrage" means "stone breaker". These tiny, five-petalled -->
<!-- flowers are the toughest and most northernmost growing plants on -->
<!-- earth. By virtue of their pattern of growth, they split rocks and -->
<!-- flourish in unlikely places; they are in the business of -->
<!-- viriditas.-->
