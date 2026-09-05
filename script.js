document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.navbar').classList.toggle('open'));
function sendMail(e){e.preventDefault();const n=document.getElementById('name').value;const em=document.getElementById('email').value;const m=document.getElementById('message').value;window.location.href=`mailto:ashutosh20051@gmail.com?subject=Portfolio%20message%20from%20${encodeURIComponent(n)}&body=${encodeURIComponent(m+'\n\nReply to: '+em)}`;}

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>document.querySelector('.navbar')?.classList.remove('open')));

const progress=document.getElementById('scrollProgress'),back=document.getElementById('backTop');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max?window.scrollY/max*100:0)+'%';back.classList.toggle('show',window.scrollY>500);});
back?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const typeEl=document.getElementById('typeText');
if(typeEl){const phrases=['building','building projects','solving problems','learning new things','turning ideas into reality'];let wi=0,ci=0,del=false;function type(){let w=phrases[wi];if(!del&&ci<w.length){ci++;typeEl.textContent=w.slice(0,ci);setTimeout(type,65)}else if(!del){del=true;setTimeout(type,1200)}else if(ci>0){ci--;typeEl.textContent=w.slice(0,ci);setTimeout(()=>{if(ci===0){wi=(wi+1)%phrases.length;ci=0;del=false;typeEl.textContent=phrases[wi].slice(0,1);setTimeout(type,65)}else{type()}},35)}else{wi=(wi+1)%phrases.length;ci=1;del=false;typeEl.textContent=phrases[wi].slice(0,ci);setTimeout(type,65)}}type();}

document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');let f=b.dataset.filter;document.querySelectorAll('.project').forEach(p=>p.classList.toggle('hidden',f!='all'&&p.dataset.category!=f));}));

if(window.matchMedia('(pointer:fine)').matches){document.querySelectorAll('.interactive-card').forEach(c=>{c.addEventListener('mousemove',e=>{let r=c.getBoundingClientRect(),x=e.clientX-r.left,rw=r.width,y=e.clientY-r.top,rh=r.height;c.style.transform=`perspective(700px) rotateX(${-(y/rh-.5)*5}deg) rotateY(${(x/rw-.5)*5}deg) translateY(-4px)`});c.addEventListener('mouseleave',()=>c.style.transform='')});}

const navLinks=document.querySelectorAll('.nav-links a[href^="#"]');
const sections=[...document.querySelectorAll('main section[id]')];

function updateActiveNav(){
  if(!sections.length) return;

  const marker=window.scrollY + 140;
  let current=sections[0].id;

  for(const section of sections){
    if(section.offsetTop <= marker){
      current=section.id;
    }else{
      break;
    }
  }

  navLinks.forEach(link=>{
    const isActive=link.getAttribute('href') === `#${current}`;
    link.classList.toggle('active',isActive);
    if(isActive) link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
}

window.addEventListener('scroll',updateActiveNav,{passive:true});
window.addEventListener('resize',updateActiveNav);
window.addEventListener('load',updateActiveNav);
updateActiveNav();
