// Homepage content. Everything a client can argue about lives here, not in JSX.
//
// ITEMS MARKED `CONFIRM` ARE NOT VERIFIED FACTS. They are structural placeholders
// so the layout is finished and the client only has to supply the value.
// See CONTENT-QUESTIONS.md.

import type {CategoryKey} from "./services";

/** The hero headline is one sentence: this opening, then a cycling ending.
 *  Every entry in `heroWords` has to complete this clause grammatically. */
export const heroSentence="Hexa Beam handles your UAE";

/** The words that cycle at the end of the sentence. Keep them short — long
 *  words push the line onto two rows on a phone. Order is the display order. */
export const heroWords=[
 "company setup.",
 "residency visas.",
 "bookkeeping.",
 "corporate tax.",
 "legal documents.",
 "freight.",
 "chauffeur transport.",
];

export const homeCategories:CategoryKey[]=["business-setup","visas","accounting","tax-accounting","corporate-legal","corporate-services","property-valuation","logistics","chauffeur-transport"];

/** Practical, hedged comparison. Presented as orientation, not advice. */
export const structures={
 rows:["Where you can sell","Foreign ownership","Premises","Visa allocation","Typical fit"],
 columns:[
  {name:"Mainland",cells:[
   "Anywhere in the UAE and internationally, subject to the licensed activity.",
   "Permitted for most activities; a small list still carries conditions.",
   "A physical address is normally required and is inspected.",
   "Usually tied to premises size and the approved activity.",
   "Selling directly to UAE customers, government work, retail and contracting.",
  ]},
  {name:"Free zone",cells:[
   "Inside the zone and internationally. UAE mainland trade usually needs a distributor or a branch.",
   "Permitted in the free zones.",
   "From a flexi-desk to a full unit, depending on the zone and package.",
   "Allocated by package and facility, not negotiated case by case.",
   "Export, consulting, technology and regional teams.",
  ]},
  {name:"Offshore",cells:[
   "No trading inside the UAE.",
   "Permitted.",
   "No UAE premises.",
   "None.",
   "Holding, ownership and international structuring — with professional advice.",
  ]},
 ],
 note:"Requirements differ by authority, activity and the applicant's circumstances, and they change. Confirm the current position for your case before committing to a structure.",
};

export const engagements=[
 {
  key:"formation",
  title:"Company formation",
  summary:"Choose the jurisdiction and licence around how the business will actually trade, then get the entity issued.",
  includes:["Activity and jurisdiction comparison","Trade name and initial approval","Incorporation documents","Establishment card and visa allocation","Post-formation compliance handover"],
  excludes:"Government and free-zone fees are paid at cost and shown separately.",
  href:"/services/company-formation/",
 },
 {
  key:"residency",
  title:"Residency and visas",
  summary:"Entry permit, medical, Emirates ID and residency handled as one tracked sequence for you, your staff and your family.",
  includes:["Eligibility and sponsor-document review","Entry permit coordination","Medical and Emirates ID steps","Residency stamping or issuance","Renewal and cancellation planning"],
  excludes:"Approval remains with the immigration authority. Timelines follow the authority, not us.",
  href:"/visas/",
 },
 {
  key:"finance",
  title:"Accounting, tax and payroll",
  summary:"Monthly records that hold up when a bank, an auditor or the FTA asks to see them.",
  includes:["Monthly bookkeeping and reconciliation","Management reports","VAT registration and return preparation","Corporate Tax registration and return inputs","Payroll and WPS files"],
  excludes:"Registered tax agent representation and audit opinions are issued by qualified professionals.",
  href:"/tax-accounting/",
 },
 {
  key:"operations",
  title:"Ongoing operations",
  summary:"The recurring administration that keeps a live UAE company compliant and moving.",
  includes:["Licence renewal and amendments","PRO and government submissions","Corporate documents and attestation","Banking-readiness files","Freight and executive transport"],
  excludes:"Bank account approval is entirely at the bank's discretion.",
  href:"/services/",
 },
];

/** CONFIRM: replace with a real 'from AED' figure per engagement, or leave as-is. */
export const showPricing=false;

export const process=[
 ["01","Send the requirement","The service, your current status and the deadline. One message is enough to start."],
 ["02","Case review","We check eligibility, the likely document list and which steps belong to an authority or a licensed provider."],
 ["03","Written scope and fee","What is included, what is excluded, who is responsible and what it costs. You approve it before work starts."],
 ["04","File preparation","Documents are checked for validity, naming consistency, translation and attestation before anything is submitted."],
 ["05","Submission and tracking","You are told what is complete, what is pending and what is still needed from you until handover."],
] as const;

export const audiences=[
 ["Founders entering the UAE","A first licence, a residency visa and a bank-ready file, in the right order."],
 ["Established UAE companies","Renewals, amendments, payroll, VAT and Corporate Tax kept on schedule."],
 ["International groups","A branch, a subsidiary or a holding structure, coordinated with your advisers at home."],
 ["Families and individuals","Dependant visas, attestation, POA, succession documents and estate administration."],
] as const;

export const ongoingSlugs=["licence-renewal-amendments","bookkeeping-accounting","corporate-tax","pro-government-services"];

export const faq=[
 ["Can foreign investors own a UAE company outright?","For most activities, yes — in the free zones and, since the ownership reforms, across a large part of mainland activity too. A short list of activities still carries conditions, so the answer depends on the exact activity code you licence."],
 ["Mainland or free zone?","Decide it on where your customers are, not on the headline licence price. If you invoice UAE customers directly, mainland is usually the shorter route. If you export or sell services abroad, a free zone often costs less to run. Compare permitted activity, premises, visa allocation and renewal cost together."],
 ["Can you guarantee a visa, a licence or a bank account?","No, and be careful with anyone who does. Authorities and banks decide independently. What we can do is assess whether the case is ready, build a complete file and remove the avoidable reasons applications get returned."],
 ["What does it cost?","Fees are quoted after the case is reviewed, in writing, split between our work and the government or free-zone charges that are paid at cost. You approve the figure before anything starts."],
 ["How long does it take?","Formation is usually the fast part. Attestation of foreign documents, external approvals and bank onboarding are what extend a timeline, so we flag those at the scope stage rather than at the end."],
 ["Do you handle regulated work yourselves?","Some of it, no. Audit opinions, legal representation, formal valuations and certified translation are issued by qualified providers. We coordinate them and stay accountable for the file."],
] as const;

/** CONFIRM: real contact channels. */
export const contact={
 email:"info@hexabeam.ae",
 phone:"+971 4 000 0000",
 whatsapp:"+971 50 000 0000",
 location:"Dubai, United Arab Emirates",
 hours:"Sunday to Friday, 9:00 – 18:00 GST",
};
