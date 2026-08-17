"use client";

import {useEffect} from "react";

/** A lightweight ambient layer: page progress and a cursor-following card
 * highlight. It does not own content, so the page remains useful before this
 * client component hydrates. */
export function BeamExperience(){
 useEffect(()=>{
  const root=document.documentElement;
  let frame=0;

  const updateProgress=()=>{
   if(frame)return;
   frame=window.requestAnimationFrame(()=>{
    const distance=root.scrollHeight-window.innerHeight;
    root.style.setProperty("--hb-page-progress",String(distance>0?window.scrollY/distance:0));
    frame=0;
   });
  };

  const trackCard=(event:PointerEvent)=>{
   if(event.pointerType==="touch")return;
   const card=(event.target as HTMLElement).closest<HTMLElement>(".hb-service-card,.hb-engagement,.hb-ongoing article");
   if(!card)return;
   const rect=card.getBoundingClientRect();
   card.style.setProperty("--hb-pointer-x",`${event.clientX-rect.left}px`);
   card.style.setProperty("--hb-pointer-y",`${event.clientY-rect.top}px`);
  };

  window.addEventListener("scroll",updateProgress,{passive:true});
  document.addEventListener("pointermove",trackCard,{passive:true});
  updateProgress();

  return()=>{
   window.removeEventListener("scroll",updateProgress);
   document.removeEventListener("pointermove",trackCard);
   if(frame)window.cancelAnimationFrame(frame);
  };
 },[]);

 return <div className="hb-progress" aria-hidden="true"><i/></div>;
}
