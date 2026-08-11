import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getService,services} from "@/src/content/services";
import {ServicePage} from "@/src/components/ServicePage";
export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const s=getService(slug);if(!s)return{};return{title:`${s.name} UAE`,description:s.heroDescription,alternates:{canonical:`/services/${s.slug}/`}}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=getService(slug);if(!s)notFound();return <ServicePage service={s}/>}
