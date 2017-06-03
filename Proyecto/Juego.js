function setup(){
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
       // controls.enablePan = false;
        controls.minDistance = 100;
        controls.maxDistance = 300;
	
 //Personajes  
  var loadergodzilla = new THREE.JSONLoader();
     loadergodzilla.load('https://rodrigosanchez123.github.io/Proyecto/Personajes/godzilla.json',	function ( geometry, materials ) {
     	var material = materials[0];
	var godzilla = new THREE.Mesh( geometry, material );
	godzilla.scale.set(2,2,2);
      	escena.add( godzilla );	});
	
	
	//Raycaster
   //raycaster = new THREE.Raycaster();

     // document.addEventListener( 'mousemove', onDocumentMouseMove, false );
     // document.addEventListener( 'mousedown', onDocumentMouseDown, false );
     // document.addEventListener( 'mouseup', onDocumentMouseUp, false );
     // window.addEventListener( 'resize', onWindowResize, false );

  }

function loop(){
  controls.update();
  renderer.render(escena,camara);	
  requestAnimationFrame(loop);
}
  
  var iluminacion, escena, camara, renderer;
  var controls;
  setup();
  loop();
