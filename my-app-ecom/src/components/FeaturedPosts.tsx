import Image from 'next/image'

import road from "@/app/assets/road.png"
import car from "@/app/assets/car.png"
import umberla from "@/app/assets/umberela.png"
import alarm from "@/app/assets/alarm.png"
import graph from "@/app/assets/gragh.png"
import gt from "@/app/assets/gt.png"
import Link from 'next/link'

function FeaturedPosts() {
    return (
        <div className='wraper flex flex-col items-center py-20'>
            <div className="flex flex-col gap-[10px]  h-[184px] xl:h-[134px] text-wrap ">
                <h6 className='h6 text-[#23A6F0] '>Practice Advice</h6>
                <h2 className='h2 text-[#252B42] '>Featured Products</h2>
                <p className='para text-[#737373]'>Problems trying to resolve the conflict between the two major </p>
            </div>

            <div className='flex flex-col md:flex-row flex-wrap gap-[30px]'>

                <div className="h-[606px]  flex flex-col w-[350px] ">
                    <div className='relative'>
                        <Image
                            src={road}
                            alt=''
                            className="bg-cover rounded-tl-lg rounded-tr-lg"


                        />
                        <div className="absolute top-5 left-5 text-center  w-[58px] h-6 rounded-[3px] bg-[#E74040] h6 text-white" >
                            NEW
                        </div>
                    </div>
                    <div className='flex  flex-col gap-[10px] pt-[25px] px-[25px] pb-[35px] border '>
                        <div className='flex gap-[15px]'>
                            <p className='small text-[#737373] hover:text-[#8EC2F2] '>Google</p>
                            <p className='small text-[#737373] hover:text-[#8EC2F2] '>Trending</p>
                            <p className='small text-[#737373] hover:text-[#8EC2F2] '>New</p>

                        </div>
                        <h4 className="h4 text-[#252B42]">Loudest à la Madison #1 <br />(Lintegral)</h4>
                        <p className='para text-[#737373]'>We focus on ergonomics and meeting <br /> you where you work. Its only a <br />keystroke away.</p>
                        <div className="flex w-[298px] h-[46px] justify-center gap-16 py-[15px]">
                            <span className='flex'>
                                <Image
                                    src={alarm}
                                    alt=''
                                />
                                <p className='small'>22 April 2021</p>
                            </span>
                            <span className='flex'>
                                <Image
                                    src={graph}
                                    alt=''
                                />
                                <p className='small'>10 comments</p>
                            </span>
                        </div>
                        <div>
                            <Link href={"#!"} className='h6 flex gap-2'>
                                Learn More
                                <Image
                                    src={gt}
                                    alt=''
                                    width={14}
                                    height={14}
                                />

                            </Link>
                        </div>
                    </div>
                </div>

                <div className="h-[606px] flex flex-col w-[350px] rounded-lg  ">
                    <div className='relative'>
                        <Image
                            src={car}
                            alt=''
                            className="bg-cover rounded-tl-lg rounded-tr-lg"

                        />
                        <div className="absolute top-5 left-5 text-center  w-[58px] h-6 rounded-[3px] bg-[#E74040] h6 text-white" >
                            NEW
                        </div>
                    </div>
                    <div className='flex  flex-col gap-[10px] pt-[25px] px-[25px] pb-[35px]  border'>
                        <div className='flex gap-[15px]'>
                            <p className='small text-[#737373] hover:text-[#8EC2F2] '>Google</p>
                            <p className='small text-[#737373] hover:text-[#8EC2F2] '>Trending</p>
                            <p className='small text-[#737373] hover:text-[#8EC2F2] '>New</p>

                        </div>
                        <h4 className="h4 text-[#252B42]">Loudest à la Madison #1 <br />(Lintegral)</h4>
                        <p className='para text-[#737373]'>We focus on ergonomics and meeting <br /> you where you work. Its only a <br />keystroke away.</p>
                        <div className="flex w-[298px] h-[46px] justify-center gap-16 py-[15px]">
                            <span className='flex'>
                                <Image
                                    src={alarm}
                                    alt=''
                                />
                                <p className='small'>22 April 2021</p>
                            </span>
                            <span className='flex'>
                                <Image
                                    src={graph}
                                    alt=''
                                />
                                <p className='small'>10 comments</p>
                            </span>
                        </div>
                        <div>
                            <Link href={"#!"} className='h6 flex gap-2'>
                                Learn More
                                <Image
                                    src={gt}
                                    alt=''
                                    width={14}
                                    height={14}
                                />

                            </Link>
                        </div>
                    </div>
                </div>

                <div className="h-[606px] flex flex-col w-[350px]  ">
                    <div className='relative'>
                        <Image
                            src={umberla}
                            alt=''
                            className="bg-cover rounded-tl-lg rounded-tr-lg"

                        />
                        <div className="absolute top-5 left-5 text-center  w-[58px] h-6 rounded-[3px] bg-[#E74040] h6 text-white" >
                            NEW
                        </div>
                    </div>
                    <div className='flex  flex-col gap-[10px] pt-[25px] px-[25px] pb-[35px] border '>
                        <div className='flex gap-[15px]'>
                            <p className='small text-[#737373] hover:text-[#8EC2F2] '>Google</p>
                            <p className='small text-[#737373] hover:text-[#8EC2F2] '>Trending</p>
                            <p className='small text-[#737373] hover:text-[#8EC2F2] '>New</p>

                        </div>
                        <h4 className="h4 text-[#252B42]">Loudest à la Madison #1 <br />(Lintegral)</h4>
                        <p className='para text-[#737373]'>We focus on ergonomics and meeting <br /> you where you work. Its only a <br />keystroke away.</p>
                        <div className="flex w-[298px] h-[46px] justify-center gap-16 py-[15px]">
                            <span className='flex'>
                                <Image
                                    src={alarm}
                                    alt=''
                                />
                                <p className='small'>22 April 2021</p>
                            </span>
                            <span className='flex'>
                                <Image
                                    src={graph}
                                    alt=''
                                />
                                <p className='small'>10 comments</p>
                            </span>
                        </div>
                        <div>
                            <Link href={"#!"} className='h6 flex gap-2'>
                                Learn More
                                <Image
                                    src={gt}
                                    alt=''
                                    width={14}
                                    height={14}
                                />

                            </Link>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default FeaturedPosts
