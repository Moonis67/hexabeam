"use client";

import {useEffect,useState} from "react";
import {ArrowRight} from "lucide-react";
import {Link} from "./SiteLink";

export function ServiceMobileCta(){
 const [visible,setVisible]=useState(false);

 useEffect(()=>{
  const form=document.querySelector("#service-enquiry");
  const footer=document.querySelector(".footer");
  const update=()=>{
   const hasStarted=window.scrollY>Math.min(520,window.innerHeight*.55);
   const formReached=form?form.getBoundingClientRect().top<=window.innerHeight*.88:false;
   const footerReached=footer?footer.getBoundingClientRect().top<=window.innerHeight*.92:false;
   setVisible(hasStarted&&!formReached&&!footerReached);
  };
  update();
  window.addEventListener("scroll",update,{passive:true});
  window.addEventListener("resize",update);
  return()=>{
   window.removeEventListener("scroll",update);
   window.removeEventListener("resize",update);
  };
 },[]);

 return <Link className={`service-mobile-cta ${visible?"is-visible":""}`} href="#service-enquiry">Get a tailored plan <ArrowRight size={16}/></Link>;
}
