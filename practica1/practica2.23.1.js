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

personaje.scale(20,20,20);
var personajematerial = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( personaje, personajematerial );

malla.rotateX(Math.PI*10/-16);
malla.position.y=-2;
malla.position.x=30;
//El Monito
var cabezageo=[];
cabezageo.push( new THREE.Vector2(0.01,0.0));
cabezageo.push( new THREE.Vector2(2.5,1.5));
cabezageo.push( new THREE.Vector2(3.5,5));
cabezageo.push( new THREE.Vector2(3.5,7));
cabezageo.push( new THREE.Vector2(2,8.5));
cabezageo.push( new THREE.Vector2(1.5,8.8));
cabezageo.push( new THREE.Vector2(1,9));
cabezageo.push( new THREE.Vector2(0.01,9.5));

var geometria= new THREE.LatheGeometry(cabezageo);
geometria.rotateX(Math.PI*9/16);
geometria.scale(5,5,5);
geometria.translate(0,24,-22);
var cabeza= new THREE.Mesh(geometria);
// cuerpo
var cuerpof= new THREE.Shape();

cuerpof.moveTo(-10,1);
cuerpof.lineTo(10,1);
cuerpof.lineTo(20,-15);
cuerpof.lineTo(15,-15);
cuerpof.lineTo(10,-10);
cuerpof.lineTo(10,-35);
cuerpof.lineTo(5,-35);
cuerpof.lineTo(5,-25);
cuerpof.lineTo(-5,-25);
cuerpof.lineTo(-5,-35);
cuerpof.lineTo(-10,-35);
cuerpof.lineTo(-10,-10);
cuerpof.lineTo(-15,-15);
cuerpof.lineTo(-20,-15);
cuerpof.lineTo(-10,1);

var cuerpoforma = new THREE.ExtrudeGeometry( cuerpof, {amount: 10} );
var cuerpo= new THREE.Mesh(cuerpoforma);

//monito
var monitoforma = new THREE.Geometry();
monitoforma.merge(cabeza.geometry, cabeza.matrix);
monitoforma.merge(cuerpo.geometry, cuerpo.matrix);


var material= new THREE.MeshNormalMaterial();

var monito= new THREE.Mesh(monitoforma,material);
monito.rotateY(Math.PI*7/8);
monito.position.x=70;


//El espacio
var escena = new THREE.Scene();
escena.add( malla );
escena.add(monito);

var camara = new THREE.PerspectiveCamera();
//camara.position.y = 5;
camara.position.z = -300;
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
