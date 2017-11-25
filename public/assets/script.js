'use strict';

var vm = new Vue({
  el: '#mycounter',
  data: {
    count: 0
  },
  methods: {
    countUp: function countUp() {
      this.count++;
      changeRotateSpeed();
    }
  }
});

var vm_stop = new Vue({
  el: '#mystop',
  methods: {
    hsStop: function hsStop() {
      Speed_0();
    }
  }
});
var scene = new THREE.Scene();
var box;
var controls;
var renderer;
var camera;
var model = {};
var model2 = {};
var model3 = {};
var rotate_speed = 0.05;
var radian = 0;
var geometry;
var material;

function renderHandSpinner() {
  'use strict';

  var light = void 0;
  var ambient = void 0;
  var gridHelper = void 0;
  var axisHelper = void 0;
  var lightHelper = void 0;
  var width = 800;
  var height = 800;
  var modelPath = void 0;

  box = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 50), new THREE.MeshLambertMaterial({ color: 0xff0000 }));
  box.position.set(0, 0, 0);
  //scene.add(box);

  //light
  light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 200, 80);
  scene.add(light);

  ambient = new THREE.AmbientLight(0x404040);
  scene.add(ambient);

  //camera
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.set(200, 300, 150);
  camera.lookAt(scene.position);

  // helper
  gridHelper = new THREE.GridHelper(200, 50);
  //scene.add(gridHelper);
  axisHelper = new THREE.AxisHelper(1000);
  //scene.add(axisHelper);
  lightHelper = new THREE.DirectionalLightHelper(light, 20);
  //scene.add(lightHelper);

  //controls
  controls = new THREE.OrbitControls(camera);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0;

  // renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0xefefef);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.getElementById('stage').appendChild(renderer.domElement);

  //modelPath = 'src/bear.json';
  //modelPath = 'src/handspiner_3d.json';
  //modelPath = '../src/data/handspiner_3d_geo.json';
  modelPath = './src/data/handspiner_3d_geo.json';
  //modelPath = '/Users/yoshimurahiroyuki/workspace/threejs/src/handspiner.json';

  var loader = new THREE.JSONLoader();
  loader.load(modelPath, function (geo, mat) {
    var phongMat = new THREE.MeshPhongMaterial(mat);
    var phongMat2 = new THREE.MeshPhongMaterial(mat);
    var phongMat3 = new THREE.MeshPhongMaterial(mat);
    //for (let mt of faceMat.materials) {
    //  mt.color = new THREE.Color(0xffcc88);
    //}
    geometry = geo;
    material = mat;

    model = new THREE.Mesh(geo, phongMat);
    model.position.set(0, 20, 0);
    model.scale.set(1, 1, 1);
    var randColor = Math.random() * 0xffffff;
    model.material.color = new THREE.Color(randColor);
    scene.add(model);

    model2 = new THREE.Mesh(geo, phongMat2);
    model2.position.set(30, 0, 0);
    model2.scale.set(1, 1, 1);
    var randColor2 = Math.random() * 0xffffff;
    model2.material.color = new THREE.Color(randColor2);
    scene.add(model2);

    model3 = new THREE.Mesh(geo, phongMat3);
    model3.position.set(-30, 0, 0);
    model3.scale.set(1, 1, 1);
    var randColor3 = Math.random() * 0xffffff;
    model3.material.color = new THREE.Color(randColor3);
    scene.add(model3);
    //requestAnimationFrame(rendering, renderer.domElement);　
    //renderer.render(scene, camera);
    //console.log(model);
    //model.rotation.x = 1;
    render();
  });
}

function addSpinner() {
  var phongMat = new THREE.MeshPhongMaterial(material);
  model = new THREE.Mesh(geometry, phongMat);
  var randX = 800 * Math.random();
  var randY = 800 * Math.random();
  var randZ = 800 * Math.random();

  var size = Math.random();
  model.scale.set(size, size, size);
  model.position.set(randX, randY, randZ);
  var randColor = Math.random() * 0xffffff;
  model.material.color = new THREE.Color(randColor);
  scene.add(model);
}

function render() {
  // ここのコメントアウトを外すと表示される
  requestAnimationFrame(render);
  model.rotation.y += rotate_speed;
  model2.rotation.y += rotate_speed;
  model3.rotation.y += rotate_speed;
  radian += 0.02;
  //console.log(radian);
  //model.position.y = Math.sin(radian) ;
  model.position.y = Math.sin(radian) * 40;
  model2.position.y = Math.sin(radian) * 40 + 100;
  model3.position.y = Math.sin(radian) * 40 - 100;
  // model.position.y = Math.sin(radian)  ;
  // model.y += rotate_speed;
  controls.update();
  renderer.render(scene, camera);
}

function changeRotateSpeed() {
  //controls.autoRotateSpeed = vm.count*10;
  model.rotation.y = 1.8 * vm.count;
  rotate_speed += vm.count * 0.01;
  console.log(vm.count);
  //requestAnimationFrame(render);
}

function Speed_0() {
  vm.count = 0;
  rotate_speed = 0;
  addSpinner();
}

renderHandSpinner();
//# sourceMappingURL=script.js.map