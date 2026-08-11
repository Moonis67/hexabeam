"use client";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

const schema=z.object({name:z.string().min(2,"Please enter your name"),email:z.union([z.string().email("Enter a valid email"),z.literal("")]).optional(),countryCode:z.string().min(1),phone:z.string().min(7,"Enter a valid phone number"),service:z.string().min(1,"Select a service"),message:z.string().max(1000).optional(),consent:z.boolean().refine(Boolean,"Please confirm your consent")});
type Values=z.infer<typeof schema>;
type Status="idle"|"submitting"|"sent"|"error";
const countryLabel:Record<string,string>={"+971":"AE","+966":"SA","+974":"QA","+965":"KW","+973":"BH","+968":"OM","+44":"GB","+1":"US","+91":"IN","+92":"PK"};

export function ConsultationForm({dark=false,compact=false,serviceName,submitLabel="Submit enquiry"}:{dark?:boolean;compact?:boolean;serviceName?:string;submitLabel?:string}){
 const [status,setStatus]=useState<Status>("idle");
 const {register,handleSubmit,watch,formState:{errors}}=useForm<Values>({resolver:zodResolver(schema),defaultValues:{service:serviceName||"",email:"",countryCode:"+971",consent:false}});
 const countryCode=watch("countryCode");
 const submit=async(values:Values)=>{setStatus("submitting");try{const endpoint=process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;if(!endpoint)throw new Error("Missing enquiry endpoint");const phone=!values.phone.trim().startsWith("+")?`${values.countryCode}${values.phone.replace(/^0/,"")}`:values.phone;const response=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...values,phone,page:window.location.href,submittedAt:new Date().toISOString()})});if(!response.ok)throw new Error("Submission failed");setStatus("sent")}catch{setStatus("error")}};
 return <form className={`contact-form ${dark?"form-dark":""} ${compact?"compact-form":""}`} onSubmit={handleSubmit(submit)} noValidate>
  {status==="sent"?<div className="form-success" role="status"><span>Request received</span><h3>Thank you. We will review your {serviceName||"enquiry"}.</h3><p>Our team will use the details provided to identify the relevant route and connected requirements.</p></div>:<>
   {serviceName&&<input type="hidden" {...register("service")}/>}
   <div><label htmlFor={`name-${compact}`}>Name</label><input id={`name-${compact}`} autoComplete="name" placeholder="Your name" {...register("name")}/>{errors.name&&<div className="form-error">{errors.name.message}</div>}</div>
   {!compact&&<div><label htmlFor="email-full">Email</label><input id="email-full" type="email" autoComplete="email" placeholder="you@example.com" {...register("email")}/>{errors.email&&<div className="form-error">{errors.email.message}</div>}</div>}
   <div><label htmlFor={`phone-${compact}`}>Phone number</label>{compact?<div className="phone-field"><span className="phone-flag">{countryCode==="+971"?<img src="/assets/brand/uae-flag.webp" alt="UAE"/>:countryLabel[countryCode]}</span><select aria-label="Country calling code" {...register("countryCode")}><option value="+971">+971</option><option value="+966">+966</option><option value="+974">+974</option><option value="+965">+965</option><option value="+973">+973</option><option value="+968">+968</option><option value="+44">+44</option><option value="+1">+1</option><option value="+91">+91</option><option value="+92">+92</option></select><i/><input id={`phone-${compact}`} type="tel" inputMode="tel" autoComplete="tel" placeholder="XX XXX XXXX" {...register("phone")}/></div>:<><input type="hidden" {...register("countryCode")}/><input id={`phone-${compact}`} type="tel" autoComplete="tel" placeholder="Phone number" {...register("phone")}/></>}{errors.phone&&<div className="form-error">{errors.phone.message}</div>}</div>
   {!serviceName&&<div><label htmlFor={`service-${compact}`}>Service</label><select id={`service-${compact}`} {...register("service")} defaultValue=""><option value="" disabled>Select an area</option><option>Business setup</option><option>Residency & visas</option><option>Tax & accounting</option><option>Corporate & legal support</option><option>Business support</option><option>Logistics & concierge</option></select>{errors.service&&<div className="form-error">{errors.service.message}</div>}</div>}
   <div><label htmlFor={`message-${compact}`}>Message</label><textarea id={`message-${compact}`} rows={compact?4:5} placeholder="Briefly describe your request" {...register("message")}/></div>
   <div className="consent-field"><input id={`consent-${compact}`} type="checkbox" {...register("consent")}/><label htmlFor={`consent-${compact}`}>I consent to the processing of my personal data in accordance with the <a href="/privacy/">Privacy Policy</a>.</label></div>
   {errors.consent&&<div className="form-error consent-error">{errors.consent.message}</div>}
   <button className="btn btn-primary" type="submit" disabled={status==="submitting"}>{status==="submitting"?"Sending...":submitLabel}</button>
   {status==="error"&&<div className="form-submit-error" role="alert">We could not send your request. Please try again shortly.</div>}
  </>}
 </form>
}
