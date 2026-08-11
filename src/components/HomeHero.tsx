"use client";

import {useEffect, useRef, useState} from "react";
import {ArrowRight} from "lucide-react";
import {Link} from "./SiteLink";

const INTRO_VIDEO = "/assets/video/hexabeam-hero-intro.mp4";
const LOOP_VIDEO = "/assets/video/hexabeam-hero-loop.mp4";

// Module state survives client-side navigation, but resets on a full refresh.
let introHasPlayed = false;

export function HomeHero(){
 const [ready,setReady]=useState(false);
 const [videoSrc,setVideoSrc]=useState(()=>introHasPlayed?LOOP_VIDEO:INTRO_VIDEO);
 const video=useRef<HTMLVideoElement>(null);
 const loopPreload=useRef<HTMLVideoElement|null>(null);

 useEffect(()=>{
  if(video.current&&video.current.readyState>=3)setReady(true);
  const fallback=window.setTimeout(()=>setReady(true),2500);
  return()=>{
   window.clearTimeout(fallback);
   if(loopPreload.current){
    loopPreload.current.removeAttribute("src");
    loopPreload.current.load();
   }
  };
 },[]);

 const warmLoopVideo=()=>{
  if(videoSrc!==INTRO_VIDEO||loopPreload.current)return;
  const nextVideo=document.createElement("video");
  nextVideo.preload="auto";
  nextVideo.muted=true;
  nextVideo.src=LOOP_VIDEO;
  nextVideo.load();
  loopPreload.current=nextVideo;
 };

 const playLoopVideo=()=>{
  if(videoSrc!==INTRO_VIDEO)return;
  introHasPlayed=true;
  setVideoSrc(LOOP_VIDEO);
 };

 return <section className={`hero ${ready?"hero-ready":"hero-loading"}`}>
  <video
   key={videoSrc}
   ref={video}
   className="hero-video"
   src={videoSrc}
   autoPlay
   muted
   loop={videoSrc===LOOP_VIDEO}
   playsInline
   preload="auto"
   poster="/assets/web/dubai-architecture.webp"
   aria-hidden="true"
   onCanPlay={()=>setReady(true)}
   onPlaying={warmLoopVideo}
   onEnded={playLoopVideo}
   onError={playLoopVideo}
  />
  <div className="hero-beam-mark" aria-hidden="true"/>
  <div className="container hero-grid"><div className="hero-copy"><h1>Move forward in <em>Dubai and the UAE.</em></h1><p className="lead">Set up a company, secure residency and manage the tax, accounting, legal and operational requirements that follow, all through one coordinated point of contact.</p><div className="hero-actions"><Link className="btn btn-primary" href="/contact/">Plan your next step <ArrowRight size={16}/></Link><Link className="btn btn-outline" href="/services/">Explore all services</Link></div></div></div>
 </section>
}
