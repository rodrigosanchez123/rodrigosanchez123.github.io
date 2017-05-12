function setup(){
  THREE.ImageUtils.crossOrigin = '';
  var planoimagen = THREE.ImageUtils.loadTexture('https:Cragmaw.jpg');
  var PlanoMaterial = new THREE.MeshBasicMaterial({map: planoimagen});
  var PlanoGeometria = new THREE.PlaneGeometry(50,70);
  plano = new THREE.Mesh(PlanoGeometria,PlanoMaterial);
  plano.rotateX(Math.PI/-2);

  escena = new THREE.Scene();
  escena.add(plano);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 50;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  //renderer.render(escena,camara);
}

//function loop(){
//requestAnimationFrame(loop);

//plano.rotation.x += 0.01;
//plano.rotation.y += 0.01;

//renderer.render(escena,camara);
//}

var plano, escena, camara, renderer;
setup();
//loop();
