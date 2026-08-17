"use client";
import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
export function Motion(){useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;gsap.registerPlugin(ScrollTrigger);const ctx=gsap.context(()=>{
 const heroTimeline=gsap.timeline({paused:true})
  .from(".hero .eyebrow",{y:18,opacity:0,duration:.65,ease:"power3.out"})
  .from(".hero h1",{y:58,opacity:0,clipPath:"inset(0 0 100% 0)",duration:1.05,ease:"power4.out"},"-=.35")
  .from(".hero .lead, .hero-actions, .trust-line, .hero-index",{y:22,opacity:0,duration:.72,stagger:.08,ease:"power3.out"},"-=.5");
 const heroDelay=gsap.delayedCall(.3,()=>heroTimeline.play());
 ScrollTrigger.create({trigger:".hero",start:"top -2px",once:true,onEnter:()=>heroTimeline.play()});
 gsap.to(".hero-video",{scale:1.055,yPercent:3,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1.2}});
 gsap.utils.toArray<HTMLElement>(".category-card").forEach((el,i)=>gsap.from(el,{x:i%2?22:-22,duration:.8,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 90%",once:true}}));
 gsap.utils.toArray<HTMLElement>(".service-tile,.why-item,.process-row,.receive-card,.scenario-card").forEach(el=>gsap.from(el,{y:28,duration:.75,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 92%",once:true}}));
 gsap.utils.toArray<HTMLElement>(".section-head h2,.editorial-collage,.intro-diagram>div,.step,.faq details").forEach((el,i)=>gsap.from(el,{y:34,opacity:0,duration:.8,delay:(i%4)*.035,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 91%",once:true}}));
 gsap.to(".editorial-collage",{yPercent:-5,ease:"none",scrollTrigger:{trigger:".intro-story",start:"top bottom",end:"bottom top",scrub:1.4}});
 gsap.to(".intro-story",{backgroundPosition:"56% 100%",ease:"none",scrollTrigger:{trigger:".intro-story",start:"top bottom",end:"bottom top",scrub:1.6}});
 gsap.fromTo(".feature-portal-bg",{scale:1.08,yPercent:-2},{scale:1.02,yPercent:3,ease:"none",scrollTrigger:{trigger:".feature-portal",start:"top bottom",end:"bottom top",scrub:1.45}});
 gsap.from(".feature-portal-content>*",{y:30,opacity:0,duration:.75,stagger:.08,ease:"power3.out",scrollTrigger:{trigger:".feature-portal-content",start:"top 78%",once:true}});
 gsap.from(".scroll-service-card",{y:34,rotate:.5,duration:.8,stagger:.07,ease:"power3.out",scrollTrigger:{trigger:".all-services-canvas",start:"top 72%",once:true}});
 gsap.to(".services-canvas-art",{xPercent:-5,yPercent:5,ease:"none",scrollTrigger:{trigger:".all-services-canvas",start:"top bottom",end:"bottom top",scrub:1.5}});
 ScrollTrigger.refresh();
 return()=>heroDelay.kill();
 });return()=>ctx.revert()},[]);return null}
