import Image from "next/image"

import tw from "@/app/assets/tw.png"
import fb from "@/app/assets/fa-brands-1.png"
import ins from "@/app/assets/ins.png"
import ln from "@/app/assets/ln-logos_linkedin-icon.png"



function TrailCard() {
    return (
        <div className="wraper flex flex-col gap-[30px] justify-center items-center text-center  ">
            <h2 className="h2 text-[#252B42]">Start your 14 days free trial</h2>
            <p className="para text-[#737373] text-center text-wrap ">
                Met minim Mollie non desert Alamo est sit cliquey dolor
                do met sent. RELIT official consequent.
            </p>
            <button className="w-[186px] h-[52px] rounded-[5px] bg-[#23A6F0] btn-text text-white " >Try it free now</button>
            <div className="w-[242px] h-[50px] flex justify-center items-center gap-[34px] ">
                <Image src={tw} alt="" width={30} height={30} />
                <Image src={fb} alt="" width={30} height={30} />
                <Image src={ins} alt="" width={30} height={30} />
                <Image src={ln} alt="" width={30} height={30} />


            </div>
        </div>
    )
}

export default TrailCard
