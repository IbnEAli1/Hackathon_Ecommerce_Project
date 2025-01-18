



import b2 from "@/app/assets/b2.png"
import Image from 'next/image'
function NaturalUniverse() {
    return (
        <div className="flex justify-center h-[1200px] lg:h-[710px] w-full bg-white rounded-[5px]  pt-28">
            <div className="text-center lg:h-[600px] wraper flex flex-col lg:flex-row  lg:justify-between lg:pl-24 justify-end items-center gap-[30px]">
                <div className="h-[430px]   md:w-[510px] text-wrap gap-[35px]  flex flex-col lg:order-2 ">
                    <p className="para   text-[#BDBDBD]">SUMMER 2020</p>
                    <h2 className="h2    text-[#252B42]">Part of the Neural Universe</h2>
                    <h4 className="h4    text-[#737373]">We know how large objects will act, but things on a small scale.</h4>
                    <div className="flex  flex-col md:flex-row  items-center md:items-start gap-[10px]">
                        <button className="h-[52px] w-[156px] rounded-[5px] bg-[#23A6F0] md:bg-[#2DC071] text-white btn-text">BUY NOW</button>
                        <button className="h-[52px] w-[165px]  border border-[#23A6F0] md:border-[#2DC071] rounded-[5px] md:text-[#2DC071] text-[#23A6F0] btn-text">Learn More</button>
                    </div>
                </div>
                <div className="w-[443px] h-[600px] relative lg:order-1">
                    <Image
                        src={b2}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
            </div>
        </div>
    )
}

export default NaturalUniverse
