"use client";

import {useRef} from "react";
import {ArrowLeft,ArrowRight,Check} from "lucide-react";
import {Link} from "./SiteLink";

const options=[
 {name:"Meydan",price:"Flexible setup packages",summary:"A fast, flexible option for starting in Dubai.",features:["100% foreign ownership","Choose up to 3 activity groups","Fully digital setup","Flexi-desk included","Visa options available"],bestFor:"Startups, consultants and online businesses"},
 {name:"IFZA",price:"Tailored pricing",summary:"A flexible setup built around your business needs.",features:["100% foreign ownership","Commercial and professional activities","Remote setup available","Flexible visa packages","Workspace options"],bestFor:"SMEs, entrepreneurs and growing companies"},
 {name:"DMCC",price:"Premium setup packages",summary:"A premium Dubai hub for established and international businesses.",features:["100% foreign ownership","Recognised Dubai business address","Wide choice of activities","Visa options available","Large international business community"],bestFor:"Trading, commodities and international companies"},
 {name:"Dubai Mainland",price:"Pricing based on your activity",summary:"A flexible choice for businesses serving customers across the UAE.",features:["100% foreign ownership for many activities","Trade across the UAE","Wide choice of business activities","Office and visa options","Suitable for teams and local operations"],bestFor:"Retail, contracting, professional services and growing UAE businesses"},
];

export function CompanySetupCarousel(){
 const rail=useRef<HTMLDivElement>(null);
 const move=(direction:number)=>rail.current?.scrollBy({left:direction*Math.min(440,window.innerWidth*.86),behavior:"smooth"});
 return <section className="feature feature-portal" aria-labelledby="company-options-title">
  <div className="feature-portal-bg" aria-hidden="true"/>
  <div className="container feature-portal-content">
   <div className="company-options-head">
    <div><div className="eyebrow">Company setup in Dubai and the UAE</div><h2 id="company-options-title">Choose the setup that fits your plans.</h2></div>
    <p>Compare a few popular options. We will help you check the activities, visas, workspace and total cost before you decide.</p>
   </div>
   <div className="company-carousel">
    <div className="company-card-rail" ref={rail} tabIndex={0} aria-label="Company setup options">
     {options.map((option,index)=><article className="company-option-card" key={option.name}>
      <div className="company-card-top"><span>{String(index+1).padStart(2,"0")}</span><strong>{option.name}</strong></div>
      <h3>{option.price}</h3>
      <p className="company-card-summary">{option.summary}</p>
      <ul>{option.features.map(feature=><li key={feature}><Check size={17}/><span>{feature}</span></li>)}</ul>
      <p className="company-card-best"><b>Best for:</b> {option.bestFor}</p>
      <Link href="/contact/">Get a quote <ArrowRight size={16}/></Link>
     </article>)}
    </div>
    <div className="company-carousel-footer">
     <p>Packages and authority fees can change. We confirm the current total before you proceed.</p>
     <div className="company-carousel-actions"><Link href="/contact/" className="other-zones-link">Inquire about other zones <ArrowRight size={15}/></Link><div className="company-carousel-controls"><button type="button" onClick={()=>move(-1)} aria-label="Previous company setup option"><ArrowLeft/></button><button type="button" onClick={()=>move(1)} aria-label="Next company setup option"><ArrowRight/></button></div></div>
    </div>
   </div>
  </div>
 </section>
}
