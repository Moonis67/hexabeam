"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {Link} from "./SiteLink";

/**
 * The site is a static export, so `next.config` redirects are not available.
 * Category URLs that were retired in the service-taxonomy split keep a real
 * page here that forwards to the replacement rather than returning a 404.
 */
export function LegacyRedirect({to,label}:{to:string;label:string}){
 const router=useRouter();

 useEffect(()=>{router.replace(to)},[router,to]);

 return <main id="main"><section className="section"><div className="container">
  <h1>This page has moved</h1>
  <p className="lead">You are being taken to {label}. If nothing happens, follow the link below.</p>
  <p style={{marginTop:24}}><Link className="btn btn-dark" href={to}>Go to {label}</Link></p>
 </div></section></main>;
}
