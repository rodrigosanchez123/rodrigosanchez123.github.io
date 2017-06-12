function setup(){
  cubo1 = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshNormalMaterial());
  cubo2 = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshNormalMaterial());
  cubo3 = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshNormalMaterial());
  cubo4 = new THREE.Mesh( new THREE.BoxGeometry(1,1,1), new THREE.MeshNormalMaterial());
  pelota1 = new THREE.Mesh(new THREE.SphereGeometry(.4), new THREE.MeshNormalMaterial());
  pelota2 = new THREE.Mesh(new THREE.SphereGeometry(.4), new THREE.MeshNormalMaterial());
  
  cubo1.position.set(5,5,0);
  cubo1.rotateZ(Math.PI/4);
  cubo2.position.set(-5,-5,0);
  cubo2.rotateZ(Math.PI/4);
  cubo3.position.set(-5,5,0);
  cubo3.rotateZ(Math.PI/4);
  cubo4.position.set(5,-5,0);
  cubo4.rotateZ(Math.PI/4);
  pelota2.position.set(2,-2,0);
  
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 15;

  raycaster1 = new THREE.Raycaster(pelota1.position, new THREE.Vector3(1,1,0));
  raycaster2 = new THREE.Raycaster(pelota1.position, new THREE.Vector3(-1,-1,0));
  raycaster3 = new THREE.Raycaster(pelota2.position, new THREE.Vector3(-1,1,0));
  raycaster4 = new THREE.Raycaster(pelota2.position, new THREE.Vector3(1,-1,0));

  escena = new THREE.Scene();
  escena.add(cubo1);
  escena.add(cubo2);
  escena.add(cubo3);
  escena.add(cubo4);
  escena.add(pelota1);
  escena.add(pelota2);
  escena.add(camara);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  
  step = 0.05;
  step2 = 0.05;
  }
  
  function loop(){
  
 var muro1 = raycaster1.intersectObject(cubo1);
 var muro2 = raycaster2.intersectObject(cubo2);
 var muro3 = raycaster3.intersectObject(cubo3);
 var muro4 = raycaster4.intersectObject(cubo4);
 if((muro1.length > 0 && (muro1[0].distance <= 0.5)) || (muro2.length > 0 && (muro2[0].distance <= 0.5)))
step = -step;
if((muro3.length > 0 && (muro3[0].distance <= 0.5)) || (muro4.length > 0 && (muro4[0].distance <= 0.5)))
step2 = -step2;

pelota1.position.x += step;
pelota1.position.y += step;
 
pelota2.position.x += -step2;
pelota2.position.y += step2;

raycaster1.set(pelota1.position, new THREE.Vector3(1,1,0));
raycaster2.set(pelota1.position, new THREE.Vector3(-1,-1,0));
raycaster3.set(pelota2.position, new THREE.Vector3(-1,1,0));
raycaster4.set(pelota2.position, new THREE.Vector3(1,-1,0));
  renderer.render(escena,camara);
  requestAnimationFrame(loop);
  }
  
  var cubo1, cubo2, cubo3, cubo4, pelota1, pelota2, escena, camara, renderer;
  var raycaster1,raycaster2, raycaster3, raycaster4, raycaster5, step, step2;
  
  setup();
  loop();
  
