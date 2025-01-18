import Image from "next/image"

import singleProduct1 from "@/app/assets/single-product-1-cover-2.jpg"
import gt from "@/app/assets/gt.png"
import fourStar from "@/app/assets/four-star.png"

import heart from "@/app/assets/heart-icn favorite.png"
import cart from "@/app/assets/cart-icn favorite.png"
import eye from "@/app/assets/eye-icn favorite.png"

function ProductDetailSection() {
    return (
        <div className="bg-[#fafafa] ">
            <div className="wraper flex flex-col bg-[#fafafa] ">
                <div className=" flex flex-col md:flex-row pb-12 gap-[30px]  ">
                    <div className=" flex flex-col basis-full rounded-[5px] gap-[15px]">
                        <div className="basis-11/12  relative">
                            <Image
                                src={singleProduct1}
                                alt="single-product"
                                layout="responsive"
                                width={506}
                                height={450}
                            />
                            <div className="absolute flex w-full h-full px-6 top-0 left-0  justify-between items-center">
                                <div className="h-[45px] w-6 rotate-180">
                                    <Image
                                        src={gt}
                                        alt="gt"
                                        width={24}
                                        height={45}
                                    />
                                </div>
                                <div className="h-[45px] w-6 ">
                                    <Image
                                        src={gt}
                                        alt="gt"
                                        width={24}
                                        height={45}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex  h-[75px] w-[220px] gap-4 ">
                            <div className="flex-grow relative">
                                <Image
                                    src={singleProduct1}
                                    alt="single-product"
                                    layout="fill"
                                    objectFit="cover"

                                />
                            </div>
                            <div className="flex-grow relative">
                                <Image
                                    src={singleProduct1}
                                    alt="single-product"
                                    layout="fill"
                                    objectFit="cover"

                                />
                            </div>
                        </div>

                    </div>
                    <div className="flex basis-full gap-[52px]  flex-col px-6 py-3 ">
                        <div className="flex gap-[10px] flex-col" >
                            <h4 className="h4 text-[#252B42]">Floating Phone</h4>
                            <div className="w-[220px] h-6 flex gap-[10px] " >
                                <div className="h-[22px] w-[131px] relative">
                                    <Image src={fourStar} alt="fourstar" />
                                </div>
                                <h6 className="h6 text-[#737373] text-nowrap w-20 h-6">10 Reviews</h6>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <h3 className="h3 text-[#252B42] ">$1,139.33</h3>
                            <div className="flex gap-[5px] h-6 w-[160px] text-nowrap ">
                                <h6 className="h6 text-[#737373]">Availability  :</h6>
                                <h6 className="h6 text-[#23A6F0]">In Stock </h6>

                            </div>

                        </div>
                        <div className="h-[60px] max-w-[464px] ">
                            <p className="para text-[#858585]">Met minim Mollie non desert Alamo est sit cliquey dolor
                                do met sent. RELIT official consequent door ENIM RELIT Mollie.
                                Excitation venial consequent sent nostrum met. </p>
                        </div>
                        <hr className="w-full bg-[#BDBDBD] h-[1px] px-6 " />
                        <div className="flex gap-[10px]">
                            <div className="h-[30px] w-[30px] rounded-full bg-[#23A6F0]"></div>
                            <div className="h-[30px] w-[30px] rounded-full bg-[#2DC071]"></div>
                            <div className="h-[30px] w-[30px] rounded-full bg-[#E77C40]"></div>
                            <div className="h-[30px] w-[30px] rounded-full bg-[#252B42]"></div>
                        </div>
                        <div className="flex h-11 w-[298px] gap-[10px]  mt-[28px]  ">
                            <button className="h-11 w-[148px] rounded-[5px] bg-[#23A6F0] h6 text-white " >Select Options</button>
                            <div className="h-10 w-10 rounded-full bg-white border-[#E8E8E8] border relative">
                                <Image src={heart} alt="heart" fill />
                            </div>
                            <div className="h-10 w-10 rounded-full bg-white border-[#E8E8E8] border relative">
                                <Image src={cart} alt="cart" fill />
                            </div>
                            <div className="h-10 w-10 rounded-full bg-white border-[#E8E8E8] border relative ">
                                <Image src={eye} alt="eye" fill />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductDetailSection
