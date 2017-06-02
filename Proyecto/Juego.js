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
  }

function loop(){
  renderer.render(escena,camara);
  requestAnimationFrame(loop);
}
  
  var iluminacion, escena, camara, renderer;
  setup();
  loop();
