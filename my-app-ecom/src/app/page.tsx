// import Footer from "./components/footer";

import CardText from "./components/cards-text";
import Desktop from "./components/desktop";
import Hero from "./components/hero";
import Hero2 from "./components/hero2";
import Hero3 from "./components/hero3";


export default function Home(){
  return(
    <div className="w-[1440px] h-[852px] gap-[40px] ">
        <Hero />  
        <Desktop/>
        <Hero2/>
        <Hero3/>
        <CardText />
    </div>

  )
}