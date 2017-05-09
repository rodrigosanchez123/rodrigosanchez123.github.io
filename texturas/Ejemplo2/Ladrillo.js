function setup(){
THREE.ImageUtils.crossOrigin = '';
var textura = THREE.ImageUtils.loadTexture('');
var material = new THREE.MeshLambertMaterial({map: textura});

