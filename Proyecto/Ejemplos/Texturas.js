function setup(){
escena= new THREE.Scene();
var loader= new THREE.TextureLoader();
     	loader.load('https:piedra.jpg', function (piedra){
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


var Magomaterial= new THREE.MeshBasicMaterial({map:piedra,side:THREE.DoubleSide});

var Mago= new THREE.Mesh(Magoforma,Magomaterial);
Mago.rotateY(Math.PI*7/8);
//monito.rotateY(Math.PI/3)
escena.add(Mago);
});

var loader= new THREE.TextureLoader();
    loader.load('https:cesped.jpg', function ( planoimagen ) {
    var PlanoGeometria = new THREE.BoxGeometry(150,170,1);
    var PlanoMaterial = new THREE.MeshBasicMaterial({map:planoimagen, side:THREE.DoubleSide});
	    plano = new THREE.Mesh(PlanoGeometria,PlanoMaterial);
	plano.position.y=-50;
  	plano.rotateX(Math.PI/2);
	plano.scale.set(2,2,2);
        escena.add(plano);
});

var material = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('https:cielo.jpg'),  side: THREE.BackSide});
var cubo = new THREE.BoxGeometry(500,500,500);
var fondo = new THREE.Mesh(cubo,material);
escena.add(fondo);
	
camara= new THREE.PerspectiveCamera();
camara.position.z=300;
camara.lookAt(escena.position);

renderizador= new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);
}

function loop() {
               requestAnimationFrame( loop );
            
//                  monito.rotation.y += 0.1;
//                  cabeza.rotation.x += 0.1;
                renderizador.render( escena, camara );
}

var escena, camara, renderizador;
setup();
loop();
