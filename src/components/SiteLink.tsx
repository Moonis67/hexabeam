import NextLink, {type LinkProps} from "next/link";
import type {AnchorHTMLAttributes,ReactNode} from "react";
type Props=LinkProps&Omit<AnchorHTMLAttributes<HTMLAnchorElement>,keyof LinkProps>&{children:ReactNode};
export function Link(props:Props){return <NextLink {...props} prefetch={false}/>}
