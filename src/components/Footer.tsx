import {Link} from "./SiteLink";
export function Footer(){return <footer className="footer"><div className="container">
 <div className="footer-grid">
  <div><img className="footer-logo" src="/assets/logo/hexabeam-logo.png" alt="Hexa Beam"/><p>Coordinated UAE business, residency, tax, accounting, documentation, logistics and concierge support through one point of contact.</p></div>
  <div><h4>Company</h4><Link href="/about/">About us</Link><Link href="/contact/">Contact</Link><Link href="/privacy/">Privacy policy</Link><Link href="/terms/">Terms</Link></div>
  <div><h4>Business setup</h4><Link href="/services/company-formation/">Company formation</Link><Link href="/services/trade-licence-support/">Trade licence</Link><Link href="/services/company-liquidation/">Liquidation</Link><Link href="/services/corporate-bank-account/">Bank assistance</Link></div>
  <div><h4>Residency & finance</h4><Link href="/services/golden-visa/">Golden Visa</Link><Link href="/services/family-visa/">Family visa</Link><Link href="/services/bookkeeping-accounting/">Accounting</Link><Link href="/services/corporate-tax/">Corporate Tax</Link></div>
  <div><h4>Other services</h4><Link href="/services/power-of-attorney/">Power of Attorney</Link><Link href="/services/inheritance-estate-legal-heir/">Inheritance & estates</Link><Link href="/services/freight-logistics/">Freight</Link><Link href="/services/limousine-chauffeur/">Chauffeur</Link></div>
 </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Hexa Beam. All rights reserved.</span><span>Dubai, United Arab Emirates · Contact details pending confirmation</span></div>
 </div></footer>}
