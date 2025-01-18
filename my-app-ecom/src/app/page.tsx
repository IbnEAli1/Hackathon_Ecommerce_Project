import BestSellerProduct from "@/components/BestSellerProduct";
import BottomNav from "@/components/BottomNav";
import Carousel from "@/components/Carousel";
import EditorImages from "@/components/EditorImages";
import FeaturedPosts from "@/components/FeaturedPosts";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";
import NaturalUniverse from "@/components/NaturalUniverse";
import TopNav from "@/components/TopNav";

import { StaticImageData } from 'next/image'



import a1 from "@/app/assets/product-images/1.png"
import a2 from "@/app/assets/product-images/2.png"
import a3 from "@/app/assets/product-images/3.png"
import a4 from "@/app/assets/product-images/4.png"
import a5 from "@/app/assets/product-images/a.png"
import a6 from "@/app/assets/product-images/b.png"
import a7 from "@/app/assets/product-images/c.png"
import a8 from "@/app/assets/product-images/d.png"

import b1 from "@/app/assets/product-images/b1.png"





export default function Home() {

  const cardImages: StaticImageData[] = [a1, a2, a3, a4, a5, a6, a7, a8]


  return (
    <div className=" bg-white overflow-hidden" >
      
      <header className="h-[136px] ">
        {/* uper header */}
        <TopNav topNavBg='bg-[#252B42]' />
        {/* bottom header */}
        <BottomNav linksNames={["product", "pricing", "contact"]} showShopLink={true} />
      </header>

      <main className="overflow-hidden">
        <HeroImage />
        <EditorImages />
        <BestSellerProduct cardCollection={cardImages} />
        <Carousel image={b1} bgColor={["bg-[#23856D]", "bg-[#2DC071]"]} textColor="text-white" />
        <NaturalUniverse />
        <FeaturedPosts />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
