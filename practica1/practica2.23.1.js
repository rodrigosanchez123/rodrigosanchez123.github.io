var personaje= new THREE.Geometry();

personaje.vertices.push( new THREE.Vector3(1,1,0)); // Vértice 0
personaje.vertices.push( new THREE.Vector3(1,-1,0)); // Vértice 1
personaje.vertices.push( new THREE.Vector3(-1,-1,0)); // Vértice 2
personaje.vertices.push( new THREE.Vector3(-1,1,0)); // Vértice 3
personaje.vertices.push( new THREE.Vector3(2,2,1)); // Vértice 4
personaje.vertices.push( new THREE.Vector3(-2,2,1)); //Vértice 5
personaje.vertices.push( new THREE.Vector3(-2,-2,1)); //Vértice 6
personaje.vertices.push( new THREE.Vector3(2,-2,1)); //Vértice 7
personaje.vertices.push( new THREE.Vector3(0.5,0.5,4)); //Vértice 8

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

personaje.computeBoundingSphere();
personaje.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( personaje, material );

//malla.rotateX(Math.PI/10);

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
//camara.position.y = 5;
camara.position.z = -5;
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

