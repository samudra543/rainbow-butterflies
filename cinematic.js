/* Cinematic art direction — a landscape-first composition. */
(()=>{
document.body.classList.add('cinematic');
document.querySelector('.memory-gallery')?.remove();document.querySelector('.state-portals')?.remove();
document.querySelectorAll('.reveal-scene').forEach(el=>{el.classList.remove('reveal-scene');el.classList.add('is-seen')});
const hero=document.querySelector('.hero');hero.insertAdjacentHTML('afterbegin','<div class="cinema-backdrop" aria-hidden="true"><img src="assets/nagaland.jpg" alt=""></div><div class="cinema-shade" aria-hidden="true"></div>');
hero.querySelector('h1').innerHTML='GO WHERE<br>YOU FEEL<br>ALIVE.';
hero.querySelector('.location-note').textContent='The Northeast is calling.';
hero.querySelector('.hero-copy>p').innerHTML='Seven sisters. Wild landscapes. Local lives.<br>Go beyond the places you already know.';
hero.querySelector('.hero-footnote').textContent='Personal journeys with The Rainbow Butterflies';
hero.querySelector('.hero-index').innerHTML='<span>26.14° N</span><span>91.74° E · Your journey begins in the Northeast</span>';
hero.querySelector('.scroll-note').innerHTML='<span class="scroll-line"></span>Scroll into the unfamiliar';
document.querySelector('.intro-section h2').innerHTML='LESS ITINERARY.<br>MORE INSTINCT.';
document.querySelector('.intro-kicker').textContent='Travel with people who call it home';
document.querySelector('.intro-body').innerHTML='A walk through living roots. Tea with your host.<br>A road that turns into a story.<br>We bring the local knowledge. You bring the curiosity.';
document.querySelector('#seven-sisters .section-heading h2').innerHTML='PICK YOUR<br>OTHER WORLD.';
document.querySelector('#journeys .section-heading h2').innerHTML='FOLLOW<br>YOUR FEELING.';
document.querySelector('.ride-content h2').innerHTML='TAKE THE<br>LONG WAY.';
document.querySelector('.story-copy h2').innerHTML='THE PLACE.<br>THE PEOPLE.<br>THE CONNECTION.';
const heroArt=document.querySelector('#hero-world');heroArt.setAttribute('aria-hidden','true');heroArt.querySelectorAll('button').forEach(b=>b.tabIndex=-1);
const index=document.createElement('span');index.className='atlas-caption';index.textContent='Choose a state. Start a story.';document.querySelector('.state-tabs').before(index);
const panel=document.querySelector('#state-panel');const enhance=()=>{const title=panel.querySelector('h3');if(title)title.innerHTML=states.find(s=>s.id===activeState).name;};new MutationObserver(()=>{const title=panel.querySelector('h3'),name=states.find(s=>s.id===activeState).name;if(title&&title.textContent!==name)title.textContent=name}).observe(panel,{childList:true,subtree:true});enhance();
let queued=false;function paint(){queued=false;const p=Math.max(0,Math.min(1,-hero.getBoundingClientRect().top/hero.offsetHeight));hero.style.setProperty('--cinema-zoom',motionReduced()?1:1+p*.22);hero.style.setProperty('--cinema-pan',`${motionReduced()?0:p*100}px`)}function schedule(){if(!queued){queued=true;requestAnimationFrame(paint)}}window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);paint();
})();
