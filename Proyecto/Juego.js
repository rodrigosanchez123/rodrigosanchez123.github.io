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
  
  var loadergodzilla = new THREE.JSONLoader();
     loadergodzilla.load('https://rodrigosanchez123.github.io/Proyecto/Personajes/godzilla.json',	function ( geometry, materials ) {
     	var material = materials[0];
	var godzilla = new THREE.Mesh( geometry, material );
	godzilla.scale.set(2,2,2);
      	escena.add( godzilla );	});
	
//ControlEscenario
  controls = new THREE.OrbitControls( camara, renderer.domElement );
	
//Fondo
        var imagenPrefix = "Imagenes/dark-s_";
	var directions  = ["px", "nx", "py", "ny", "pz", "nz"];
	var imagenSuffix = ".png";
	var FondoGeometry = new THREE.CubeGeometry( 5000, 5000, 5000 );	
	
	var materialArray = [];
	for (var i = 0; i < 6; i++)
		materialArray.push( new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture( imagenPrefix + directions[i] + imagenSuffix ),
			side: THREE.BackSide
		}));
	var FondoMaterial = new THREE.MeshBasicMaterial( materialArray );
	var FondoBox = new THREE.Mesh( FondoGeometry, FondoMaterial );
	escena.add( FondoBox );	
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
