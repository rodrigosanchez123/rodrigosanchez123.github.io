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
personaje.scale(15,15,15);

var personajematerial = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( personaje, personajematerial );

malla.rotateX(Math.PI*7/-16);
malla.position.y=-33;
malla.position.x=10;

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

////////////////Mago

var cabezamagog=[];
cabezamagog.push( new THREE.Vector2(0.01,0.0));
cabezamagog.push( new THREE.Vector2(2.5,1.5));
cabezamagog.push( new THREE.Vector2(3.5,5));
cabezamagog.push( new THREE.Vector2(3.5,7));
cabezamagog.push( new THREE.Vector2(2,8.5));
cabezamagog.push( new THREE.Vector2(1.5,8.8));
cabezamagog.push( new THREE.Vector2(1,9));
cabezamagog.push( new THREE.Vector2(0.01,9.5));

var geometriamago= new THREE.LatheGeometry(cabezamagog);
geometriamago.rotateX(Math.PI*9/16);
geometriamago.scale(5,5,5);
geometriamago.translate(0,24,-22);
var cabezamago= new THREE.Mesh(geometriamago);
// cuerpo
var cuerpomagogeo= new THREE.Shape();

cuerpomagogeo.moveTo(-10,1);
cuerpomagogeo.lineTo(10,1);
cuerpomagogeo.lineTo(20,-15);
cuerpomagogeo.lineTo(15,-15);
cuerpomagogeo.lineTo(10,-10);
cuerpomagogeo.lineTo(10,-35);
cuerpomagogeo.lineTo(5,-35);
cuerpomagogeo.lineTo(5,-25);
cuerpomagogeo.lineTo(-5,-25);
cuerpomagogeo.lineTo(-5,-35);
cuerpomagogeo.lineTo(-10,-35);
cuerpomagogeo.lineTo(-10,-10);
cuerpomagogeo.lineTo(-15,-15);
cuerpomagogeo.lineTo(-20,-15);
cuerpomagogeo.lineTo(-10,1);

var cuerpomagoforma = new THREE.ExtrudeGeometry( cuerpomagogeo, {amount: 10} );
var cuerpomago= new THREE.Mesh(cuerpomagoforma);

//capa
var CapaMagoPuntos = [];
for ( var i = 0; i < 10; i ++ ) {
	CapaMagoPuntos.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
var CapaMagoForma = new THREE.LatheGeometry( CapaMagoPuntos );
CapaMagoForma.translate(0,8,20);
CapaMagoForma.rotateZ(Math.PI);
CapaMagoForma.scale(2,2,1);
var CapaMago = new THREE.Mesh( CapaMagoForma );

// sombrero
var SombreroMagoForma= new THREE.CylinderGeometry(2,10,15);
SombreroMagoForma.translate(0,40,7.5);
var SombreroMago= new THREE.Mesh(SombreroMagoForma);

//monito
var Magoforma = new THREE.Geometry();
Magoforma.merge(cabezamago.geometry, cabezamago.matrix);
Magoforma.merge(cuerpomago.geometry, cuerpomago.matrix);
Magoforma.merge(CapaMago.geometry, CapaMago.matrix);
Magoforma.merge(SombreroMago.geometry, SombreroMago.matrix);


var Magomaterial= new THREE.MeshNormalMaterial();

var Mago= new THREE.Mesh(Magoforma,Magomaterial);
Mago.rotateY(Math.PI*7/8);
//Mago.rotateY(Math.PI/3)
Mago.position.x=-70;

//////////Gordito
var SombreroF = new THREE.CylinderGeometry(10, 2, 3);
var CuerpoF = new THREE.SphereGeometry(8);
var CabezaF = new THREE.SphereGeometry(3);
var SoporteF = new THREE.CylinderGeometry(1.5, 1.5, 10);
var BaseF = new THREE.CylinderGeometry(5, 5, 1);

SoporteF.rotateX(Math.PI/2);
SombreroF.translate(0,-21.5,0);
SombreroF.rotateX(Math.PI*3/2);
CabezaF.translate(0,0,18);
CuerpoF.translate(0,0,8.5);
SoporteF.translate(0,0,-4);
BaseF.translate(0,-9,0);
BaseF.rotateX(Math.PI/2);


var SombreroMalla = new THREE.Mesh(SombreroF);
var CuerpoMalla = new THREE.Mesh(CuerpoF);
var CabezaMalla= new THREE.Mesh(CabezaF);
var SoporteMalla= new THREE.Mesh(SoporteF);
var BaseMalla= new THREE.Mesh(BaseF);

var GorditoForma = new THREE.Geometry();

GorditoForma.merge(SombreroMalla.geometry, SombreroMalla.matrix);
GorditoForma.merge(CuerpoMalla.geometry, CuerpoMalla.matrix);
GorditoForma.merge(CabezaMalla.geometry, CabezaMalla.matrix);
GorditoForma.merge(SoporteMalla.geometry, SoporteMalla.matrix);
GorditoForma.merge(BaseMalla.geometry, BaseMalla.matrix);

GorditoForma.scale(2.5,2.5,2.5);

var GorditoMaterial = new THREE.MeshNormalMaterial();
var Gordito = new THREE.Mesh(GorditoForma, GorditoMaterial);
Gordito.rotateX(Math.PI/-2);
Gordito.position.x=-140;
Gordito.position.y=-15;
//////////////////////Espada
var EspadaPuntos = new THREE.Shape();

EspadaPuntos.moveTo(40, 30);
EspadaPuntos.lineTo(60, 30);
EspadaPuntos.lineTo(60, 60);
EspadaPuntos.lineTo(90, 60);
EspadaPuntos.lineTo(60, 70);
EspadaPuntos.lineTo(70, 120);
EspadaPuntos.lineTo(50, 140);
EspadaPuntos.lineTo(30, 120);
EspadaPuntos.lineTo(40, 70);
EspadaPuntos.lineTo(10, 60);
EspadaPuntos.lineTo(40, 60);
EspadaPuntos.lineTo(40, 30);

var EspadaForma = new THREE.ExtrudeGeometry( EspadaPuntos,
                                       {amount: 10} );
EspadaForma.scale(.7,.7,.7);
var EspadaMaterial = new THREE.MeshNormalMaterial();
var Espada = new THREE.Mesh( EspadaForma, EspadaMaterial );
Espada.position.x=100;
Espada.position.y=-58;
//////////Estrella
var EstrellaPuntos = new THREE.Shape();

EstrellaPuntos.moveTo(20, 20);
EstrellaPuntos.lineTo(40, 40);
EstrellaPuntos.lineTo(60, 20);
EstrellaPuntos.lineTo(53, 55);
EstrellaPuntos.lineTo(60, 75);
EstrellaPuntos.lineTo(47, 75);
EstrellaPuntos.lineTo(40, 90);
EstrellaPuntos.lineTo(33, 75);
EstrellaPuntos.lineTo(20, 75);
EstrellaPuntos.lineTo(27, 55);
EstrellaPuntos.lineTo(20, 20);

var EstrellaForma = new THREE.ExtrudeGeometry( EstrellaPuntos,
                                       {amount: 10} );
var EstrellaMaterial = new THREE.MeshNormalMaterial();
var Estrella = new THREE.Mesh(EstrellaForma, EstrellaMaterial );
Estrella.rotateY( Math.PI/8 );
Estrella.position.x=170;
Estrella.position.y=-55;
///////// piso


////////El espacio
var escena = new THREE.Scene();
escena.add( malla );
escena.add(monito);
escena.add(Mago);
escena.add(Gordito);
escena.add(Espada);
escena.add(Estrella);

var camara = new THREE.PerspectiveCamera();
//camara.position.y = 5;
camara.position.z =500;
camara.lookAt(escena.position)

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );

//var render = function () {
//               requestAnimationFrame( render );
            
//                  escena.rotation.y += -0.1;
//                  malla.rotation.y += 0.1;
                renderizador.render( escena, camara );
//        };
        
//     render();
