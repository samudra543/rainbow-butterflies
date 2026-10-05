/* All motion follows native scrolling; no wheel capture or scroll hijacking. */
(()=>{
const ribbon=document.querySelector('.region-ribbon>div');ribbon.innerHTML+=ribbon.innerHTML;
const ride=document.querySelector('#motorcycle'),stage=document.createElement('div');stage.className='ride-scroll-stage';ride.before(stage);stage.append(ride);ride.insertAdjacentHTML('beforeend','<div class="ride-progress" aria-hidden="true">TAKE THE LONG WAY</div>');
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));let pending=false;
function frame(){pending=false;const reduced=motionReduced(),mobile=innerWidth<=760;const hero=document.querySelector('.hero');const hp=clamp(-hero.getBoundingClientRect().top/hero.offsetHeight);hero.style.setProperty('--hero-copy-y',`${reduced?0:hp*-100}px`);hero.style.setProperty('--hero-opacity',reduced?1:1-hp*.85);hero.style.setProperty('--hero-art-y',`${reduced?0:hp*140}px`);hero.style.setProperty('--hero-scale',reduced?1:1+hp*.22);
const rect=stage.getBoundingClientRect();const p=mobile?clamp((innerHeight-rect.top)/(innerHeight+rect.height)):clamp(-rect.top/Math.max(1,stage.offsetHeight-innerHeight));ride.style.setProperty('--travel-x',`${reduced?0:mobile?(p-.5)*80:180-p*360}px`);ride.style.setProperty('--travel-y',`${reduced||mobile?0:60-p*90}px`);ride.style.setProperty('--travel-r',`${reduced?0:-13+p*20}deg`);ride.style.setProperty('--travel-scale',reduced||mobile?1:.78+p*.28);ride.style.setProperty('--letter-x',`${reduced?0:100-p*220}px`);ride.style.setProperty('--ride-progress',Math.max(.05,p));ride.style.setProperty('--ride-copy-y',`${reduced||mobile?0:p*-35}px`);
}
function schedule(){if(!pending){pending=true;requestAnimationFrame(frame)}}window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);document.querySelector('#motion-toggle').addEventListener('click',schedule);reduceQuery.addEventListener('change',schedule);frame();
})();
