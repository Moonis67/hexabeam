"use client";
import { useState } from "react";
import {Link} from "./SiteLink";
import { Menu, X, Phone, Mail, MessageCircle, ChevronDown } from "lucide-react";
import { categoryMeta, byCategory, type CategoryKey } from "@/src/content/services";

const cats:CategoryKey[]=["business-setup","visas","tax-accounting","corporate-legal","business-support","logistics-concierge"];
const featured:Record<CategoryKey,string[]>={
 "business-setup":["company-formation","mainland-company-setup","free-zone-company-setup","company-liquidation"],
 visas:["investor-partner-visa","employee-visa","family-visa","golden-visa"],
 "tax-accounting":["bookkeeping-accounting","vat","corporate-tax","wps-salary-transfers"],
 "corporate-legal":["power-of-attorney","inheritance-estate-legal-heir","succession-planning","document-attestation"],
 "business-support":["corporate-bank-account","property-valuation","pro-government-services","business-relocation"],
 "logistics-concierge":["freight-logistics","limousine-chauffeur","airport-transfers","corporate-transportation"]
};

export function Header(){
 const [open,setOpen]=useState(false);
 return <>
  <a className="skip-link" href="#main">Skip to content</a>
  <div className="utility"><div className="container"><div className="utility-links"><span><Phone size={12}/> Dubai, UAE</span><span><Mail size={12}/> Contact details to be confirmed</span><span><MessageCircle size={12}/> WhatsApp</span></div><span>EN&nbsp;&nbsp; / &nbsp;&nbsp;AR</span></div></div>
  <header className="header"><div className="container header-inner">
   <Link className="logo-frame" href="/" aria-label="Hexa Beam home"><img className="logo" src="/assets/logo/hexabeam-logo-transparent.png" alt="Hexa Beam"/></Link>
   <nav className="desktop-nav" aria-label="Main navigation">
    <Link className="nav-item" href="/services/">All Services</Link>
    {cats.map(cat=>{const list=byCategory(cat);const remaining=list.filter(service=>!featured[cat].includes(service.slug));return <div className="nav-group" key={cat}>
     <Link className="nav-item" href={`/${cat}/`}>{categoryMeta[cat].name}<ChevronDown size={13}/></Link>
     <div className="mega">
      <div><div className="mega-title">Featured</div>{featured[cat].map(slug=>{const s=list.find(x=>x.slug===slug);return s?<Link key={slug} href={`/services/${slug}/`}>{s.name}</Link>:null})}</div>
      <div><div className="mega-title">More support</div>{remaining.slice(0,4).map(s=><Link key={s.slug} href={`/services/${s.slug}/`}>{s.name}</Link>)}</div>
      <div><div className="mega-title">Also available</div>{remaining.slice(4,8).map(s=><Link key={s.slug} href={`/services/${s.slug}/`}>{s.name}</Link>)}</div>
      <div className="mega-panel"><div className="mega-title">Dubai and UAE services</div><h3>Explore {categoryMeta[cat].name.toLowerCase()}.</h3><p>See the available services, requirements and connected next steps in this category.</p><Link className="btn btn-primary" href={`/${cat}/`}>View this category</Link></div>
     </div></div>})}
    <Link className="nav-item" href="/about/">About</Link>
   </nav>
   <Link className="btn btn-dark" href="/contact/">Free consultation</Link>
   <button className="menu-btn" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  </div></header>
  <nav id="mobile-menu" className={`mobile-panel ${open?"open":""}`} aria-label="Mobile navigation">
   <Link onClick={()=>setOpen(false)} href="/services/">All Services</Link>
   {cats.map(cat=><Link onClick={()=>setOpen(false)} key={cat} href={`/${cat}/`}>{categoryMeta[cat].name}</Link>)}
   <Link onClick={()=>setOpen(false)} href="/about/">About</Link><Link onClick={()=>setOpen(false)} href="/contact/">Contact / free consultation</Link>
  </nav>
 </>;
}
