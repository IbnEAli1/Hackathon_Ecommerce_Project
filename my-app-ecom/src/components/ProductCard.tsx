import Image, { StaticImageData } from "next/image";
import Link from 'next/link';

import pColour from "@/app/assets/product-images/product-colors.png"


function ProductCard({ imgPath, showColours = true, id }: { imgPath: StaticImageData | string, showColours?: boolean, id: string }) {
    return (
        <div className='flex flex-col border-2 rounded-[5px]'>

            <div className="h-[427px] md:w-[280px] w-[348px] flex justify-between  relative">
                <Image
                    src={imgPath}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt=""
                />
            </div>
            <div className=" flex flex-col justify-between items-center my-5">
                <h5 className='h5 text-[#252B42]'>Graphic Design</h5>
                <Link href={`/shop/${id}`} className="link text-[#737373]">English Department</Link>
                <div className="">
                    <span className='w-1/2 h5 text-[#BDBDBD]'>$16.48</span>
                    <span className='w-1/2 h5 text-[#23856D]'>$6.48</span>
                </div>
                {
                    showColours && (
                        <div className="w-[82px]">
                            <Image
                                src={pColour}
                                alt=""
                            />
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default ProductCard
