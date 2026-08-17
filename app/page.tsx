import {Link} from "@/src/components/SiteLink";
import {Building2,Landmark,BookOpen,Calculator,Scale,BriefcaseBusiness,Home as HomeIcon,Truck,Car,ArrowRight,Check,FileText} from "lucide-react";
import {categoryMeta,byCategory,type CategoryKey} from "@/src/content/services";
import {CtaBand} from "@/src/components/CtaBand";
import {HomeHero} from "@/src/components/HomeHero";
import {CompanySetupCarousel} from "@/src/components/CompanySetupCarousel";
const cats:CategoryKey[]=["business-setup","visas","accounting","tax-accounting","corporate-legal","corporate-services","property-valuation","logistics","chauffeur-transport"];
const icons=[Building2,Landmark,BookOpen,Calculator,Scale,BriefcaseBusiness,HomeIcon,Truck,Car];
const confidence=[
 "Company Formation",
 "UAE Residency & Visas",
 "Bookkeeping & Accounting",
 "Tax, Payroll & Audit",
 "Corporate & Legal Support",
 "Property Valuation",
 "Freight & Logistics",
 "Chauffeur & Transportation",
];
const scenarios=[
 ["I’m starting on my own","For consultants, freelancers and founders who want a simple company and may need a residency visa.","/services/company-formation/","Explore solo setup"],
 ["I’m moving an existing business","For companies bringing owners, teams or operations into Dubai and the UAE.","/services/business-relocation/","Explore business relocation"],
 ["I need company and family visas","For founders coordinating company formation with their own residency and eligible dependants.","/services/family-visa/","Explore family visas"],
];
const reasons=[
 ["01","The whole picture, not one transaction","We look beyond the immediate request and connect company setup, residency, finance, compliance and the practical requirements that follow."],
 ["02","Recommendations built around your reality","Your activity, customers, ownership, visa needs, premises and future plans shape the options we put forward."],
 ["03","Clear answers, without false promises","We explain the likely route, responsibilities and expected costs honestly. Authority, bank and visa decisions are never presented as guaranteed."],
 ["04","The right expertise, properly coordinated","When regulated legal, audit, valuation or other specialist work is needed, we coordinate appropriately qualified professionals and keep the handoff clear."],
 ["05","A relationship that continues","We are here beyond formation, supporting the accounting, tax, payroll, employee and administrative needs that come with running a UAE business."],
];
const faqs=[
 ["Can foreign investors establish a UAE company?","Foreign investors can establish businesses through many UAE mainland and free-zone structures. The suitable route depends on activity, location, ownership, office and visa requirements."],
 ["Should I choose mainland or a free zone?","There is no universal best option. Customer market, activity, premises, visa needs and future expansion should be compared before selecting a jurisdiction."],
 ["Can you support visas after company formation?","Yes. Connected support can include investor, partner and employee residency plus eligible family sponsorship applications."],
 ["Can you guarantee a Golden Visa or bank account?","No. Authority and bank decisions are independent. Hexa Beam can assess readiness, coordinate documentation and support the process without making approval guarantees."],
 ["Do you provide ongoing accounting and payroll?","Yes. Bookkeeping, accounting, VAT, Corporate Tax, payroll and WPS support can continue as an ongoing engagement."],
];
export default function Home(){const schema={"@context":"https://schema.org","@type":"Organization",name:"Hexa Beam",url:"https://hexabeam.ae",areaServed:"United Arab Emirates",description:"Coordinated UAE business, residency, tax, accounting, corporate support, logistics and concierge services."};return <main id="main">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
 <HomeHero/>
 <section className="confidence-strip" aria-label="Hexa Beam services"><div className="confidence-track">{[0,1].map(copy=><div className="confidence-run" aria-hidden={copy===1} key={copy}>{confidence.map(item=><div className="confidence-item" key={item}><i aria-hidden="true"/><b>{item}</b></div>)}</div>)}</div></section>
 <section className="section muted-bg" id="services"><div className="container"><div className="section-head"><div><div className="eyebrow">Dubai and UAE services</div><h2>Supporting you at every stage of your business.</h2></div><div className="section-head-action"><p className="lead">Start with company setup, residency, tax, legal support or logistics, then connect the related requirements in one clear plan.</p><Link className="btn btn-dark" href="/services/">Explore all services <ArrowRight size={16}/></Link></div></div><div className="category-grid">{cats.map((cat,i)=>{const Icon=icons[i];return <article className="category-card" key={cat}><Icon size={29}/><h3>{categoryMeta[cat].name}</h3><p>{categoryMeta[cat].description}</p><div className="service-links">{byCategory(cat).slice(0,4).map(s=><Link key={s.slug} href={`/services/${s.slug}/`}>{s.name}</Link>)}</div><Link className="category-card-open" href={`/${cat}/`} aria-label={`Open ${categoryMeta[cat].name}`}><ArrowRight size={21}/></Link></article>})}</div></div></section>
 <CompanySetupCarousel/>
 <section className="section receive-section"><div className="container"><div className="section-head"><div><div className="eyebrow">What you receive</div><h2>Your UAE setup plan, made clear.</h2></div><p className="lead">Practical information you can use to understand the route, prepare properly and make a confident decision.</p></div><div className="receive-bento">
  <article className="receive-card receive-plan-card"><div className="receive-card-label"><span>01</span> Client brief</div><div className="receive-plan-copy"><h3>Your situation reviewed</h3><p>We organise the details that shape your route, from the planned activity and customer market to ownership, visas, workspace and timing.</p></div><div className="plan-preview" aria-hidden="true"><div className="plan-preview-head"><FileText size={19}/><div><b>UAE Setup Plan</b><span>Prepared for your objectives</span></div></div>{[["Business activity","Reviewed"],["Ownership needs","Mapped"],["Visa requirements","Included"],["Preferred timing","Noted"]].map(([label,status])=><div className="plan-preview-row" key={label}><span>{label}</span><b><i/>{status}</b></div>)}</div></article>
  <article className="receive-card receive-compare-card"><div className="receive-card-label"><span>02</span> Comparison</div><h3>Suitable options, compared</h3><p>A focused view of relevant jurisdictions, workspace choices, visa capacity and ongoing requirements.</p><div className="compare-preview" aria-hidden="true"><span style={{width:"92%"}}/><span style={{width:"70%"}}/><span style={{width:"82%"}}/></div></article>
  <article className="receive-card receive-cost-card"><div className="receive-card-label"><span>03</span> Scope &amp; costs</div><h3>Know what is included</h3><p>See responsibilities, expected fees and likely timing before you decide to proceed.</p><div className="cost-preview" aria-hidden="true"><span>Service scope <i/></span><span>Authority fees <i/></span><span>Estimated timing <i/></span></div></article>
  <article className="receive-card receive-docs-card"><div className="receive-card-label"><span>04</span> Checklist</div><div><h3>A prepared document file</h3><p>Receive a case-specific checklist covering validity, naming, translation, attestation and other preparation needs.</p></div><ul>{["Required records","Format checks","Attestation needs"].map(item=><li key={item}><Check size={15}/>{item}</li>)}</ul></article>
  <article className="receive-card receive-handover-card"><div><div className="receive-card-label"><span>05</span> Coordination &amp; handover</div><h3>Supported through the agreed next steps.</h3><p>We track applications and professional handoffs, organise completed records and explain the operational requirements that follow.</p></div><div className="handover-route" aria-hidden="true"><span>Prepare</span><i/><span>Coordinate</span><i/><span>Handover</span></div><Link className="btn btn-primary" href="/contact/">Request your plan <ArrowRight size={16}/></Link></article>
 </div></div></section>
 <section className="section client-paths-section"><div className="container"><div className="section-head"><div><div className="eyebrow">Where are you starting?</div><h2>Choose the situation closest to yours.</h2></div><p className="lead">You do not need to know the exact service name. Start with your situation and we will help connect the requirements.</p></div><div className="client-paths-grid">{scenarios.map(([title,text,href,label],index)=><article className="scenario-card" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p><Link href={href}>{label} <ArrowRight size={15}/></Link></article>)}</div><div className="client-paths-cta"><div><b>None of these quite fit?</b><p>Tell us what you are planning and we will help identify a sensible starting point.</p></div><Link className="btn btn-primary" href="/contact/">Get a recommendation <ArrowRight size={16}/></Link></div></div></section>
 <section className="section why-section"><div className="container why-grid"><div><div className="eyebrow">Why Hexa Beam</div><h2 style={{marginTop:16}}>Trust is not a promise. It is how we work.</h2><p className="lead" style={{marginTop:20}}>Hexa Beam earns confidence through honest guidance, connected thinking and careful coordination—from the first decision to the realities of running your business.</p></div><div className="why-list">{reasons.map(r=><div className="why-item" key={r[0]}><span>{r[0]}</span><div><h3>{r[1]}</h3><p>{r[2]}</p></div></div>)}</div></div></section>
 <section className="section muted-bg"><div className="container"><div className="section-head"><div><div className="eyebrow">Dubai and UAE questions</div><h2>Clear answers before you take the next step.</h2></div></div><div className="faq">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
 <CtaBand/>
 </main>}
