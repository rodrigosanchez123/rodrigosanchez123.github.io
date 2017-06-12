function setup(){
//
THREE.ImageUtils.crossOrigin = '';
var textura = THREE.ImageUtils.loadTexture('https:Imagenes/Piso.jpg');
var textura2 = THREE.ImageUtils.loadTexture('https:Imagenes/Piedra.jpg');
//LUZ
  iluminacion = new THREE.AmbientLight(0xFFFFFF);
//ESCENA  
  escena = new THREE.Scene();
   escena.add(iluminacion);	
//CAMARA
  camara = new THREE.PerspectiveCamera();
  camara.position.set(0,50,50);
  camara.lookAt(escena.position);	
 //RENDER
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  //EJES
 var ejes = new THREE.AxisHelper(8);
 escena.add(ejes);
  //Fondo	
    escena.background = new THREE.CubeTextureLoader()
	.setPath( 'Imagenes/' )
	.load( [ 'dark-s_px.jpg', 'dark-s_nx.jpg', 'dark-s_py.jpg', 'dark-s_ny.jpg', 'dark-s_pz.jpg', 'dark-s_nz.jpg' ] );
  //ControlEscenario
  controls = new THREE.OrbitControls( camara, renderer.domElement );
	controls.minPolarAngle = Math.PI/8;
	controls.maxPolarAngle = Math.PI / 2;
        controls.enablePan = false;
        controls.minDistance = 100;
        controls.maxDistance = 300;
  //Mouse
	mouse = new THREE.Vector2();
 //Escenario
for (i=0; i<200; i+=40){
   for (j=0; j<200; j+=40){
var PisoGeometria = new THREE.PlaneGeometry(40,40);
  PisoGeometria.rotateX(Math.PI*-1/2);
  PisoGeometria.translate(-80+i,0,-80+j);
var PisoMaterial = new THREE.MeshLambertMaterial({map: textura, side: THREE.DoubleSide});
var Piso= new THREE.Mesh(PisoGeometria,PisoMaterial);
  escena.add(Piso);
  Piso.receiveShadow = true;
  }
}  
            //Pared
for (i=0; i<200; i+=20){
var murogeo = new THREE.BoxGeometry(20,20,3);
   murogeo.translate(-90+i,10,0);
var muropiel = new THREE.MeshLambertMaterial({map:textura2});
var Muro = new THREE.Mesh(murogeo,muropiel);
   escena.add(Muro);
}
	
 //Personajes  
  var loadergodzilla = new THREE.JSONLoader();
     loadergodzilla.load('https://rodrigosanchez123.github.io/Proyecto/Personajes/godzilla.json',	function ( geometry, materials ) {
     	var material1 = materials[0];
	personaje1 = new THREE.Mesh( geometry, material1 );
	personaje1.position.set(75,0,75);
	personaje1.scale.set(3,3,3);
      	escena.add( personaje1 );	});
	
 var dino = new THREE.JSONLoader();
     dino.load('https:Personajes/Dinoreno.json',function ( geometry, materials ) {
     	var material2 = materials[0];
	var personaje2 = new THREE.Mesh( geometry, material2 );
	personaje2.position.set(50,0,60);
	personaje2.scale.set(4,4,4);
      	escena.add( personaje2 );	});

var tauro = new THREE.JSONLoader();
     tauro.load('https:Personajes/tauro.json',function ( geometry, materials ) {
     	var material3 = materials[0];
	var personaje3 = new THREE.Mesh( geometry, material3 );
	personaje3.position.set(0,0,40);
	personaje3.scale.set(4,4,4);
      	escena.add( personaje3 );	});
	
var alien = new THREE.JSONLoader();
     alien.load('https:Personajes/XenoRanger.json',function ( geometry, materials ) {
     	var material4 = materials[0];
	var personaje4 = new THREE.Mesh( geometry, material4 );
	personaje4.position.set(-10,0,90);
	personaje4.scale.set(4,4,4);
      	escena.add( personaje4 );	});	
	
var amber = new THREE.JSONLoader();
     amber.load('https:Personajes/Lizard.json',function ( geometry ) {
     	var material5 = new THREE.MeshLambertMaterial({color:0x5F4C0B});
	var personaje5 = new THREE.Mesh( geometry, material5 );
	personaje5.position.set(-50,0,80);
	personaje5.scale.set(4,4,4);
      	escena.add( personaje5 );	});

var golem = new THREE.JSONLoader();
     golem.load('https:Personajes/golem.json',function ( geometry ) {
     	var material6 = new THREE.MeshLambertMaterial({color:0xBDBDBD});
	var personaje6 = new THREE.Mesh( geometry, material6 );
	personaje6.position.set(-90,17,30);
	personaje6.scale.set(4,4,4);
      	escena.add( personaje6 );	});
//Raycaster
   raycaster = new THREE.Raycaster();

  
     // document.addEventListener( 'mousedown', onDocumentMouseDown, false );
     // document.addEventListener( 'mouseup', onDocumentMouseUp, false );
      window.addEventListener( 'resize', pantalla, false );

  }

function loop(){
  controls.update();
  renderer.render(escena,camara);	
  requestAnimationFrame(loop);
}
  
function pantalla(){
	camara.aspect = window.innerWidth/window.innerHeight;
	camara.updateProjectionMatrix();
	renderer.setSize(window.innerWidth,window.innerHeight);
}
		



  var iluminacion, escena, camara, renderer;
  var controls, mouse, INTERSECTED, raycaster, personaje1;
  setup();
  loop();
