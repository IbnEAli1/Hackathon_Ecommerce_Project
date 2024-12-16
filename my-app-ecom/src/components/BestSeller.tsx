import Image from "next/image";
import { products } from "@/image/helper";


export default function BestSeller() {
    return (
        <section className="pt-20 px-6 sm:px-8 md:px-16 lg:px-32 bg-white">
            {/* Section Title */}
            <div className="text-center pb-20 font-bold">
                <h2 className="text-xl md:text-2xl tracking-md text-[#737373]">
                    Featured Products
                </h2>
                <h3 className="text-2xl md:text-3xl tracking-tiny text-[#252B42] mt-2">
                    BESTSELLER PRODUCTS
                </h3>
                <p className="text-[#737373] tracking-md mt-2  text-[14px]">
                    Problems trying to resolve the conflict between
                </p>
            </div>



{/* products  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col items-center text-center font-bold"
                    >
                        <div className="relative">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={1000}
                                height={1000}
                                className="object-cover"
                            />
                        </div>

                        <div className="mt-4">


                            <h4 className="text-[16px] text-[#252B42] font-bold">
                                {product.title}
                            </h4>
                            <p className="text-sm text-[#737373] mt-1">
                                {product.category}
                            </p>



                            <div className="flex justify-center items-center mt-2">
                                <p className="text-sm text-[#BDBDBD] mr-2">
                                    {product.originalPrice}
                                </p>
                                <p className="text-sm text-[#23856D] font-semibold">
                                    {product.price}
                                </p>
                            </div>



                            <div className="flex justify-center items-center mt-2 space-x-2">
                                {product.colors.map((color, index) => (
                                    <Image
                                        key={index}
                                        src={`/${color}.svg`} 
                                        alt={`Color ${index + 1}`}
                                        width={16} 
                                        height={16} 
                                        className="rounded-full"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
