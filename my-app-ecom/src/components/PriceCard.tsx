
import Image from 'next/image'


import right from "@/app/assets/icn-circle circle-xs secondary-color-1.png"
import siverright from "@/app/assets/silver-icn-circle circle-xs mute.png"

function PriceCard({ quality, amount, }: { quality: string, amount: string }) {
    return (
        <div className={`flex-grow  border rounded-[10px] py-[50px] px-10 flex flex-col justify-center items-center gap-[35px]   hover:scale-[1.25] border-[#23A6F0]`}>
            <h3 className="h3 text-[#252B42] hover:text-[#ffffff]">{quality}</h3>
            <h5 className="h5 w-[160px] text-wrap text-center text-[#737373]">
                Organize across all
                apps by hand
            </h5>
            <div className="w-[114px] flex gap-[10] ">
                <h2 className="h2 text-[#23A6F0]">{amount}</h2>
                <div className="flex flex-col  ">
                    <h3 className="h3 text-[#23A6F0] ">$</h3>
                    <h5 className="h5 text-[#8EC2F2]">Per Month</h5>
                </div>
            </div>
            <div className="w-[247px] h-[32px] flex gap-[10px] ">
                <div>
                    <Image src={right} alt='right' height={32} width={32} />
                </div>
                <h6 className="h6 text-[#252B42]">Unlimited product updates</h6>
            </div>
            <div className="w-[247px] h-[32px] flex gap-[10px] ">
                <div>
                    <Image src={right} alt='right' height={32} width={32} />
                </div>
                <h6 className="h6 text-[#252B42]">Unlimited product updates</h6>
            </div>
            <div className="w-[247px] h-[32px] flex gap-[10px] ">
                <div>
                    <Image src={right} alt='right' height={32} width={32} />
                </div>
                <h6 className="h6 text-[#252B42]">Unlimited product updates</h6>
            </div>
            <div className="w-[247px] h-[32px] flex gap-[10px] ">
                <div>
                    <Image src={siverright} alt='right' height={32} width={32} />
                </div>
                <h6 className="h6 text-[#252B42]">1GB  Cloud storage</h6>
            </div>
            <div className="w-[247px] h-[32px] flex gap-[10px] ">
                <div>
                    <Image src={siverright} alt='right' height={32} width={32} />
                </div>
                <h6 className="h6 text-[#252B42]">Email and community support</h6>
            </div>
            <button className='w-[246px] h-[52px] rounded-[5px] text-white bg-[#23A6F0] btn-text'>Try for free</button>
        </div>
    )
}

export default PriceCard
