import {Link} from "./SiteLink";
import {Check,ArrowRight,ClipboardCheck,Route,ShieldCheck} from "lucide-react";
import {categoryMeta,type Service} from "@/src/content/services";
import {serviceImageFor} from "@/src/content/serviceImages";
import {ConsultationForm} from "./ConsultationForm";

export function ServicePage({service}:{service:Service}){
 const cat=categoryMeta[service.category];
 const schema={"@context":"https://schema.org","@graph":[{"@type":"Service",name:service.name,description:service.heroDescription,provider:{"@type":"Organization",name:"Hexa Beam"},areaServed:{"@type":"Country",name:"United Arab Emirates"}},{"@type":"FAQPage",mainEntity:service.faq.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}]};
 return <main id="main">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\u003c")}}/>
  <section className="page-hero"><div className="container">
   <div className="breadcrumbs"><Link href="/">Home</Link> / <Link href={`/${service.category}/`}>{cat.name}</Link> / {service.name}</div>
   <h1>{service.heroTitle}</h1><p className="lead">{service.heroDescription}</p>
   <div className="hero-actions"><Link className="btn btn-primary" href="#service-enquiry">Get a tailored next-step plan <ArrowRight size={16}/></Link><Link className="btn btn-outline" href="#service-overview">Check requirements</Link></div>
   <div className="service-hero-proof"><span><ShieldCheck size={15}/> Confidential</span><span><Route size={15}/> Case-specific guidance</span><span><ClipboardCheck size={15}/> Connected requirements mapped</span></div>
  </div></section>
  <div className="container" style={{marginTop:50}}><div className="beam" style={{background:"var(--surface)",maxHeight:520,overflow:"hidden",display:"grid",placeItems:"center"}}><img src={serviceImageFor(service.slug)} alt="" style={{width:"100%",height:500,objectFit:"cover"}}/></div></div>
  <section className="section"><div className="container service-layout"><article className="prose">
   <section id="service-overview"><div className="eyebrow">Overview</div><h2>Start with the full picture.</h2><p className="lead">{service.intro}</p>{service.regulated&&<div style={{marginTop:25,padding:22,borderLeft:"3px solid var(--gold-500)",background:"var(--surface)"}}><b>Important service note</b><p>{service.regulated}</p></div>}</section>
   <section><div className="eyebrow">Who it supports</div><h2>Is this service relevant to you?</h2><div className="check-grid">{service.audiences.map(x=><div className="check-item" key={x}><Check size={17}/>{x}</div>)}</div></section>
   <section><div className="eyebrow">Scope</div><h2>What Hexa Beam can coordinate</h2><div className="check-grid">{service.assistance.map(x=><div className="check-item" key={x}><Check size={17}/>{x}</div>)}</div></section>
   <section><div className="eyebrow">General process</div><h2>From requirement to completion</h2><div className="process-list">{service.process.map((x,i)=><div className="process-row" key={x}><div><h3>{x}</h3><p>{i===0?"We begin with the intended outcome and current status, not a generic package.":"Requirements are confirmed against the current case before the next step proceeds."}</p></div></div>)}</div></section>
   <section><div className="eyebrow">Documents</div><h2>What may be required</h2><p>Exact documents depend on the authority, jurisdiction and circumstances. A case-specific checklist follows the initial review.</p><div className="check-grid">{service.documents.map(x=><div className="check-item" key={x}><Check size={17}/>{x}</div>)}</div></section>
   <section><div className="eyebrow">Considerations</div><h2>Plan these points early</h2><div className="check-grid">{service.considerations.map(x=><div className="check-item" key={x}><Check size={17}/>{x}</div>)}</div></section>
   <section><div className="eyebrow">Questions</div><h2>Frequently asked questions</h2><div className="faq">{service.faq.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></section>
  </article><aside className="sidebar"><div className="consult-card beam" id="service-enquiry"><div className="consult-sticker" aria-hidden="true"><b>Free</b><span>Initial review</span></div><ConsultationForm dark compact serviceName={service.name}/></div></aside></div></section>
  <section className="service-conversion-cta"><div className="container"><div><div className="eyebrow">Your next step</div><h2>Turn the requirement into a clear action plan.</h2><p>Start with a focused review of your objective, current position and likely connected requirements.</p></div><div className="service-conversion-actions"><Link className="btn btn-primary" href="#service-enquiry">Get my next-step plan <ArrowRight size={16}/></Link><span>Confidential · No obligation</span></div></div></section>
  <Link className="service-mobile-cta" href="#service-enquiry">Get a tailored plan <ArrowRight size={16}/></Link>
 </main>
}
