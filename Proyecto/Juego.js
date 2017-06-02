function setup(){
//LUZ
  iluminacion = new THREE.AmbientLight(0xFFFFFF);
//ESCENA  
  escena = new THREE.Scene();
//CAMARA
  camara = new THREE.PerspectiveCamera();
  camara.position.set(0,0,50);
  camara.lookAt(escena.position);
 //RENDER
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  //EJES
 var ejes = new THREE.AxisHelper(8);
 escena.add(ejes);
  
  var godzilla = new THREE.JSONLoader();
     godzilla.load('https:barco.json',	function ( geometry, materials ) {
     	var material = materials[0];
		    var object = new THREE.Mesh( geometry, material );
	     object.scale.set(2,2,2);
      escena.add( object );	});
  }

function loop(){
  renderer.render(escena,camara);
}
  
  var iluminacion, escena, camara, renderer;
  setup();
  loop();
