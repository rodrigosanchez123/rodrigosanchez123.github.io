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


var escena= new THREE.Scene();
escena.add(monito);

var camara= new THREE.PerspectiveCamera();
camara.position.z=300;
camara.lookAt(escena.position);

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
//renderizador.render(escena,camara)

//var render = function () {
//               requestAnimationFrame( render );
            
//                  monito.rotation.y += 0.1;
//                  cabeza.rotation.x += 0.1;
                renderizador.render( escena, camara );
//        };
        
//     render();
