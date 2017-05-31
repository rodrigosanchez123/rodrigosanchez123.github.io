function setup(){ 
 // THREE.ImageUtils.crossOrigin = '';
  //var planoimagen = THREE.ImageUtils.loadTexture('https:Cragmaw.jpg');
 
 escena = new THREE.Scene();
 var group = new THREE.Group(); 
 escena.add(group);
  var loader= new THREE.TextureLoader();
     loader.load('https:Cragmaw.jpg', function ( planoimagen ) {
       var PlanoGeometria = new THREE.BoxGeometry(50,70,10);
    var PlanoMaterial = new THREE.MeshBasicMaterial({map:planoimagen, side:THREE.DoubleSide});
    
  plano = new THREE.Mesh(PlanoGeometria,PlanoMaterial);
  plano.rotateX(Math.PI/-4);
       group.add(plano);
     });
  
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

//plano.rotation.x += 0.01;
//plano.rotation.y += 0.01;

renderer.render(escena,camara);
}



var plano, escena, camara, renderer;
setup();
loop();
