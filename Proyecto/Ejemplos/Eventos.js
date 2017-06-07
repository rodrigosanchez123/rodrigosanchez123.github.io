function pushar(e){
if (e.keyCode===100)
malla.position.x++;
else if (e.keyCode===97)
malla.position.x--;
else if (e.keyCode===115)
malla.position.y--;
else if (e.keyCode===119)
malla.position.y++;
else if (e.keyCode===113)
malla.material.color = new THREE.Color(Math.random()*0xFFFFFF);

}

function setup(){
escena= new THREE.Scene();
camara= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camara.position.z=5;
camara.lookAt(escena.position);
renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

malla = new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshBasicMaterial({color:0x6F1B92}));
escena.add(malla);
var listener = function(){
camara.aspect = window.innerWidth/window.innerHeight;
camara.updateProjectionMatrix();
renderer.setSize(window.innerWidth,window.innerHeight);
}
var tipoEvento = 'resize';
var capturar = false;
window.addEventListener(tipoEvento, listener, capturar);
window.addEventListener('keypress',pushar,false);
}

function loop(){
requestAnimationFrame(loop);

malla.rotation.x += 0.01;
malla.rotation.y += 0.01;

renderer.render(escena,camara);
}

var malla, camara, renderer, escena;

setup();
loop();
