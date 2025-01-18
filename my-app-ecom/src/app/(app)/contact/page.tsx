import BottomNav from '@/components/BottomNav'
import Image from 'next/image'
import React from 'react'

import phone from "@/app/assets/Vector.png"
import map from "@/app/assets/Vector2.png"
import msg from "@/app/assets/Vector3.png"

import arrow from "@/app/assets/Arrow 2.png"

import logos1 from "@/app/assets/logos_twitter.png"
import logos2 from "@/app/assets/logos_facebook.png"
import logos3 from "@/app/assets/logos-ant-design_instagram-outlined.png"
import logos4 from "@/app/assets/logos_linkedin-icon.png"
import background from "@/app/assets/background.png"
import OfficeCard from '@/components/OfficeCard'
import Footer from '@/components/Footer'

function Contact() {
    return (
        <div className=''>
            <header className='bg-white'>
                <BottomNav linksNames={["product", "pricing", "contact",]} showLastSectionLinks={false} showMemberBtn={true} />
            </header>
            {/*  */}
            <div className='wraper  flex  flex-col md:flex-row text-nowrap  justify-center items-center'>
                <div className='flex basis-1/3 flex-col gap-[40px] text-center items-center  flex-wrap py-28 '>
                    <h5 className="h5 text-[#252B42]">CONTACT US</h5>
                    <h1 className="h1 text-[#252B42] ">Get in touch <br /> today!</h1>
                    <h4 className="h4 text-[#737373]">
                        We know how large objects will act,<br />
                        but things on a small scale
                    </h4>
                    <div className='flex flex-col justify-between h-[84px]  w-[242px]'>
                        <h3 className="h3 text-[#252B42] text-nowrap text-center ">Phone ; +451 215 215 </h3>
                        <h3 className="h3 text-[#252B42] text-nowrap ">Fax : +451 215 215</h3>
                    </div>
                    <div className="flex p-[10px] gap-[34px] h-[50px] w-[242px] ">
                        <Image src={logos1} alt='tw' width={30} height={29} />
                        <Image src={logos2} alt='fb' width={30} height={29} />
                        <Image src={logos3} alt='ins' width={30} height={29} />
                        <Image src={logos4} alt='linid' width={30} height={29} />
                    </div>

                </div>
                <div className='warper min-h-[440px] min-w-[376px] relative flex justify-center items-center basis-2/3 flex-wrap'>
                    <Image
                        src={background}
                        alt='background'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='right'
                    // className='w-[440px] md:w-[640px] items-center'
                    />
                </div>


            </div>



            {/*  */}
            <div className="wraper py-28 flex gap-20 flex-col ">
                <div className="flex flex-col gap-[10px] justify-center items-center ">
                    <h6 className="h6 text-[#252B42]">VISIT OUR OFFICE</h6>
                    <h2 className="h2 text-[#252B42] text-wrap text-center ">
                        We help small businesses <br />
                        with big ideas
                    </h2>
                </div>

            </div>
            {/*  */}
            <div className="wraper flex justify-center items-center flex-wrap  gap-7">
                <OfficeCard imagePath={phone} />
                <OfficeCard imagePath={map} />
                <OfficeCard imagePath={msg} />
            </div>
            {/*  */}
            <div className='flex justify-center items-center '>
                <Image src={arrow} alt='arrow' />
            </div>
            <div className='flex justify-center items-center py-20 '>
                <div className="flex flex-col gap-[36px] justify-center items-center ">
                    <h5 className="h5 text-[#252B42]">WE Can`t WAIT TO MEET YOU</h5>
                    <h1 className="h1 text-[#252B42]">Let`s Talk</h1>
                    <button className='h-[52px] w-[186px] rounded-[5px] bg-[#23A6F0] btn-text text-white '>Try it free now</button>
                </div>
            </div>
            {/*  */}
            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default Contact
