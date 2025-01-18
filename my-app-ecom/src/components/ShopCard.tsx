import Image, { StaticImageData } from "next/image";


function ShopCard({ imgPath }: { imgPath: StaticImageData }) {
    return (
        <div className="">
            <div className="relative md:h-[222px] rounded-[5px] flex items-center w-[245px] h-[280px]">
                <Image
                    src={imgPath}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-[5px]"

                    alt=""
                />
            </div>
        </div>




    )
}

export default ShopCard