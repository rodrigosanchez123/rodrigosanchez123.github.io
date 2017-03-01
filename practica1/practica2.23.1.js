var personaje= new THREE.Geometry();

personaje.vertices.push( new THREE.Vector3(1,1,0)); // Vértice 0
personaje.vertices.push( new THREE.Vector3(1,-1,0)); // Vértice 1
personaje.vertices.push( new THREE.Vector3(-1,-1,0)); // Vértice 2
personaje.vertices.push( new THREE.Vector3(-1,1,0)); // Vértice 3
personaje.vertices.push( new THREE.Vector3(2,2,1)); // Vértice 4
personaje.vertices.push( new THREE.Vector3(-2,2,1)); // Vértice 5
personaje.vertices.push( new THREE.Vector3(-2,-2,1)); // Vértice 6
personaje.vertices.push( new THREE.Vector3(2,-2,1)); // Vértice 7
personaje.vertices.push( new THREE.Vector3(0.5,0.5,4)); // Vértice 8
personaje.vertices.push( new THREE.Vector3(-0.5,0.5,4)); // Vértice 9
personaje.vertices.push( new THREE.Vector3(-0.5,-0.5,4)); // Vértice 10
personaje.vertices.push( new THREE.Vector3(0.5,-0.5,4)); // Vértice 11
personaje.vertices.push( new THREE.Vector3(0,0,4.5)); // Vértice 12

personaje.faces.push( new THREE.Face3(3,1,2)); // Cara 0
personaje.faces.push( new THREE.Face3(3,0,1)); // Cara 1
personaje.faces.push( new THREE.Face3(0,4,1)); // Cara 2
personaje.faces.push( new THREE.Face3(0,3,4)); // Cara 3
personaje.faces.push( new THREE.Face3(3,5,4)); // Cara 4
personaje.faces.push( new THREE.Face3(5,3,6)); // Cara 5
personaje.faces.push( new THREE.Face3(3,2,6)); // Cara 6
personaje.faces.push( new THREE.Face3(2,1,6)); // Cara 7
personaje.faces.push( new THREE.Face3(1,7,6)); // Cara 8
personaje.faces.push( new THREE.Face3(1,4,7)); // Cara 9
personaje.faces.push( new THREE.Face3(4,5,8)); // Cara 10
personaje.faces.push( new THREE.Face3(5,9,8)); // Cara 11
personaje.faces.push( new THREE.Face3(5,6,9)); // Cara 12
personaje.faces.push( new THREE.Face3(6,10,9)); // Cara 13
personaje.faces.push( new THREE.Face3(6,7,10)); // Cara 14
personaje.faces.push( new THREE.Face3(7,11,10)); // Cara 15
personaje.faces.push( new THREE.Face3(7,4,11)); // Cara 13
personaje.faces.push( new THREE.Face3(4,8,11)); // Cara 14
personaje.faces.push( new THREE.Face3(8,9,12)); // Cara 15
personaje.faces.push( new THREE.Face3(9,10,12)); // Cara 16
personaje.faces.push( new THREE.Face3(10,11,12)); // Cara 17
personaje.faces.push( new THREE.Face3(11,8,12)); // Cara 18

personaje.computeBoundingSphere();
personaje.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( personaje, material );

malla.rotateX(Math.PI*10/-16);
malla.position.y=-2;

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
//camara.position.y = 5;
camara.position.z = -10;
camara.lookAt(escena.position)

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );

//var render = function () {
//               requestAnimationFrame( render );
            
//                  malla.rotation.x += -0.1;
//                  malla.rotation.y += 0.1;
                renderizador.render( escena, camara );
//        };
        
//     render();
