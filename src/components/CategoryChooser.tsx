"use client";
import {useEffect,useRef,useState} from "react";
import {ChevronLeft,ChevronRight} from "lucide-react";
import {categoryMeta,type CategoryKey} from "@/src/content/services";

export function CategoryChooser({categories}:{categories:CategoryKey[]}){
 const rail=useRef<HTMLDivElement>(null);
 const [atStart,setAtStart]=useState(true);
 const [atEnd,setAtEnd]=useState(true);
 const sync=()=>{const el=rail.current;if(!el)return;setAtStart(el.scrollLeft<=2);setAtEnd(el.scrollLeft>=el.scrollWidth-el.clientWidth-2)};
 useEffect(()=>{sync();window.addEventListener("resize",sync);return()=>window.removeEventListener("resize",sync)},[]);
 const move=(direction:number)=>rail.current?.scrollBy({left:direction*Math.min(420,(rail.current.clientWidth||0)*.7),behavior:"smooth"});
 return <section className="category-chooser"><div className="container">
  <div className="category-chooser-head">
   <span className="category-chooser-label">Choose a category</span>
   <div className="category-chooser-controls">
    <button type="button" onClick={()=>move(-1)} disabled={atStart} aria-label="Scroll categories left"><ChevronLeft size={19}/></button>
    <button type="button" onClick={()=>move(1)} disabled={atEnd} aria-label="Scroll categories right"><ChevronRight size={19}/></button>
   </div>
  </div>
  <nav className="category-chooser-links" ref={rail} onScroll={sync} aria-label="Service categories">
   {categories.map(category=><a href={`#${category}`} key={category}>{categoryMeta[category].name}</a>)}
  </nav>
 </div></section>
}
