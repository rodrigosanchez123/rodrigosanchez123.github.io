function setup(){
  THREE.ImageUtils.crossOrigin = '';
  var planoimagen = THREE.ImageUtils.loadTexture('https:Cragmaw.jpg');
  var PlanoMaterial = new THREE.MeshBasicMaterial({map:planoimagen, side:THREE.DoubleSide});
  var PlanoGeometria = new THREE.BoxGeometry(50,70,10);
  plano = new THREE.Mesh(PlanoGeometria,PlanoMaterial);
  plano.rotateX(Math.PI/-4);
  
  escena = new THREE.Scene();
  escena.add(plano);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 50;
  camara.lookAt(escena.position);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  //renderer.render(escena,camara);
}

function loop(){
requestAnimationFrame(loop);

plano.rotation.x += 0.01;
plano.rotation.y += 0.01;

renderer.render(escena,camara);
}

var plano, escena, camara, renderer;
setup();
loop();
