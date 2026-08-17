"use client";

import {useEffect, useState} from "react";
import {ArrowRight} from "lucide-react";
import {Link} from "./SiteLink";

/**
 * Mobile-only persistent enquiry bar.
 *
 * On desktop the header CTA is always in view, so a floating bar would be
 * redundant. On a phone the header CTA is hidden behind the menu button and the
 * page is long, which leaves the primary action unreachable for most of the
 * scroll. The bar appears once the hero is behind you and is hidden from the
 * accessibility tree and the tab order until then.
 */
export function MobileCta(){
 const [visible,setVisible]=useState(false);

 useEffect(()=>{
  const onScroll=()=>setVisible(window.scrollY>window.innerHeight*.7);
  onScroll();
  window.addEventListener("scroll",onScroll,{passive:true});
  return()=>window.removeEventListener("scroll",onScroll);
 },[]);

 return <div className="hb-mobile-cta" data-visible={visible} aria-hidden={!visible}>
  <Link className="btn btn-primary" href="/contact/" tabIndex={visible?undefined:-1}>
   Request a consultation <ArrowRight size={16}/>
  </Link>
 </div>;
}
