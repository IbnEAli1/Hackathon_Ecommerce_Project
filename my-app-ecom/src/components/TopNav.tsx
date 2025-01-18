import Image from 'next/image'

import a from "@/app/assets/a.png"
import b from "@/app/assets/b.png"
import c from "@/app/assets/c.png"
import d from "@/app/assets/d.png"

function TopNav({ topNavBg }: { topNavBg?: string }) {
    return (
        <div className={`h-1/2  ${topNavBg} text-[#fafafa]`}>
            <div className={`wraper  text-[#fafafa] items-center justify-between hidden sm:flex`} >

                <div className="flex md:justify-between md:flex-row sm sm:items-center">
                    <h6 className='p-[10px] h6 '>(225) 555-0118</h6>
                    <h6 className='p-[10px] h6 '>michelle.rivera@example.com</h6>
                </div>

                <div className="h6 hidden lg:block">Follow Us  and get a chance to win 80% off</div>

                <div className="flex md:justify-between md:flex-row sm:flex-col sm:items-center">
                    <h6 className='h6'>Follow Us  :</h6>
                    <div className="flex justify-between">
                        <Image
                            src={a}
                            alt='insta'
                            width={26}
                            height={26}
                        />
                        <Image
                            src={b}
                            alt='youtube'
                            width={26}
                            height={26}
                        />
                        <Image
                            src={c}
                            alt='fb'
                            width={26}
                            height={26}
                        />
                        <Image
                            src={d}
                            alt='tw'
                            width={26}
                            height={26}
                        />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopNav
