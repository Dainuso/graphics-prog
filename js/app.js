let x = 0
let xDirection = 0.02
let yDirection = 0.02
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, window.innerWidth/ window.innerHeight, 0.1, 1000); 
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);  


///ACTUAL///
let geometry = new THREE.BoxGeometry(1,1,0);
let material = new THREE.MeshBasicMaterial( {color: "#0a6fb6"} );
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z=5;
function animate() {
    requestAnimationFrame(animate);
    ///cube.position.x += 0.005;
    renderer.render(scene, camera);
    if (cube.position.x >=5.8){
        xDirection = xDirection * -1;
        cube.material.color.setHex( 0XFF0000 );
    }
    cube.position.x = cube.position.x + xDirection;
    if (cube.position.x <= -5.8){
        xDirection = xDirection * -1;
        cube.material.color.setHex( 0x7CFC00 );
    }
    cube.position.x = cube.position.x + xDirection;
    if (cube.position.y >=2.5){
        yDirection = yDirection * -1;
        cube.material.color.setHex( 0x9400D3 );
    }
    cube.position.y = cube.position.y + yDirection;
    if (cube.position.y <= -2.5){
        yDirection = yDirection * -1;
        cube.material.color.setHex( 0x90EE90 );
    }
    cube.position.y = cube.position.y + yDirection;
}
animate();