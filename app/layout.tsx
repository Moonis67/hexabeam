import type {Metadata} from "next";
import "./globals.css";
import "./redesign.css";
import {Header} from "@/src/components/Header";
import {Footer} from "@/src/components/Footer";
import {Motion} from "@/src/components/Motion";
import {WhatsAppButton} from "@/src/components/WhatsAppButton";
export const metadata:Metadata={metadataBase:new URL("https://hexabeam.ae"),title:{default:"Hexa Beam | UAE Business & Corporate Services",template:"%s | Hexa Beam"},description:"Coordinated UAE company formation, residency, tax, accounting, corporate support, logistics and concierge services.",openGraph:{title:"Hexa Beam",description:"Business and personal services across the UAE.",type:"website",locale:"en_AE"},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Motion/><Header/>{children}<Footer/><WhatsAppButton/></body></html>}
