import Image, { StaticImageData } from 'next/image'

import fb from "@/app/assets/fb.png"
import ins from "@/app/assets/ins.png"
import tw from "@/app/assets/tw.png"

function OurTeamCards({ imagePath }: { imagePath: StaticImageData }) {
    return (
        <div className=' w-[286px]' >
            <div className="h-[231px] w-full  relative ">
                <Image
                    src={imagePath}
                    alt={`${imagePath}`}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                />

            </div>
            <div className="w-[316px] h-[152px] gap-[10px] flex flex-col items-center py-7">
                <h5 className="h5 text-[#252B42] ">Username</h5>
                <h6 className="h6 text-[#737373]">Profession</h6>
                <div className='flex w-[112px] h-6 gap-5'>
                    <div className="w-6 h-6 relative ">
                        <Image
                            src={fb}
                            alt='fb'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                        />
                    </div>
                    <div className="w-6 h-6 relative">
                        <Image
                            src={ins}
                            alt='insta'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                        />
                    </div>
                    <div className="w-6 h-6 relative">
                        <Image
                            src={tw}
                            alt='tw'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurTeamCards
