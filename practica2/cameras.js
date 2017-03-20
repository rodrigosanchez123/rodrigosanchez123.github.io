var escena= new THREE.Scene();

//var camara= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
//camara.position.set(0,-200,100);
//camara.lookAt(escena.position);

var camara= new THREE.OrthographicCamera();
camara.left=window.innerWidth/-2;
camara.right=window.innerWidth/2;
camara.top=window.innerHeight/2;
camara.bottom=window.innerHeight/-2;
camara.near=0.1;
camara.far=1000;
camara.updateProjectionMatrix();
camara.position.set(0,-200,100);
camara.lookAt(escena.position);


for (i=0; i<200; i+=10){
   for (j=0; j<200; j+=10){
var PisoGeometria = new THREE.PlaneGeometry(10,10);
//var PisoMaterial= new THREE.MeshBasicMaterial();
PisoGeometria.translate(-100+i,-100+j,0);


var PisoMaterial = new THREE.MeshBasicMaterial({ color: Math.random()*0xFFFFFF});
var Piso= new THREE.Mesh(PisoGeometria,PisoMaterial);
escena.add(Piso);
  }
}  
 //Piso.position.x=20;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
