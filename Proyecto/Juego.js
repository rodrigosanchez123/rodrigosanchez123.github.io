function setup(){
//
THREE.ImageUtils.crossOrigin = '';
var textura = THREE.ImageUtils.loadTexture('https:Imagenes/Piso.jpg');
var textura2 = THREE.ImageUtils.loadTexture('https:Imagenes/Piedra.jpg');
//LUZ
  iluminacion = new THREE.PointLight(0xFFFFFF);
	iluminacion.position.set(0,30,0);
	iluminacion.castShadow = true;
  iluminacion2 = new THREE.PointLight(0xFFFFFF);
	iluminacion2.position.set(0,30,-90);
  iluminacion3 = new THREE.PointLight(0xFFFFFF);
	iluminacion3.position.set(0,30,90);
//ESCENA  
  escena = new THREE.Scene();
   escena.add(iluminacion);
   escena.add(iluminacion2);
   escena.add(iluminacion3);
//CAMARA
  camara = new THREE.PerspectiveCamera();
  camara.position.set(0,50,50);
  camara.lookAt(escena.position);
  camara2 = new THREE.PerspectiveCamera();
  camara2.position.set(10,60,100);
  camara2.lookAt(escena.position);
 //RENDER
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.shadowMapEnabled = true;
  document.body.appendChild(renderer.domElement);
  renderer.autoClear = false;
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
  //controls2 = new THREE.OrbitControls( camara2, renderer.domElement );
	//controls2.minPolarAngle = Math.PI/8;
	//controls2.maxPolarAngle = Math.PI / 2;
        //controls2.enablePan = false;
        //controls2.minDistance = 100;
        //controls2.maxDistance = 3 
 
 //Escenario
for (i=0; i<200; i+=40){
   for (j=0; j<200; j+=40){
var PisoGeometria = new THREE.PlaneGeometry(40,40);
  PisoGeometria.rotateX(Math.PI*-1/2);
  PisoGeometria.translate(-80+i,0,-80+j);
var PisoMaterial = new THREE.MeshLambertMaterial({map: textura, side: THREE.DoubleSide});
var Piso= new THREE.Mesh(PisoGeometria,PisoMaterial);
  Piso.receiveShadow = true;
  escena.add(Piso);
  }
}  
            //Pared
for (i=0; i<200; i+=20){
var murogeo = new THREE.BoxGeometry(20,20,3);
   murogeo.translate(-90+i,10,0);
var muropiel = new THREE.MeshLambertMaterial({map:textura2});
var Muro = new THREE.Mesh(murogeo,muropiel);
  Muro.receiveShadow = true;
   escena.add(Muro);
}
	
 //Personajes 
esfera = new THREE.Mesh(new THREE.SphereGeometry(10), new THREE.MeshBasicMaterial({color:0xffff00}));
esfera.position.set(30,10,50);
escena.add(esfera);	

  var loadergodzilla = new THREE.JSONLoader();
     loadergodzilla.load('https://rodrigosanchez123.github.io/Proyecto/Personajes/godzilla.json',function ( geometry, materials ) {
     	var material1 = materials[0];
	personaje1 = new THREE.Mesh( geometry, material1 );
	personaje1.position.set(75,0,75);
	personaje1.scale.set(3,3,3);
      	personaje1.castShadow = true;
	
        });
escena.add( personaje1 );
	
 var dino = new THREE.JSONLoader();
     dino.load('https:Personajes/Dinoreno.json',function ( geometry, materials ) {
     	var material2 = materials[0];
	var personaje2 = new THREE.Mesh( geometry, material2 );
	personaje2.position.set(50,0,60);
	personaje2.scale.set(4,4,4);
	personaje2.castShadow = true;     
      	escena.add( personaje2 );	});

var tauro = new THREE.JSONLoader();
     tauro.load('https:Personajes/tauro.json',function ( geometry, materials ) {
     	var material3 = materials[0];
	var personaje3 = new THREE.Mesh( geometry, material3 );
	personaje3.position.set(0,0,40);
	personaje3.scale.set(4,4,4);
	personaje3.castShadow = true;
      	escena.add( personaje3 );	});
	
var alien = new THREE.JSONLoader();
     alien.load('https:Personajes/XenoRanger.json',function ( geometry, materials ) {
     	var material4 = materials[0];
	var personaje4 = new THREE.Mesh( geometry, material4 );
	personaje4.position.set(-10,0,90);
	personaje4.scale.set(4,4,4);
	personaje4.castShadow = true;     
      	escena.add( personaje4 );	});	
	
var amber = new THREE.JSONLoader();
     amber.load('https:Personajes/Lizard.json',function ( geometry ) {
     	var material5 = new THREE.MeshLambertMaterial({color:0x5F4C0B});
	var personaje5 = new THREE.Mesh( geometry, material5 );
	personaje5.position.set(-50,0,80);
	personaje5.scale.set(4,4,4);
	personaje5.castShadow = true;     
      	escena.add( personaje5 );	});

var golem = new THREE.JSONLoader();
     golem.load('https:Personajes/golem.json',function ( geometry ) {
     	var material6 = new THREE.MeshLambertMaterial({color:0xBDBDBD});
	var personaje6 = new THREE.Mesh( geometry, material6 );
	personaje6.position.set(-90,18,30);
	personaje6.scale.set(4,4,4);
	personaje6.castShadow = true;  
      	escena.add( personaje6 );	});
//Raycaster
   //raycaster1 = new THREE.Raycaster(personaje1.position,new THREE.Vector3(0,0,1));
   raycaster2 = new THREE.Raycaster(personaje2.position,new THREE.Vector3(0,0,1));
   raycaster3 = new THREE.Raycaster(personaje3.position,new THREE.Vector3(0,0,1));
   raycaster4 = new THREE.Raycaster(personaje4.position,new THREE.Vector3(0,0,1));
   raycaster5 = new THREE.Raycaster(personaje5.position,new THREE.Vector3(0,0,1));
   raycaster6 = new THREE.Raycaster(personaje6.position,new THREE.Vector3(0,0,1));

  
     // document.addEventListener( 'mousedown', onDocumentMouseDown, false );
     // document.addEventListener( 'mouseup', onDocumentMouseUp, false );
      window.addEventListener( 'resize', pantalla, false );
      window.addEventListener('keypress',pushar,false);

  }

function loop(){
  controls.update();
  //renderer.render(escena,camara);
  var choque1 = raycaster2.intersectObject(esfera);
   if(choque1.length > 0 && (choque1[0].distance <= 0.5))
    personaje1.position.x+=3;
	
  render();
  requestAnimationFrame(loop);
}
  
function pantalla(){
	camara.aspect = window.innerWidth/window.innerHeight;
	camara.updateProjectionMatrix();
	renderer.setSize(window.innerWidth,window.innerHeight);
}

function pushar(e){
if (e.keyCode===119)
esfera.position.z++;
else if (e.keyCode===115)
esfera.position.z--;
else if (e.keyCode===97)
esfera.position.x++;
else if (e.keyCode===100)
esfera.position.x--;

}

function render() 
{	
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
	camara.aspect = 0.5 * SCREEN_WIDTH / SCREEN_HEIGHT;
	camara2.aspect = 0.5 * SCREEN_WIDTH / SCREEN_HEIGHT;
	camara.updateProjectionMatrix();
	camara2.updateProjectionMatrix();

	renderer.setViewport( 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT );
	renderer.clear();
	
	// izquierdo
	renderer.setViewport( 1, 1,   0.5 * SCREEN_WIDTH - 2, SCREEN_HEIGHT - 2);
	renderer.render( escena, camara );
	
	// derecho
	renderer.setViewport( 0.5 * SCREEN_WIDTH + 1, 1,   0.5 * SCREEN_WIDTH - 2, SCREEN_HEIGHT - 2 );
	renderer.render( escena, camara2 );	
}
		



  var iluminacion, escena, camara, camara2, renderer;
  var controls, mouse, esfera, personaje1;
  var raycaster1, raycaster2, raycaster3, raycaster4, raycaster5, raycaster6;
  setup();
  loop();
