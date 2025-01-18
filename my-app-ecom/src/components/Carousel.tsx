


import Image, { StaticImageData } from 'next/image'
function Carousel({ image, bgColor, textColor }: { image: StaticImageData, bgColor: string[], textColor: string }) {
    return (
        <div className={`flex justify-center h-[1200px] lg:h-[710px] ${bgColor[0]} rounded-[5px]  pt-28`}>
            <div className=" text-center md:text-start lg:h-[600px] wraper flex flex-col text-wrap lg:flex-row  lg:justify-between lg:pl-24 justify-end items-center gap-[30px] ">
                <div className={`h-[430px] w-[420p ${textColor} md:w-[510px] text-wrap gap-[35px]  flex flex-col`}>
                    <h5 className="h5">SUMMER 2020</h5>
                    <h2 className="h1 ">Vita Classic Product</h2>
                    <h4 className="para text-wrap ">We know how large objects will act, We know how are objects will act, We know</h4>
                    <div className="flex flex-col items-center md:items-start md:flex-row  gap-4 ">
                        <h3 className="h3 ">$16.48</h3>
                        <button className={`btn-text  ${bgColor[1]} w-[184px] h-[52px] rounded-[5px] px-10 py-[15px]`}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="w-[443px] h-[600px] relative">
                    <Image
                        src={image}
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

export default Carousel
