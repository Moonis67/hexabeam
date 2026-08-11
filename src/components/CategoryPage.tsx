import {Link} from "./SiteLink";
import {byCategory,categoryMeta,type CategoryKey} from "@/src/content/services";
import {CtaBand} from "./CtaBand";

export function CategoryPage({category}:{category:CategoryKey}){
 const meta=categoryMeta[category];
 const list=byCategory(category);
 return <main id="main">
  <section className="page-hero category-page-hero" data-category={category}><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link> / {meta.name}</div><h1>{meta.title}</h1><p className="lead">{meta.description}</p></div></section>
  <section className="section"><div className="container"><div className="section-head"><h2>Explore {meta.name.toLowerCase()} services</h2><p className="lead">Every engagement begins with the intended outcome, then maps the documents, authorities and related requirements around it.</p></div><div className="category-list">{list.map(s=><article className="service-tile beam" key={s.slug}><h3>{s.name}</h3><p>{s.heroDescription}</p><Link href={`/services/${s.slug}/`}>View service →</Link></article>)}</div></div></section>
  <CtaBand/>
 </main>
}
