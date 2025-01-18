import BottomNav from '@/components/BottomNav'
import TopNav from '@/components/TopNav'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import gt from "@/app/assets/gt.png"
import ProductDetailSection from '@/components/ProductDetailSection'
import ProductDiscrption from '@/components/ProductDiscrption'
import ProductCard from '@/components/ProductCard'

import product1 from "@/app/assets/1product-cover-5.png"
import product2 from "@/app/assets/2product-cover-5.png"
import product3 from "@/app/assets/3product-cover-5.png"
import product4 from "@/app/assets/4product-cover-5.png"
import product5 from "@/app/assets/5product-cover-5.png"
import product6 from "@/app/assets/6product-cover-5.png"
import LogoCard from '@/components/logCard'
import Footer from '@/components/Footer'

function Product(
    // { params }: { params: { product: string } }
) {
    return (
        <div className='overflow-hidden'>
            <header className="h-[136px] ">
                {/* uper header */}
                <TopNav topNavBg='bg-[#23856D]' />
                {/* bottom header */}
                <BottomNav linksNames={["shop", "about", "blog", "contact", "pages",]} showOtherLinks={true} />
            </header>

            {/*  */}
            <div className='bg-[#fafafa]'>
                <div className='wraper  h-[92px] py-6  '>

                    <div className="h-11 w-[119px] flex gap-[15px] items-center justify-start">
                        <Link href={"/"} className='link text-[#BDBDBD] hover:text-[#252B42]'>Home</Link>
                        <Image src={gt} alt='' width={10} height={7} className='px-[1.5px] mx-2' />
                        <Link href={"/shop"} className='link text:[#BDBDBD] hover:text-[#252B42]'>Shop</Link>

                    </div>


                </div>
            </div>

            {/*  */}
            <ProductDetailSection />
            {/*  */}
            <ProductDiscrption />
            {/*  */}
            <div className="bg-[#fafafa] ">
                <div className="wraper flex flex-col gap-6 py-12 ">
                    <h3 className="h3 text-[#252B42]">BESTSELLER PRODUCTS</h3>
                    <hr className='bg-[#ECECEC] h-[2px]' />
                    <div className="flex gap-[30px] justify-between flex-wrap">
                        <ProductCard id={"100"} imgPath={product1} showColours={false} />
                        <ProductCard id={"101"} imgPath={product2} showColours={false} />
                        <ProductCard id={"102"} imgPath={product3} showColours={false} />
                        <ProductCard id={"103"} imgPath={product4} showColours={false} />
                        <ProductCard id={"104"} imgPath={product5} showColours={false} />
                        <ProductCard id={"105"} imgPath={product6} showColours={false} />
                        <ProductCard id={"106"} imgPath={product1} showColours={false} />
                        <ProductCard id={"107"} imgPath={product2} showColours={false} />
                    </div>
                </div>
                <div className='wraper bg-[#fafafa]'>
                    <LogoCard />
                </div>
            </div>
            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default Product
