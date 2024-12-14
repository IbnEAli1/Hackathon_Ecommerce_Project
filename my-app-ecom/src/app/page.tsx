// import Footer from "./components/footer";

import Card from "./components/hero4.card";
import Desktop from "./components/desktop";
import Hero from "./components/hero";
import Hero2 from "./components/hero2";
import Hero3 from "./components/hero3";
import { Feature } from "./components/feature";


export default function Home(){
  return(
    <div className="w-[1440px] h-[852px] gap-[40px] ">
        <Hero />  
        <Desktop/>
        <Hero2/>
        <Hero3/>
        <Card />
        <Feature />
    </div>

  )
}