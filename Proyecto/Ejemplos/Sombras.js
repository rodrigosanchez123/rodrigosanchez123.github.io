var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.y = 30;
iluminacion.position.z = 50;

var iluminacion2 = new THREE.PointLight(0xFFFFFF);
iluminacion2.position.y = -100;
iluminacion2.position.z = 70;
iluminacion2.position.x = -70;

var iluminacion3 = new THREE.PointLight(0xFFFFFF);
iluminacion3.position.y = 100;
iluminacion3.position.z = 20;
iluminacion3.position.x = 40;

//-----Personaje Gordito.
var sombreroForma = new THREE.CylinderGeometry(2, 5, 2);
var cabezaForma = new THREE.SphereGeometry(3);
var cuerpoForma = new THREE.SphereGeometry(5);
var soporteForma = new THREE.CylinderGeometry(1.5, 1.5, 5);
var baseForma = new THREE.CylinderGeometry(5, 5, 1);

soporteForma.translate(0, -4, 0);
baseForma.translate(0,-7,0);
cuerpoForma.translate(0, 1.5, 0);
cabezaForma.translate(0, 7, 0);
sombreroForma.translate(0 ,10, 0);

var sombreroMalla = new THREE.Mesh(sombreroForma);
var cabezaMalla = new THREE.Mesh(cabezaForma);
var cuerpoMalla = new THREE.Mesh(cuerpoForma);
var soporteMalla = new THREE.Mesh(soporteForma);
var baseMalla = new THREE.Mesh(baseForma);

var arbolForma = new THREE.Geometry();

arbolForma.merge(sombreroMalla.geometry, sombreroMalla.matrix);
arbolForma.merge(cabezaMalla.geometry, cabezaMalla.matrix);
arbolForma.merge(cuerpoMalla.geometry, cuerpoMalla.matrix);
arbolForma.merge(soporteMalla.geometry, soporteMalla.matrix);
arbolForma.merge(baseMalla.geometry, baseMalla.matrix);

arbolForma.scale(2,2,2);
var material = new THREE.MeshLambertMaterial({color:"#00cc00"});
var arbolMalla1 = new THREE.Mesh(arbolForma, material);
arbolMalla1.rotateX(Math.PI/2);
arbolMalla1.position.set(-50,50,15);


//----Personaje flaquito
//---Personaje Flaquito

var PeloForma2 = new THREE.CylinderGeometry(5, 2, 3);
var cabezaForma2 = new THREE.SphereGeometry(2);
var soporteForma2 = new THREE.CylinderGeometry(0.5, 0.5, 8);
var baseForma2 = new THREE.CylinderGeometry(5, 5, 1);

soporteForma2.translate(20, 0, 0);
baseForma2.translate(20,-4,0);
cabezaForma2.translate(20, 4.5, 0);
PeloForma2.translate(20 ,5.5, 0);

var PeloMalla2 = new THREE.Mesh(PeloForma2);
var cabezaMalla2 = new THREE.Mesh(cabezaForma2);
var soporteMalla2 = new THREE.Mesh(soporteForma2);
var baseMalla2 = new THREE.Mesh(baseForma2);

var arbolForma2 = new THREE.Geometry();

arbolForma2.merge(PeloMalla2.geometry, PeloMalla2.matrix);
arbolForma2.merge(cabezaMalla2.geometry, cabezaMalla2.matrix);
arbolForma2.merge(soporteMalla2.geometry, soporteMalla2.matrix);
arbolForma2.merge(baseMalla2.geometry, baseMalla2.matrix);

arbolForma2.scale(2,2,2);
var material2 = new THREE.MeshLambertMaterial({color:"#0BFFF7"});
var arbolMalla2 = new THREE.Mesh(arbolForma2, material2);
arbolMalla2.rotateX(Math.PI/2);
arbolMalla2.position.set(0,0,9);

//---Plataforma
var escena= new THREE.Scene();
escena.add(arbolMalla1);
escena.add(arbolMalla2);
escena.add(iluminacion);
escena.add(iluminacion2);
escena.add(iluminacion3);

for (i=0; i<200; i+=10){
   for (j=0; j<200; j+=10){
var PisoGeometria = new THREE.PlaneGeometry(10,10);
//var PisoMaterial= new THREE.MeshBasicMaterial();
PisoGeometria.translate(-100+i,-100+j,0);


var PisoMaterial = new THREE.MeshLambertMaterial({ color: Math.random()*0xFFFFFF});
var Piso= new THREE.Mesh(PisoGeometria,PisoMaterial);
escena.add(Piso);
Piso.receiveShadow = true;
  }
}  

var camara= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camara.position.set(0,-250,200);
camara.lookAt(escena.position);


var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
renderizador.shadowMapEnabled = true;
arbolMalla1.castShadow = true;
arbolMalla2.castShadow = true;
iluminacion.castShadow = true;
iluminacion2.castShadow = true;
iluminacion3.castShadow = true;
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
