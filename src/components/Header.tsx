"use client";
import { useState } from "react";
import {Link} from "./SiteLink";
import { Menu, X, Phone, Mail, MessageCircle, ChevronDown } from "lucide-react";
import { categoryMeta, byCategory, type CategoryKey } from "@/src/content/services";

const allCats:CategoryKey[]=["business-setup","visas","accounting","tax-accounting","corporate-legal","corporate-services","property-valuation","logistics","chauffeur-transport"];

export function Header(){
 const [open,setOpen]=useState(false);
 return <>
  <a className="skip-link" href="#main">Skip to content</a>
  <div className="utility"><div className="container"><div className="utility-links"><span><Phone size={12}/> Dubai, UAE</span><span><Mail size={12}/> Contact details to be confirmed</span><span><MessageCircle size={12}/> WhatsApp</span></div><span>EN&nbsp;&nbsp; / &nbsp;&nbsp;AR</span></div></div>
  <header className="header"><div className="container header-inner">
   <Link className="logo-frame" href="/" aria-label="Hexa Beam home"><img className="logo" src="/assets/logo/hexabeam-logo-transparent.png" alt="Hexa Beam"/></Link>
   <nav className="desktop-nav" aria-label="Main navigation">
    <div className="nav-group services-nav-group">
     <Link className="nav-item" href="/services/">Services <ChevronDown size={13}/></Link>
     <div className="mega services-mega"><div className="services-mega-head"><div><div className="mega-title">Dubai and UAE services</div><h3>Find the support you need.</h3></div><Link href="/services/">View all services →</Link></div><div className="services-mega-grid">{allCats.map(cat=><section className="services-mega-group" key={cat}><Link className="services-mega-category" href={`/${cat}/`}>{categoryMeta[cat].name}</Link>{byCategory(cat).map(service=><Link key={service.slug} href={`/services/${service.slug}/`}>{service.name}</Link>)}</section>)}</div></div>
    </div>
    <Link className="nav-item" href="/about/">About</Link>
   </nav>
   <Link className="btn btn-dark" href="/contact/">Free consultation</Link>
   <button className="menu-btn" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  </div></header>
  <nav id="mobile-menu" className={`mobile-panel ${open?"open":""}`} aria-label="Mobile navigation">
   <Link className="mobile-all-services" onClick={()=>setOpen(false)} href="/services/">All Services</Link>
   <div className="mobile-service-groups">{allCats.map(cat=><details key={cat}><summary>{categoryMeta[cat].name}<ChevronDown size={15}/></summary><div><Link onClick={()=>setOpen(false)} href={`/${cat}/`}>View {categoryMeta[cat].name}</Link>{byCategory(cat).map(service=><Link onClick={()=>setOpen(false)} key={service.slug} href={`/services/${service.slug}/`}>{service.name}</Link>)}</div></details>)}</div>
   <Link onClick={()=>setOpen(false)} href="/about/">About</Link><Link onClick={()=>setOpen(false)} href="/contact/">Contact / free consultation</Link>
  </nav>
 </>;
}
