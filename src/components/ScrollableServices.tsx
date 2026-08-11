"use client";
import {useMemo,useRef,useState} from "react";
import {ArrowLeft,ArrowRight} from "lucide-react";
import {services,categoryMeta,type CategoryKey,type Service} from "@/src/content/services";
import {serviceImageFor} from "@/src/content/serviceImages";
import {Link} from "./SiteLink";

const categories:(CategoryKey|"all")[]=["all","business-setup","visas","tax-accounting","corporate-legal","business-support","logistics-concierge"];
const imageFor=(service:Service)=>serviceImageFor(service.slug);

export function ScrollableServices(){
 const [active,setActive]=useState<CategoryKey|"all">("all");
 const rail=useRef<HTMLDivElement>(null);
 const visible=useMemo(()=>active==="all"?services:services.filter(s=>s.category===active),[active]);
 const move=(direction:number)=>rail.current?.scrollBy({left:direction*Math.min(620,window.innerWidth*.78),behavior:"smooth"});
 const select=(category:CategoryKey|"all")=>{setActive(category);requestAnimationFrame(()=>rail.current?.scrollTo({left:0,behavior:"smooth"}))};
 return <>
  <div className="services-marquee-transition" aria-hidden="true"><div className="services-marquee-track"><span>ESTABLISH <i/> RESIDE <i/> OPERATE <i/> PROTECT <i/> MOVE <i/></span><span>ESTABLISH <i/> RESIDE <i/> OPERATE <i/> PROTECT <i/> MOVE <i/></span></div></div>
  <section className="all-services-canvas" aria-labelledby="all-services-title">
  <img className="services-canvas-art" src="/assets/brand/dubai-cutout.png" alt=""/>
  <div className="container services-canvas-head">
   <div><h2 id="all-services-title">Find the requirement.<br/><em>See what connects.</em></h2></div>
   <div className="services-canvas-guide"><p>Start with the outcome you need. Each page explains relevance, likely documents, the general process and related considerations.</p><Link className="text-link" href="/services/">View the complete index <ArrowRight size={15}/></Link></div>
  </div>
  <div className="container service-filter-row" role="toolbar" aria-label="Filter services by category">
   {categories.map(category=><button key={category} className={active===category?"active":""} onClick={()=>select(category)} aria-pressed={active===category}>{category==="all"?"All services":categoryMeta[category].name}<span>{category==="all"?services.length:services.filter(s=>s.category===category).length}</span></button>)}
  </div>
  <div className="services-rail-wrap">
   <div className="services-rail" ref={rail} tabIndex={0} aria-label={`${active==="all"?"All":categoryMeta[active].name} services`}>
    {visible.map((service,index)=><article className="scroll-service-card photo-art" data-category={service.category} key={service.slug}>
      <div className="scroll-card-media"><img src={imageFor(service)} alt="" loading="lazy"/><span className="scroll-card-number">{String(index+1).padStart(2,"0")}</span><span className="scroll-card-category">{categoryMeta[service.category].name}</span></div>
      <div className="scroll-card-body"><h3>{service.name}</h3><p>{service.heroDescription}</p><Link href={`/services/${service.slug}/`}>View requirements <ArrowRight size={15}/></Link></div>
     </article>)}
   </div>
   <div className="container rail-controls"><p>Drag or use the controls</p><div><button onClick={()=>move(-1)} aria-label="Previous services"><ArrowLeft/></button><button onClick={()=>move(1)} aria-label="Next services"><ArrowRight/></button></div></div>
  </div>
  </section>
 </>
}
