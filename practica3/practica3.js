function setup(){
  THREE.ImageUtils.crossOrigin = '';
  var planoimagen = THREE.ImageUtils.loadTexture('https:Cragmaw.jpg');
  var PlanoMaterial = new THREE.MeshBasicMaterial({map: planoimagen});
  var PlanoGeometria = new THREE.PlaneGeometry(100,100);
  plano = new THREE.Mesh(PlanoGeometria,PlanoMaterial);

  escena = new THREE.Scene();
  escena.add(plano);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 10;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWight,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.render(escena,camara);
}
var plano, escena, camara, renderer;
setup();
