import Image from 'next/image'
import ShopCard from '@/components/ShopCard'
import SubBar from '@/components/SubBar'
import PageNavigation from '@/components/PageNavigation'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import Footer from '@/components/Footer'
import BestSellerProduct from '@/components/BestSellerProduct'
import LogoCard from '@/components/logCard'

// shop section images
import content from "@/app/assets/card-item.png"
import content2 from "@/app/assets/card-item2.png"
import content3 from "@/app/assets/card-item3.png"
import content4 from "@/app/assets/card-item4.png"
import content5 from "@/app/assets/card-item5.png"

import win from "@/app/assets/win.png"
import list from "@/app/assets/list.png"

import a1 from "@/app/assets/product-images/1.png"
import a2 from "@/app/assets/product-images/2.png"
import a3 from "@/app/assets/product-images/3.png"
import a4 from "@/app/assets/product-images/4.png"
import a5 from "@/app/assets/product-images/a.png"
import a6 from "@/app/assets/product-images/b.png"
import a7 from "@/app/assets/product-images/c.png"
import a8 from "@/app/assets/product-images/d.png"
import a9 from "@/app/assets/product-images/product-cover-5.png"
import a10 from "@/app/assets/product-images/product-cover-6.png"
import a11 from "@/app/assets/product-images/product-cover-7.png"
import a12 from "@/app/assets/product-images/product-cover-8.png"


function Shop() {
  return (
    <div className='bg-[#fafafa] overflow-hidden'>

      <header className="h-[136px] ">
        {/* uper header */}
        <TopNav topNavBg='bg-[#23856D]' />
        {/* bottom header */}
        <BottomNav linksNames={["shop", "about", "team", "contact",]} showOtherLinks={true} />
      </header>

      <main>
        <div className=' flex flex-col bg-[#fafafa] flex-wrap items-center pb-12'>
          <SubBar />
          <div className='flex flex-col md:flex-row flex-wrap gap-[15px]'>
            <ShopCard imgPath={content} />
            <ShopCard imgPath={content2} />
            <ShopCard imgPath={content3} />
            <ShopCard imgPath={content4} />
            <ShopCard imgPath={content5} />
          </div>
        </div>

        <div className='bg-white w-full'>
          {/*  */}
          <div className="wraper h-[216px] gap-6 lg:h-[98px] bg-white flex flex-col lg:flex-row lg:justify-between items-center ">

            <h6 className="h6 text-[#737373] ">Showing all 12 results</h6>

            <div className="flex justify-center items-center gap-[15px]">
              <h6 className="h6 text-[#737373] ">Views:</h6>
              <button className="rounded-[5px] border-[#ECECEC] w-[46px] h-[46px]">
                <Image
                  src={win}
                  alt=''
                />
              </button>
              <button className="rounded-[5px] border-[#ECECEC] w-[46px] h-[46px]">
                <Image
                  src={list}
                  alt=''
                />
              </button>
            </div>
            <div className="h-full w-[252px] flex items-center gap-[15px]">
              <select className='w-[141px] h-[50px] rounded-[5px] bg-[#f9f9f9] border-[#dddddd] drop text-[#737373] '>
                <option >
                  Popularity
                </option>
              </select>
              <button className='w-[94px] h-[50px] rounded-[5px] bg-[#23A6F0] h6 '>Filter</button>
            </div>
          </div>
          {/*  */}
        </div>
        <LogoCard />
        <div className='flex flex-col justify-center items-center'>
          <div className=' md:hidden '>
            <BestSellerProduct cardCollection={[a9, a10, a11, a12,]} showTitle={false} />
          </div>
          <div className='hidden md:flex'>
            <BestSellerProduct cardCollection={[a9, a10, a11, a12, a1, a2, a3, a4, a5, a6, a7, a8,]} showTitle={false} />
          </div>
          <PageNavigation />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>




  )
}

export default Shop
