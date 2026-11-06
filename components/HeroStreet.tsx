'use client';
import { useEffect, useRef } from 'react';

export default function HeroStreet(){
 const ref=useRef<HTMLElement>(null);
 useEffect(()=>{
  const figure=ref.current;
  const hero=figure?.closest('section');
  if(!figure||!hero)return;
  const media=window.matchMedia('(min-width: 801px) and (prefers-reduced-motion: no-preference)');
  let frame=0;
  const update=()=>{
   frame=0;
   if(!media.matches){figure.style.transform='none';return;}
   const rect=hero.getBoundingClientRect();
   if(rect.bottom<0||rect.top>window.innerHeight)return;
   // Small, bounded movement keeps the entire map within the hero.
   const progress=Math.max(0,Math.min(1,-rect.top/rect.height));
   figure.style.transform=`translate3d(0, ${-36*progress}px, 0)`;
  };
  const request=()=>{if(!frame)frame=window.requestAnimationFrame(update);};
  window.addEventListener('scroll',request,{passive:true});
  window.addEventListener('resize',request);
  media.addEventListener('change',request);
  update();
  return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',request);window.removeEventListener('resize',request);media.removeEventListener('change',request);};
 },[]);
 return <figure ref={ref} className="street"><img src="/straatkaart-transparant.png" alt="Abstracte kleurrijke 3D-kaart van de Hendrik Luytenstraat met eenvoudige bouwvolumes en de aansluiting op Roerzicht"/></figure>;
}
