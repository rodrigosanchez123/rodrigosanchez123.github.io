var forma= new THREE.Geometry();
forma.vertices.push( new THREE.Vector3(1,0,1)); //vertice 0
forma.vertices.push( new THREE.Vector3(1,0,-1)); //vertice 1
forma.vertices.push( new THREE.Vector3(-1,0,-1)); //vertice 2
forma.vertices.push( new THREE.Vector3(-1,0,1)); // vertice 3
forma.vertices.push( new THREE.Vector3(0,1,0)); //vertice 4

forma.face.push( new THREE.Face3(3,2,1)); //cara 0
forma.faces.push( new THREE.Face3(3,1,0)); //cara 1
forma.faces.push( new THREE.Face3(3,0,4)); //cara 2
forma.faces.push( new THREE.Face3(0,1,4)); //cara 3
forma.faces.push( new THREE.Face3(1,2,4)); // cara 4
forma.faces.push( new THREE.Face3(2,3,4)); //cara 5

forma.computeBoundingSphere();

forma.computeFaceNormals();

var mterial= new THREE.MeshNormalMaterial();

var malla= new THREE.Mesh( forma, material);
malla.rotateX(Math.PI/4);

var escena= new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamara();
camara.position.z= 5;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
