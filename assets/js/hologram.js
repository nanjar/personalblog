
const container=document.getElementById('hologram-container');
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
container.appendChild(renderer.domElement);
camera.position.z=4;
const sphere=new THREE.Mesh(
 new THREE.IcosahedronGeometry(1.5,4),
 new THREE.MeshBasicMaterial({color:0x00d4ff,wireframe:true})
);
scene.add(sphere);
function animate(){requestAnimationFrame(animate);sphere.rotation.y+=0.003;renderer.render(scene,camera);}
animate();
