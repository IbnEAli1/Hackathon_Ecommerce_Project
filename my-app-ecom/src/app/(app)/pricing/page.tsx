import BottomNav from '@/components/BottomNav'
import Image from 'next/image'
import Link from 'next/link'

import gt from "@/app/assets/gt-icn arrow-right icn-xs.png"
import PriceCard from '@/components/PriceCard'
import LogoCard from '@/components/logCard'
import PricingFaq from '@/components/PricingFaq'
import TrailCard from '@/components/TrailCard'
import Footer from '@/components/Footer'


function Pricing() {
    return (
        <div className='bg-[#fafafa]'>
            <header className='bg-white'>
                <BottomNav linksNames={["product", "pricing", "contact",]} showLastSectionLinks={false} showMemberBtn={true} />
            </header>
            {/*  */}
            <div className="wraper py-[50px] flex justify-center items-center flex-col gap-4 bg-white ">
                <h5 className="h5 text-[#737373]">PRICING</h5>
                <h1 className="h1 text-[#252B42]">Simple Pricing</h1>
                <div className="w-[134px] h-[44px] py-[10px] flex gap-[15px]">
                    <Link href="/" className="link text-[#252B42]">Home</Link>
                    <Image src={gt} alt='gt' width={9} height={16} />
                    <Link href="/pricing" className="link text-[#252B42]">Pricing</Link>


                </div>
            </div>
            {/*  */}
            <div className="flex justify-center items-center gap-[10px] flex-col py-12">
                <h2 className="h2 text-[Pricing] ">Pricing</h2>
                <p className="para text-[#737373] text-center text-wrap">
                    Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>
            {/*  */}
            <div className="wraper flex justify-center items-center">
                <div className="flex w-[311px] h-11 gap-4 justify-center items-center py-12 ">
                    <div className="flex w-[186px] h-7 gap-[10px] justify-center items-center ">
                        <h5 className="h5 text-[#252B42]">Monthly</h5>
                        <div className="w-[45px] h-[25px] rounded-2xl border border-[#23A6F0] flex justify-center items-center relative">
                            <div className="w-[19px] h-[19px] bg-[#EBEBEB] rounded-full border border-[#D0D0D0] absolute top-[3px] left-1 "></div>
                        </div>
                        <h5 className="h5 text-[#252B42]" >Yearly</h5>
                    </div>
                    <div className='w-[109px] h-11 rounded-[37px] flex justify-center items-center bg-[#B2E3FF] '>
                        <h6 className="h6 text-[#23A6F0]">Save 25%</h6>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="wraper flex flex-wrap justify-center gap-5">
                <PriceCard quality='Free' amount='0' />
                <PriceCard quality='STANDARD' amount='9.99' />
                <PriceCard quality='PREMIUM' amount='19.99' />
            </div>
            {/*  */}
            <div className="flex justify-center items-center py-20">
                <h4 className="h4 text-[#252B42] ">Trusted By Over 4000 Big Companies</h4>
            </div>
            <LogoCard />
            <PricingFaq />
            <TrailCard />
            <footer>
                <Footer />
            </footer>
        </div>

    )
}

export default Pricing
