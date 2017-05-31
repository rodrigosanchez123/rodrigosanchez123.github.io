function setup(){ 
 escena = new THREE.Scene();
    var loader= new THREE.TextureLoader();
     	loader.load('https:Cragmaw.jpg', function ( planoimagen ) {
       	var PlanoGeometria = new THREE.BoxGeometry(50,70,10);
    	var PlanoMaterial = new THREE.MeshBasicMaterial({map:planoimagen, side:THREE.DoubleSide});
    
  	plano = new THREE.Mesh(PlanoGeometria,PlanoMaterial);
  	plano.rotateX(Math.PI/-4);
        escena.add(plano);
     });
 
 var godzilla = new THREE.JSONLoader();
     godzilla.load('https:godzilla-coversion.json',	function ( geometry, materials ) {
     	var material = materials[ 0 ];
		    var object = new THREE.Mesh( geometry, material );
      escena.add( object );	});
 
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 50;
  camara.lookAt(escena.position);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
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
