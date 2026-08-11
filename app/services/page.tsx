import {ArrowUpRight} from "lucide-react";
import {Link} from "@/src/components/SiteLink";
import {services,categoryMeta,type CategoryKey} from "@/src/content/services";
import {serviceImageFor} from "@/src/content/serviceImages";
import {CtaBand} from "@/src/components/CtaBand";
const categories:CategoryKey[]=["business-setup","visas","tax-accounting","corporate-legal","business-support","logistics-concierge"];

export default function Services(){return <main id="main">
 <section className="page-hero services-index-hero"><div className="container"><h1>One structured UAE service ecosystem.</h1><p className="lead">Select a requirement to see the likely process, documents and connected support.</p></div></section>
 <section className="section services-directory-section"><div className="container">
  {categories.map(category=><section className="services-directory-group" key={category}><h2>{categoryMeta[category].name}</h2><div className="services-directory">{services.filter(service=>service.category===category).map(service=><Link className="service-directory-card" href={`/services/${service.slug}/`} key={service.slug}>
    <span className="service-directory-number">{String(services.indexOf(service)+1).padStart(2,"0")}</span>
    <div className="service-directory-copy"><h3>{service.name}</h3><p>{service.heroDescription}</p></div>
    <img src={serviceImageFor(service.slug)} alt="" loading="lazy"/>
    <span className="service-directory-arrow" aria-hidden="true"><ArrowUpRight size={18}/></span>
   </Link>)}</div></section>)}
 </div></section>
 <CtaBand/>
 </main>}
