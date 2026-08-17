"use client";

import {useEffect} from "react";

/** Adds .is-in to [data-reveal] elements as they scroll into view. */
export function Reveal(){
 useEffect(()=>{
  document.documentElement.classList.add("reveal-ready");
  const nodes=Array.from(document.querySelectorAll("[data-reveal]"));
  if(!nodes.length)return;
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
   nodes.forEach(n=>n.classList.add("is-in"));
   return;
  }
  const io=new IntersectionObserver(entries=>{
   entries.forEach(e=>{
    if(!e.isIntersecting)return;
    e.target.classList.add("is-in");
    io.unobserve(e.target);
   });
  },{rootMargin:"0px 0px -5% 0px",threshold:0});
  nodes.forEach(n=>io.observe(n));
  // safety net: never leave content hidden if an observation is missed
  const failsafe=window.setTimeout(()=>nodes.forEach(n=>n.classList.add("is-in")),2500);
  return()=>{window.clearTimeout(failsafe);io.disconnect();};
 },[]);
 return null;
}
