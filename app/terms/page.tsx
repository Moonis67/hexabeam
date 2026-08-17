import {Link} from "@/src/components/SiteLink";
import {contact} from "@/src/content/home";

export const metadata={title:"Terms and Conditions",description:"The terms governing use of the Hexa Beam website and the basis on which Hexa Beam provides UAE business setup, residency, tax, accounting and corporate support services."};

const UPDATED="17 August 2026";

/*  Same data-array pattern as the privacy page: a nested string[] renders as a
 *  bulleted list. CONFIRM before launch: registered entity, trade licence
 *  number and registered address in clause 2 and in the closing block. */
const clauses:[string,(string|string[])[]][]=[
 ["1. These terms",[
  "These terms and conditions govern your use of the Hexa Beam website and set out the general basis on which we provide services. By using this website you accept these terms. If you do not accept them, please stop using the site.",
  "Where we agree to act for you, a separate written engagement — a proposal, quotation, scope of work or service agreement — will set out what we are doing, what it costs and what each side is responsible for. If anything in that engagement conflicts with these terms, the engagement prevails for that matter.",
 ]],
 ["2. Who we are",[
  "Hexa Beam is a business services provider based in the United Arab Emirates. We advise on and coordinate company formation, residency and visa processing, tax and accounting, corporate and legal support, property valuation coordination, logistics, chauffeur and concierge arrangements.",
  "Registered entity name, trade licence number, licensing authority and registered address: to be confirmed before publication.",
 ]],
 ["3. Website content is information, not advice",[
  "Everything on this website — service descriptions, cost indications, timelines, jurisdiction comparisons, checklists and answers to common questions — is general information about how UAE processes usually work. It is not legal, tax, immigration, accounting, valuation or financial advice, and it is not an offer or a promise of a particular outcome.",
  "UAE requirements change, and they vary by emirate, by free zone, by business activity and by the facts of the individual case. Two clients with apparently similar plans can face different requirements, costs and timelines. Do not act, or refrain from acting, on the basis of this website alone. Ask us about your own circumstances, or take advice from a qualified professional, before making a decision.",
  "We take care to keep the site accurate and current but do not warrant that it is free from error or omission, or that any figure or timeline shown will apply to you.",
 ]],
 ["4. What we do, and what we do not do",[
  "Our role is to review your objectives, explain the routes available, prepare and submit what the relevant authority requires, coordinate the licensed professionals a matter needs, and keep the file moving and documented.",
  "We are not a law firm, an audit firm, a bank, a licensed valuer or a government authority, and we do not hold ourselves out as any of them. Regulated work is performed and signed by the qualified provider responsible for it — audit opinions, legal representation and legal opinions, formal valuation reports, certified translation and regulated tax representation among them. We coordinate that provider and remain accountable for managing the file, not for their professional judgement.",
  "Where a matter falls outside what we can properly handle, we will tell you and, if you wish, help you identify an appropriately qualified provider.",
 ]],
 ["5. Engagement, scope and quotations",[
  "No work begins, and no obligation on our part arises, until scope and fees are confirmed in writing and any agreed initial payment is received.",
  "A quotation is based on the facts you give us at the time. If those facts change, or an authority introduces a requirement or charge that was not in scope, we will tell you before incurring it and agree the revised scope and fee with you.",
  "Work outside the agreed scope is chargeable separately and only after you approve it.",
 ]],
 ["6. Fees, government charges and payment",[
  "Our fees are quoted in writing after a matter is reviewed and are stated separately from third-party amounts.",
  "Government, free zone, notary, medical screening, translation, attestation, courier and other third-party charges are passed through at cost and are payable in addition to our fees. Those amounts are set by the body concerned, may change without notice, and are generally non-refundable once paid or once an application is submitted, whether or not the application succeeds.",
  "Invoices are payable by the date stated. Value added tax is charged where it applies under UAE law.",
  "We may suspend work on a matter where an invoice remains unpaid after we have given you notice, and we may decline to release documents that we are entitled to hold pending payment, to the extent the law allows.",
  "Amounts held for onward payment to an authority or provider are used only for that purpose.",
 ]],
 ["7. Your responsibilities",[
  "The quality of the outcome depends heavily on what you give us. You agree to:",
  ["Provide information and documents that are accurate, complete, current and genuine, and tell us promptly if anything changes.","Complete the client due diligence we are required to carry out, including identity, address and, where applicable, source-of-funds verification.","Respond to requests for information or signatures within the time an authority allows, and attend in person where a process requires it, such as medical screening, biometrics or notarisation.","Hold, and keep valid, any personal permission a matter depends on — a valid passport, a lawful immigration status, an existing licence.","Make your own commercial decisions, including on jurisdiction, activity, workspace and banking, on the basis of the options we set out.","Not ask us to do anything unlawful, or to submit anything to an authority that you know to be false or misleading."],
  "We rely on what you tell us and do not independently verify it unless the engagement says so. We are not responsible for a delay, refusal, penalty or cost that results from information or documents that were inaccurate, incomplete, late or not genuine.",
 ]],
 ["8. Authority decisions, outcomes and timelines",[
  "Licences, approvals, name reservations, visas, permits, registrations, bank accounts, valuations and regulated professional outcomes are granted or refused by the relevant authority, institution or qualified provider at their sole discretion, under their own criteria and procedures.",
  "We cannot and do not guarantee that an application will be approved, that a bank will open or maintain an account, that a particular trade name or activity will be permitted, or that any specific result will be achieved.",
  "Any timeline we give is an estimate based on how the process normally runs. Attestation of foreign documents, external and security approvals, medical screening capacity, bank onboarding, system outages, inspections and public holidays commonly extend timelines and are outside our control.",
  "Where an application is refused, we will explain the reason given, set out the options — including any appeal or resubmission route and its cost — and act on your instructions. Fees already earned and third-party charges already incurred remain payable.",
 ]],
 ["9. Third-party providers and links",[
  "Where we introduce or coordinate a third-party provider, your relationship with that provider is governed by their own terms, and their professional work is their responsibility. We are not liable for their acts, omissions, fees or delays, though we will act reasonably in coordinating them and in raising problems on your behalf.",
  "This website may link to third-party sites, including authority portals. We do not control them and are not responsible for their content, availability or practices.",
 ]],
 ["10. Cancellation and refunds",[
  "You may end an engagement in writing at any time. Fees for work already performed up to that point, and all third-party charges already incurred or paid, remain payable.",
  "Amounts paid to a government authority, free zone, notary, medical centre, translator or attestation body are not refundable by us, and we cannot recover them on your behalf beyond making any refund request the body itself permits.",
  "We may end an engagement, having given you reasonable notice, where you do not provide required information or payment, where continuing would breach a legal or regulatory obligation, where a conflict of interest arises, or where the relationship has broken down. We will tell you the position of the file and what remains to be done.",
 ]],
 ["11. Compliance, and our right to decline work",[
  "We are subject to UAE anti-money-laundering, counter-terrorist-financing, sanctions and tax legislation. We carry out client due diligence and ongoing monitoring, keep records, and where the law requires it make reports to the competent authority. We are not permitted to tell you that such a report has been made.",
  "We may decline to start or continue a matter, without being obliged to give a reason, where due diligence cannot be completed, where a sanctions or screening concern arises, or where we believe the arrangement may be unlawful or improper.",
 ]],
 ["12. Confidentiality and personal data",[
  "We keep your information confidential and disclose it only as needed to deliver the engagement, to providers and authorities involved in it, or where the law requires. That duty continues after the engagement ends.",
  "How we handle personal information, including the basis on which we process it, who we share it with and the rights available to you, is set out in our privacy policy.",
 ]],
 ["13. Intellectual property",[
  "The content, design, text, graphics, photography, video and code of this website belong to Hexa Beam or its licensors and are protected by applicable law. You may view, download and print pages for your own reference. You may not reproduce, republish, sell, systematically extract or use our content commercially, or use our name or marks, without our written permission.",
  "Documents, templates, comparisons and plans we prepare for you may be used for the purpose for which they were provided. We keep ownership of our underlying know-how, templates and working methods.",
 ]],
 ["14. Acceptable use of this website",[
  "You agree not to use this website in a way that breaks the law, interferes with its operation or security, attempts unauthorised access, introduces malicious code, scrapes or harvests data, or misrepresents your identity. We may restrict access where we consider it necessary.",
  "The site is provided on an \"as available\" basis. We may change, suspend or withdraw any part of it, and do not warrant uninterrupted or error-free availability.",
 ]],
 ["15. Limitation of liability",[
  "Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited, including for fraud or fraudulent misrepresentation.",
  "Subject to that, we are not liable for loss of profit, revenue, business, opportunity, goodwill or anticipated saving, nor for indirect or consequential loss, however arising.",
  "We are not liable for a decision, delay, requirement, charge or refusal by an authority, institution or third-party provider, for the professional work of a licensed provider, for a consequence of inaccurate or incomplete information supplied to us, or for a matter outside our reasonable control.",
  "Subject to the first paragraph of this clause, our total liability in connection with a matter is limited to the fees we charged you for that matter, excluding third-party charges passed through at cost. Where you have not engaged us and are only using this website, our liability in connection with the site is limited to the extent the law allows.",
  "You agree to indemnify us against any claim, loss, penalty or cost we suffer as a result of information or documents you provided that were false, misleading or not genuine, or of your breach of these terms.",
 ]],
 ["16. Events outside our control",[
  "We are not in breach of these terms, and are not liable for delay or non-performance, where the cause is outside our reasonable control — including changes in law or authority procedure, government or system closures and outages, refusal or suspension of a service by an authority or bank, industrial action, natural events, epidemic, conflict or civil disruption. We will tell you promptly and take reasonable steps to limit the effect.",
 ]],
 ["17. General",[
  "If any provision of these terms is found unenforceable, the rest continues to apply.",
  "A delay in enforcing a right is not a waiver of it.",
  "You may not transfer your rights or obligations under an engagement without our written consent.",
  "These terms and any engagement are between you and us. No other person may enforce them.",
  "Any complaint should be raised with us in writing first, so that we have a fair opportunity to investigate and resolve it.",
 ]],
 ["18. Governing law and jurisdiction",[
  "These terms, and any engagement we enter into with you, are governed by the federal laws of the United Arab Emirates and the laws of the Emirate of Dubai, to the extent they apply.",
  "The courts of Dubai have exclusive jurisdiction over any dispute, unless an engagement expressly provides for a different forum or for arbitration.",
 ]],
 ["19. Changes to these terms",[
  "We may update these terms to reflect changes in our services, our obligations or the law. The version published on this page is the current one, and the date below shows when it last changed. Continued use of the website after a change constitutes acceptance of the updated terms. A change to these terms does not alter the terms of an engagement already agreed with you.",
 ]],
 ["20. Contact",[
  "For any question about these terms, a quotation, an engagement or a complaint:",
 ]],
];

export default function Page(){return <main id="main">
 <section className="page-hero"><div className="container">
  <div className="breadcrumbs"><Link href="/">Home</Link> / Terms and conditions</div>
  <h1>Terms and conditions</h1>
  <p>The basis on which we provide services, and the terms that apply to your use of this website.</p>
 </div></section>
 <section className="section"><article className="container prose legal-doc">
  <div className="legal-doc-meta">Last updated {UPDATED}</div>
  {clauses.map(([heading,blocks])=><section key={heading}>
   <h2>{heading}</h2>
   {blocks.map((block,i)=>Array.isArray(block)
    ? <ul key={i}>{block.map(item=><li key={item}>{item}</li>)}</ul>
    : <p key={i}>{block}</p>)}
  </section>)}
  <div className="legal-doc-note">
   <p><b>Hexa Beam</b> · {contact.location}</p>
   <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a><br/>Telephone: {contact.phone}<br/>Hours: {contact.hours}</p>
   <p>See also our <Link href="/privacy/">privacy policy</Link> and the <Link href="/contact/">contact page</Link>. Registered entity details, trade licence number and registered office address are to be confirmed before publication.</p>
  </div>
 </article></section>
</main>}
