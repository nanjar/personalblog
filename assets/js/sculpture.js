/* Decorative 3D sculpture. CSS orbits remain visible without WebGL or the CDN. */
(() => {
 const host=document.getElementById('hologram-container');
 if(!host||!window.THREE)return;
 let renderer;
 try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});}catch{return;}
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));host.appendChild(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,1,.1,100);camera.position.z=8;
 const group=new THREE.Group();scene.add(group);
 const material=new THREE.MeshStandardMaterial({color:0xc7e9a2,metalness:.8,roughness:.24});
 const ring=new THREE.Mesh(new THREE.TorusGeometry(2,.065,12,120),material);ring.rotation.set(.65,.65,.3);group.add(ring);
 const second=new THREE.Mesh(new THREE.TorusGeometry(2.18,.022,8,120),material);second.rotation.set(1.15,-.4,-.25);group.add(second);
 for(let i=0;i<9;i++){const bead=new THREE.Mesh(new THREE.IcosahedronGeometry(i===0?.17:.07,1),material);const a=i/9*Math.PI*2;bead.position.set(Math.cos(a)*2,Math.sin(a)*1.85,Math.sin(a)*.8);group.add(bead);}
 scene.add(new THREE.HemisphereLight(0xffffff,0x344333,2));const light=new THREE.PointLight(0xd4f59a,2);light.position.set(3,3,4);scene.add(light);
 function size(){const r=host.getBoundingClientRect();renderer.setSize(r.width,r.height);camera.aspect=r.width/r.height;camera.updateProjectionMatrix();render();}
 let pointerX=0,pointerY=0,frame=0,visible=true;const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 function render(){renderer.render(scene,camera);}
 function animate(t){frame=0;if(!visible||document.hidden||reduced.matches)return;group.rotation.y=Math.sin(t*.00018)*.22+pointerX;group.rotation.x=Math.cos(t*.00015)*.12+pointerY;render();frame=requestAnimationFrame(animate);}
 function sync(){cancelAnimationFrame(frame);frame=0;if(visible&&!document.hidden&&!reduced.matches)frame=requestAnimationFrame(animate);else render();}
 document.querySelector('.hero').addEventListener('pointermove',e=>{if(reduced.matches)return;const r=host.getBoundingClientRect();pointerX=(e.clientX-r.left-r.width/2)/r.width*.15;pointerY=(e.clientY-r.top-r.height/2)/r.height*.1;});
 new ResizeObserver(size).observe(host);new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();}).observe(host);
 document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);size();sync();
})();
