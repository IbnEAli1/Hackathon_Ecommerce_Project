import Image, { StaticImageData } from 'next/image'
import React from 'react'

function OfficeCard({ imagePath }: { imagePath: StaticImageData }) {
    return (
        <div className="h-[343px] w-[327px] flex  justify-center items-center flex-col bg-white py-[50px] px-10 gap-[15px] hover:scale-105 ">
            <div className='h-[72px] w-[72px]  '>
                <Image
                    src={imagePath}
                    alt='phone'

                />
            </div>
            <div className="w-[216px] h-12 flex flex-col justify-center items-center text-center ">
                <h6 className="h6 text-[#252B42] h-6 w-full ">georgia.young@example.com</h6>
                <h6 className="h6 text-[#252B42] h-6 w-[176px] ">georgia.young@example.com</h6>
            </div>
            <h5 className="h5 text-[#252B42]">Get Support</h5>
            <button className='text-[#23A6F0] h-[54px] w-[189px] rounded-[37px] border border-[#23A6F0]'>Submit Request</button>
        </div>
    )
}

export default OfficeCard
