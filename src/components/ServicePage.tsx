import {Link} from "./SiteLink";
import {Check,ArrowRight} from "lucide-react";
import {categoryMeta,type Service} from "@/src/content/services";
import {serviceImageFor} from "@/src/content/serviceImages";
import {ConsultationForm} from "./ConsultationForm";
import {ServiceMobileCta} from "./ServiceMobileCta";

export function ServicePage({service}:{service:Service}){
 const cat=categoryMeta[service.category];
 const schema={"@context":"https://schema.org","@graph":[{"@type":"Service",name:service.name,description:service.heroDescription,provider:{"@type":"Organization",name:"Hexa Beam"},areaServed:{"@type":"Country",name:"United Arab Emirates"}},{"@type":"FAQPage",mainEntity:service.faq.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}]};
 return <main id="main">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\u003c")}}/>
  <section className="page-hero service-page-hero"><img className="service-page-hero-image" src={serviceImageFor(service.slug)} alt=""/><div className="container">
   <div className="breadcrumbs"><Link href="/">Home</Link> / <Link href={`/${service.category}/`}>{cat.name}</Link> / {service.name}</div>
   <h1>{service.heroTitle}</h1><p className="lead">{service.heroDescription}</p>
  </div></section>
  <section className="section"><div className="container service-layout"><article className="prose">
   <section id="service-overview"><h2>Overview</h2><p className="lead">{service.intro}</p>{service.regulated&&<div style={{marginTop:25,padding:22,borderLeft:"3px solid var(--gold-500)",background:"var(--surface)"}}><b>Important service note</b><p>{service.regulated}</p></div>}</section>
   <section><div className="eyebrow">Who it supports</div><h2>Is this service relevant to you?</h2><div className="check-grid">{service.audiences.map(x=><div className="check-item" key={x}><Check size={17}/>{x}</div>)}</div></section>
   <section><div className="eyebrow">Scope</div><h2>What Hexa Beam can coordinate</h2><div className="check-grid">{service.assistance.map(x=><div className="check-item" key={x}><Check size={17}/>{x}</div>)}</div></section>
   <section><div className="eyebrow">General process</div><h2>From requirement to completion</h2><div className="process-list">{service.process.map((x,i)=><div className="process-row" key={x}><div><h3>{x}</h3><p>{i===0?"We begin with the intended outcome and current status, not a generic package.":"Requirements are confirmed against the current case before the next step proceeds."}</p></div></div>)}</div></section>
   <section><div className="eyebrow">Considerations</div><h2>Plan these points early</h2><div className="check-grid">{service.considerations.map(x=><div className="check-item" key={x}><Check size={17}/>{x}</div>)}</div></section>
   <section><div className="eyebrow">Questions</div><h2>Frequently asked questions</h2><div className="faq">{service.faq.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></section>
  </article><aside className="sidebar"><div className="consult-card beam" id="service-enquiry"><div className="consult-sticker" aria-hidden="true"><b>Free</b><span>Initial review</span></div><ConsultationForm dark compact serviceName={service.name}/></div><Link className="service-explore-link" href="/services/">Explore other services <ArrowRight size={15}/></Link></aside></div></section>
  <section className="service-conversion-cta"><div className="container"><div><div className="eyebrow">Your next step</div><h2>Turn the requirement into a clear action plan.</h2><p>Start with a focused review of your objective, current position and likely connected requirements.</p></div><div className="service-conversion-actions"><div className="service-conversion-buttons"><Link className="btn btn-primary" href="#service-enquiry">Get my next-step plan <ArrowRight size={16}/></Link></div><span>Confidential · No obligation</span></div></div></section>
  <ServiceMobileCta/>
 </main>
}
