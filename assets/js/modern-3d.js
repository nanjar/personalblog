(() => {
 const toggle=document.querySelector('.mobile-toggle'),menu=document.querySelector('.menu');
 function closeMenu(){menu.classList.remove('active');toggle.setAttribute('aria-expanded','false');}
 toggle.addEventListener('click',()=>{const open=menu.classList.toggle('active');toggle.setAttribute('aria-expanded',String(open));});
 menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
 const modal=document.getElementById('cinematicModal'),close=document.getElementById('closeModal'),contact=document.getElementById('contactBtn');
 function dismiss(){modal.classList.remove('show');modal.hidden=true;document.body.style.overflow='';contact.focus();}
 contact.addEventListener('click',e=>{e.preventDefault();modal.hidden=false;modal.classList.add('show');document.body.style.overflow='hidden';close.focus();});
 close.addEventListener('click',dismiss);
 modal.addEventListener('click',e=>{if(e.target===modal||e.target.classList.contains('modal-overlay'))dismiss();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();if(!modal.hidden)dismiss();}if(!modal.hidden&&e.key==='Tab'){e.preventDefault();close.focus();}});
 const music=document.getElementById('bgMusic'),button=document.getElementById('musicToggle');
 button.addEventListener('click',async()=>{if(music.paused){try{await music.play();}catch{button.setAttribute('aria-label','Playback unavailable. Try again');}}else music.pause();});
 function player(){button.textContent=music.paused?'▶':'❚❚';button.setAttribute('aria-label',music.paused?'Play music':'Pause music');button.setAttribute('aria-pressed',String(!music.paused));}
 music.addEventListener('play',player);music.addEventListener('pause',player);player();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(pointer: fine)');
 document.addEventListener('pointermove',e=>{if(reduced.matches||!fine.matches)return;const card=e.target.closest('.service-card,.blog-card');if(!card)return;const r=card.getBoundingClientRect();card.style.setProperty('--rx',`${-(e.clientY-r.top-r.height/2)/r.height*5}deg`);card.style.setProperty('--ry',`${(e.clientX-r.left-r.width/2)/r.width*5}deg`);});
 document.addEventListener('pointerout',e=>{const card=e.target.closest('.service-card,.blog-card');if(card&&!card.contains(e.relatedTarget)){card.style.removeProperty('--rx');card.style.removeProperty('--ry');}});
})();
