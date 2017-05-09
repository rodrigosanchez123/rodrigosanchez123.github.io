function setup(){
THREE.ImageUtils.crossOrigin = '';
var textura = THREE.ImageUtils.loadTexture('https:create.js');
var material = new THREE.MeshLambertMaterial({map: textura});
var forma = new THREE.BoxGeometry(1,4,9);
malla = new THREE.Mesh();
