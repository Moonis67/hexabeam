import {Link} from "@/src/components/SiteLink";
import {contact} from "@/src/content/home";

export const metadata={title:"Privacy Policy",description:"How Hexa Beam collects, uses, shares and protects personal information when providing UAE business setup, residency, tax, accounting and corporate support services."};

const UPDATED="17 August 2026";

/*  Body copy lives in a data array so a twenty-clause document stays editable
 *  without touching JSX. A nested string[] renders as a bulleted list.
 *
 *  CONFIRM before launch: the registered legal entity name, trade licence
 *  number, licensing authority and registered address are deliberately left as
 *  a visible placeholder in the "Who we are" clause rather than invented. */
const clauses:[string,(string|string[])[]][]=[
 ["1. Who we are",[
  "Hexa Beam provides business setup, residency, tax, accounting, corporate support, logistics and concierge coordination services to clients operating in or relocating to the United Arab Emirates. In this policy \"Hexa Beam\", \"we\", \"us\" and \"our\" refer to that business; \"you\" refers to any person whose personal information we handle, including enquirers, clients, their owners, shareholders, directors, employees and dependants.",
  "Registered entity name, trade licence number, licensing authority and registered address: to be confirmed before publication.",
  "We are the controller of the personal information described in this policy, meaning we decide why and how it is processed. Where we pass information to a licensed professional who then acts on their own professional responsibility — an auditor, a legal practitioner, a registered valuer — that provider becomes a controller in their own right for what they do with it.",
 ]],
 ["2. Scope of this policy",[
  "This policy covers personal information we handle through our website, our enquiry and consultation forms, email, telephone, WhatsApp and other messaging channels, and in the course of delivering services under an engagement.",
  "It does not cover the independent privacy practices of government authorities, free zone authorities, banks, or third-party professionals who receive your information in order to process an application. Those bodies handle information under their own rules and published policies.",
 ]],
 ["3. Information we collect",[
  "The information we hold depends entirely on what you ask us to do. A general website enquiry involves very little; a company formation with residency visas and bank account opening involves a great deal, because the authorities and institutions involved require it.",
  "Contact and enquiry information: name, email address, telephone and WhatsApp number, country of residence, the service you are asking about, and the content of your message.",
  "Identity and eligibility documents: passport copies, national identity documents, visa and entry-stamp pages, Emirates ID, photographs, proof of address, educational or professional certificates, marriage and birth certificates for dependant applications, and attestations or legalisations of those documents.",
  "Business and commercial information: proposed and existing trade names, intended business activities, ownership and shareholding structure, corporate documents of parent or affiliated companies, board and shareholder resolutions, powers of attorney, existing licences and registrations, tenancy and workspace details, and details of the customers, suppliers and markets relevant to the licensing route.",
  "Financial and compliance information: bank statements, source-of-funds and source-of-wealth explanations, tax registration numbers, accounting records, invoices and payment details, and the results of sanctions, politically-exposed-person and adverse-media checks required under UAE anti-money-laundering rules.",
  "Health information: only where an authority requires it, such as the medical fitness screening that forms part of a residency visa application. We treat this as sensitive information and handle it only for that purpose.",
  "Communications and case records: correspondence with you, file notes, submitted application forms, reference numbers, receipts and approvals, and the record of advice and options presented to you.",
  "Website and technical information: IP address, browser and device type, pages viewed, referring source, and approximate location inferred from the IP address. Where analytics or similar technologies are used, this is covered in the cookies clause below.",
 ]],
 ["4. How we obtain information",[
  "Directly from you, when you complete a form, send an enquiry, speak with a consultant or provide documents for a matter.",
  "From people acting for you, such as a colleague, a family member submitting a dependant application, a relationship manager, or an adviser who introduces you to us.",
  "From authorities and institutions handling your application, in the form of approvals, rejections, queries and reference numbers.",
  "From public and commercial sources, where a compliance check requires it — company registries, sanctions and watch lists, and screening databases.",
  "Automatically, when you use our website, as described in the cookies clause.",
 ]],
 ["5. Why we use information, and on what basis",[
  "We process personal information under the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data and its implementing decisions, and, where it applies to a particular matter, the data protection framework of the relevant free zone or of a jurisdiction outside the UAE.",
  "To respond to an enquiry and assess a requirement. Basis: your request, and our legitimate interest in dealing with people who approach us. If you send us documents before an engagement exists, we use them only to scope the matter.",
  "To perform an engagement. Basis: performance of our contract with you. This includes preparing and submitting applications, corresponding with authorities, coordinating licensed providers, and reporting progress to you.",
  "To meet legal and regulatory obligations. Basis: compliance with a legal obligation. This includes client due diligence and record-keeping under anti-money-laundering and counter-terrorist-financing rules, tax and accounting record retention, and responding to a lawful request from a competent authority.",
  "To handle sensitive information such as medical screening results. Basis: your explicit consent, together with the specific requirement of the authority processing the application.",
  "To operate, secure and improve our website and systems, and to keep records for administration, billing, insurance and the resolution of disputes. Basis: our legitimate interests.",
  "To send you service updates and, where you have asked for them, occasional updates about UAE regulatory changes. Basis: your consent, which you may withdraw at any time.",
 ]],
 ["6. Who we share information with",[
  "We do not sell personal information, and we do not share it for anyone else's marketing.",
  "Government and regulatory authorities: the Department of Economy and Tourism or equivalent emirate-level authority, free zone authorities, the Federal Authority for Identity, Citizenship, Customs and Port Security, the Ministry of Human Resources and Emiratisation, the Federal Tax Authority, notaries, courts, customs, municipalities and approved medical screening centres — as required by the application being made.",
  "Banks and financial institutions, where you have asked us to support an account-opening or payment-processing arrangement.",
  "Licensed professionals we coordinate: auditors, legal practitioners, registered valuers, certified translators, insurance intermediaries and tax agents. They receive only what their engagement requires and act under their own professional and regulatory duties.",
  "Service providers who support our operations: information technology, hosting, email, document storage, customer relationship management, accounting, courier and secure destruction providers. They act on our instructions under a written agreement and may not use your information for their own purposes.",
  "Professional advisers, insurers and, where a lawful obligation applies, competent authorities and law enforcement.",
  "A purchaser or successor, if our business or part of it is transferred, subject to the protections in this policy continuing to apply.",
 ]],
 ["7. Transfers outside the UAE",[
  "Some of the providers we rely on — hosting, email and document storage in particular — process information on servers located outside the UAE. Where a matter involves a foreign document, an overseas parent company or an applicant residing abroad, information may also be sent to authorities, embassies, attestation bodies or professionals in that country.",
  "Where information leaves the UAE we transfer it only to a jurisdiction recognised as providing an adequate level of protection, or under contractual safeguards requiring protection equivalent to this policy, or where the transfer is necessary to perform your engagement or to comply with a legal obligation. You may ask us which arrangement applies to your matter.",
 ]],
 ["8. How long we keep information",[
  "We keep information for as long as needed for the purpose it was collected, and then for the period any applicable law requires.",
  "Enquiries that do not become engagements: normally up to twelve months from the last contact, so that we can pick up a conversation you return to, after which they are deleted.",
  "Client files and case records: for the duration of the engagement and then for the retention period required by UAE commercial, tax and anti-money-laundering legislation, which is generally at least five years from the end of the relationship or the completion of the transaction, and longer where a specific obligation, dispute or investigation requires it.",
  "Accounting and tax records: for the period required by the Federal Tax Authority and applicable commercial legislation.",
  "Website and technical records: short retention periods appropriate to security monitoring and analytics.",
  "When a retention period ends we delete the information or irreversibly anonymise it. Paper documents are destroyed securely.",
 ]],
 ["9. How we protect information",[
  "We apply access controls so that staff see only the files their role requires, encrypt information in transit and at rest with our principal systems, keep original documents in controlled storage, restrict the use of personal devices and consumer messaging for document handling, and require written confidentiality commitments from staff and providers.",
  "No system is completely secure. If a breach occurs that is likely to affect your rights, we will notify the UAE Data Office and affected individuals as required by law, and tell you what happened and what to do about it.",
  "Please do not send passports, financial statements or other sensitive documents over unsecured channels. Ask us for a secure upload route and we will provide one.",
 ]],
 ["10. Your rights",[
  "Subject to the conditions and exceptions in the applicable data protection law, you may:",
  ["Ask for access to the personal information we hold about you, and information about how it is processed.","Ask us to correct information that is inaccurate or incomplete.","Ask us to delete information where there is no lawful basis or overriding obligation for us to keep it.","Ask us to restrict processing, or object to processing carried out on the basis of our legitimate interests.","Ask us to transfer information you provided to us to you or another controller in a structured, machine-readable format.","Withdraw consent where processing relies on it, without affecting anything done before the withdrawal.","Object to automated decision-making that produces a legal effect. We do not make decisions about you by automated means alone.","Complain to the UAE Data Office or another competent supervisory authority."],
  "To exercise a right, contact us using the details below. We may need to verify your identity, and will respond within the period required by law. Where we cannot do what you ask — most often because a retention or reporting obligation applies to a client file — we will explain why.",
 ]],
 ["11. Cookies and website analytics",[
  "Our website uses only what is necessary for the site to function and to remain secure, together with limited measurement of how the site is used so that we can improve it.",
  "You can block or delete cookies through your browser settings. Blocking strictly necessary cookies may stop parts of the site working. Where consent is required for a non-essential technology, we ask for it before that technology is used.",
 ]],
 ["12. Children",[
  "Our services are directed at adults. We process information about children only in connection with a family or dependant application made by a parent or legal guardian, and only to the extent the authority handling that application requires.",
 ]],
 ["13. Changes to this policy",[
  "We review this policy periodically and will update it to reflect changes in our services, our systems or the law. The version published on this page is the current one, and the date below shows when it last changed. Where a change materially affects how we handle your information, we will take reasonable steps to tell you.",
 ]],
 ["14. How to contact us",[
  "For any question about this policy, to exercise a right, or to raise a concern about how your information has been handled, contact us and mark your message for the attention of the privacy contact:",
 ]],
];

export default function Page(){return <main id="main">
 <section className="page-hero"><div className="container">
  <div className="breadcrumbs"><Link href="/">Home</Link> / Privacy</div>
  <h1>Privacy policy</h1>
  <p>How we collect, use, share and protect personal information when we advise on and coordinate UAE business, residency and compliance matters.</p>
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
   <p>You can also reach us through the <Link href="/contact/">contact page</Link>. Registered entity details, trade licence number and registered office address are to be confirmed before publication.</p>
  </div>
 </article></section>
</main>}
