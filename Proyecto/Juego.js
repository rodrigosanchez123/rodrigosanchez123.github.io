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
var PisoMaterial = new THREE.MeshLambertMaterial({map: textura});
var Piso= new THREE.Mesh(PisoGeometria,PisoMaterial);
  escena.add(Piso);
  Piso.receiveShadow = true;
  }
}  
            //Pared
for (i=0; i<200; i+=20){
var murogeo = new THREE.BoxGeometry(20,20,3);
   murogeo.translate(-60+i,10,0);
var muropiel = new THREE.MeshLambertMaterial({map:textura2});
var Muro = new THREE.Mesh(murogeo,muropiel);
   escena.add(Muro);
}
	
 //Personajes  
  var loadergodzilla = new THREE.JSONLoader();
     loadergodzilla.load('https://rodrigosanchez123.github.io/Proyecto/Personajes/godzilla.json',	function ( geometry, materials ) {
     	var material = materials[0];
	 godzilla = new THREE.Mesh( geometry, material );
	godzilla.scale.set(3,3,3);
      	escena.add( godzilla );	});

//Raycaster
   raycaster = new THREE.Raycaster();

      document.addEventListener( 'mousemove', Movimientomouse, false );
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
		
function Movimientomouse( event ) {

      event.preventDefault();
      // mouse x and y are between -1 and 1 (normalized?)
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

      EncontrarInter();

    }

function EncontrarInter(){
     
        raycaster.setFromCamera( mouse,camara );
      var interseccion = raycaster.intersectObjects( godzilla );
	if ( interseccion.length > 0 ) {

        if ( INTERSECTED != interseccion[ 0 ].object ) {
			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
						INTERSECTED = interseccion[ 0 ].object;
						INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
						INTERSECTED.material.emissive.setHex( 0xff0000 );
					}
				} else {
					if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
					INTERSECTED = null;
				}
	renderer.render( escena, camara );
			}

  var iluminacion, escena, camara, renderer;
  var controls, mouse, INTERSECTED, raycaster, godzilla;
  setup();
  loop();
