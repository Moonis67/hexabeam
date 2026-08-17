import {Link} from "./SiteLink";
import {ArrowRight} from "lucide-react";
import {byCategory,categoryMeta,type CategoryKey} from "@/src/content/services";
import {CtaBand} from "./CtaBand";

export function CategoryPage({category}:{category:CategoryKey}){
 const meta=categoryMeta[category];
 const list=byCategory(category);
 return <main id="main">
  <section className="page-hero category-page-hero" data-category={category}><div className="container"><h1>{meta.name}</h1></div></section>
  <section className="section category-services-section"><div className="container"><div className="section-head"><div><div className="eyebrow">How we can help</div><h2>{meta.title}</h2></div><p className="lead">{meta.description}</p></div><div className="category-list">{list.map((s,index)=><Link className="service-tile" href={`/services/${s.slug}/`} aria-label={`Explore ${s.name}`} key={s.slug}><span className="service-tile-number">{String(index+1).padStart(2,"0")}</span><div><h3>{s.name}</h3><p>{s.heroDescription}</p><span className="service-tile-cta">Explore {s.name} <span aria-hidden="true">→</span></span></div></Link>)}</div><div className="category-explore-more"><Link className="btn btn-dark" href="/services/">Explore other categories <ArrowRight size={16}/></Link></div></div></section>
  <CtaBand/>
 </main>
}
