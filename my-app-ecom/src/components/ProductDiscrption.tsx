import Image from 'next/image'
import Link from 'next/link'

import product from "@/app/assets/unsplash_QANOF9iJlFs.png"
import gt from "@/app/assets/gt-icn arrow-right icn-xs.png"

function ProductDiscrption() {
    return (
        <div className='wraper flex flex-col justify-center'>
            <div className="flex justify-center items-center ">
                <Link href='/shop/diccription' className='h-[72px] p-6 link text-[#737373] flex items-cente justify-cente ' >
                    Description
                </Link>
                <Link href='/shop/diccription' className='h-[72px] p-6 link text-[#737373] flex items-cente justify-cente ' >
                    Additional Information
                </Link>
                <Link href='/shop/diccription' className='h-[72px] p-6 link text-[#737373] flex items-cente justify-cente ' >
                    Reviews
                </Link>
            </div>
            <hr className='h-[1px]  bg-[#ECECEC] mb-[30px]' />
            <div className=" flex gap-[30px] xl:flex-nowrap flex-wrap ">
                <div className='md:basis-1/3 rounded-[9px]'>
                    <Image
                        src={product}
                        alt='product'
                        width={316}
                        height={372}
                        className='rounded-[9px]'
                    />
                </div>
                <div className=" md:basis-1/3 rounded-[9px] pb-[25px] flex gap-[30px] flex-col  ">
                    <h3 className="h3 text-[#252B42] ">the quick fox jumps over </h3>

                    <p className="para text-[#737373] w-[322px] ">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

                    <p className="para text-[#737373] w-[322px] "> Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

                    <p className="para text-[#737373] w-[322px] ">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

                </div>
                <div className='flex flex-col gap-[30px] rounded-[9px] text-nowrap md:basis-1/3' >
                    <div className='flex flex-col  gap-[30px] '>
                        <h3 className="h3 text-[#252B42] ">the quick fox jumps over </h3>
                        <div className='flex flex-col gap-[10px] '>
                            <p className=' flex gap-[20px] '>
                                <span>
                                    <Image src={gt} alt='gt' width={9} height={16} />
                                </span>
                                <span className='h6 text-[#737373] '>
                                    the quick fox jumps over the lazy dog
                                </span>
                            </p>
                            <p className=' flex gap-[20px] '>
                                <span>
                                    <Image src={gt} alt='gt' width={9} height={16} />
                                </span>
                                <span className='h6 text-[#737373] '>
                                    the quick fox jumps over the lazy dog
                                </span>
                            </p>
                            <p className=' flex gap-[20px] '>
                                <span>
                                    <Image src={gt} alt='gt' width={9} height={16} />
                                </span>
                                <span className='h6 text-[#737373] '>
                                    the quick fox jumps over the lazy dog
                                </span>
                            </p>
                            <p className=' flex gap-[20px] '>
                                <span>
                                    <Image src={gt} alt='gt' width={9} height={16} />
                                </span>
                                <span className='h6 text-[#737373] '>
                                    the quick fox jumps over the lazy dog
                                </span>
                            </p>

                        </div>


                    </div>
                    <div className='flex flex-col rounded-[9px] gap-[30px] '>
                        <h3 className="h3 text-[#252B42] ">the quick fox jumps over </h3>
                        <div className='flex flex-col gap-[10px] '>
                            <p className=' flex gap-[20px] '>
                                <span>
                                    <Image src={gt} alt='gt' width={9} height={16} />
                                </span>
                                <span className='h6 text-[#737373] '>
                                    the quick fox jumps over the lazy dog
                                </span>
                            </p>
                            <p className=' flex gap-[20px] '>
                                <span>
                                    <Image src={gt} alt='gt' width={9} height={16} />
                                </span>
                                <span className='h6 text-[#737373] '>
                                    the quick fox jumps over the lazy dog
                                </span>
                            </p>
                            <p className=' flex gap-[20px] '>
                                <span>
                                    <Image src={gt} alt='gt' width={9} height={16} />
                                </span>
                                <span className='h6 text-[#737373] '>
                                    the quick fox jumps over the lazy dog
                                </span>
                            </p>


                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDiscrption
