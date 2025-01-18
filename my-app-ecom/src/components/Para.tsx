import Image from 'next/image'

import gt from "@/app/assets/gt-icn arrow-right icn-xs.png"

function Para() {
    return (
        <div className='flex p-[25px] rounded-[9px] gap-5 '>
            <div>
                <Image src={gt} alt='' />
            </div>
            <div className='flex flex-grow gap-[5px]'>
                <h5 className="h5 text-[#252B42]">the quick fox jumps over the lazy dog</h5>
                <p className="para text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey
                    dolor do met sent. RELIT official consequent door ENIM
                    RELIT Mollie. Excitation venial consequent sent
                    nostrum met.
                </p>
            </div>
        </div>
    )
}

export default Para
