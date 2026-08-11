import type {Metadata} from "next";
import {Check, Sparkles} from "lucide-react";
import {ConsultationForm} from "@/src/components/ConsultationForm";

export const metadata:Metadata={
 title:"Contact",
 description:"Request a confidential consultation with Hexa Beam about UAE business, residency, tax, accounting and support services."
};

export default function Contact(){
 return <main id="main" className="contact-page">
  <section className="contact-hero">
   <div className="container">
    <div className="contact-hero-grid">
     <div className="contact-hero-copy">
      <div className="contact-signal" aria-label="Free consultation">
       <span className="contact-signal-icon"><Sparkles size={15}/></span>
       <span className="contact-signal-window" aria-hidden="true"><span>Free consultation&nbsp;&nbsp;•&nbsp;&nbsp;Free consultation&nbsp;&nbsp;•&nbsp;&nbsp;</span></span>
      </div>
      <h1>Let’s make your <em>next move</em> happen.</h1>
      <p className="lead">Tell us what you want to achieve in the UAE. We’ll connect the dots, clarify the route and help you move forward with confidence.</p>
      <div className="contact-proof" aria-label="Consultation benefits">
       <span><Check size={16}/>One clear point of contact</span>
       <span><Check size={16}/>Your details handled confidentially</span>
       <span><Check size={16}/>No obligation to proceed</span>
      </div>
     </div>

     <div className="contact-form-card" id="contact-form">
      <div className="contact-form-intro">
       <span>Start here</span>
       <h2>How can we help?</h2>
       <p>Complete the short form and give us enough context to prepare for the conversation.</p>
      </div>
      <ConsultationForm submitLabel="Request free consultation"/>
      <p className="contact-form-note">Your information is used only to respond to your enquiry.</p>
     </div>
    </div>
   </div>
  </section>

 </main>
}
