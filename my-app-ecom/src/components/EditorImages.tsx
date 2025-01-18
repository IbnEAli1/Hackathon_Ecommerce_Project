import Image from "next/image"

import man from "@/app/assets/man.png"
import woman1 from "@/app/assets/woman1.png"
import accossories from "@/app/assets/accessories.png"
import kid from "@/app/assets/kid.png"
import ProductTitle from "./ProductTitle"


function EditorImages() {
    return (
        <div className="wraper bg-[#FAFAFA] flex flex-col gap-12 py-20 ">
            <ProductTitle productTitles={["", "EDITOR’S PICK", "Problems trying to resolve the conflict between "]} />

            <div className="flex flex-wrap flex-col md:flex-row gap-[30px]  ">
                <div className="h-[500px] flex-grow  relative">
                    <Image
                        src={man}
                        alt="man"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                    <button className='absolute bottom-5 left-5 bg-white h-12 w-[170px] h5a'>MEN</button>
                </div>
                <div className="flex-grow flex flex-col sm:flex-row gap-[30px]">
                    <div className=" h-[500px] flex-grow  relative ">
                        <Image
                            src={woman1}
                            alt="woman"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"

                        />

                        <button className='absolute bottom-5 left-5 bg-white h-12 w-[136px] h5a'>WOMEN</button>
                    </div>
                    <div className=" h-[500px] flex flex-col flex-grow  gap-4 ">
                        <div className=" h-1/2 flex-grow relative">
                            <Image
                                src={accossories}
                                alt="man"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />

                            <button className='absolute bottom-5 left-5  bg-white h-12 w-[170px] h5a'>ACCESSORIES</button>
                        </div>
                        <div className="h-1/2 flex-grow relative ">
                            <Image
                                src={kid}
                                alt="man"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                            <button className='absolute bottom-5 left-5 bg-white h-12 w-[120px] h5a'>Kid</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>





    )
}

export default EditorImages
