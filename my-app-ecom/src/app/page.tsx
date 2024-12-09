import DarkHeader from "./components/dark-header";
import Carausel from "./components/caraousel";
import Editors from "./components/editorspick";
import Footer from "./components/footer";
import GreenDiv from "./components/green-div";
import LightHeader from "./components/lightheader";
import ProductCard from "./components/products-card";
import Whitediv from "./components/Hero";


export default function Home(){
  return(
    <div>
      <DarkHeader/>
      <LightHeader/>
      <Carausel/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      <Footer />
    </div>

  )
}