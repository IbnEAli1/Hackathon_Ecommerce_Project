import Image from "next/image";
import colours from "@/images/product-colors.png";
import product1 from "@/images/product-cover-1.png";
import product2 from "@/images/product-cover-2.png";
import product3 from "@/images/product-cover-3.png";
import product4 from "@/images/product-cover-4.png";
import product5 from "@/images/product-cover-5.png";
import product6 from "@/images/product-cover-6.png";
import product7 from "@/images/product-cover-7.png";
import product8 from "@/images/product-cover-8.png";

export default function Card() {
  return (
    <div className="container w-full mx-auto flex flex-col items-center py-20 absolute top-[2900px]">
      <div className="text-center mb-10">
        <h4 className="font-Montserrat tracking-wide text-[20px] font-bold leading-[20px] text-[#737373]">
          Featured Products
        </h4>
        <h3 className="font-Montserrat tracking-wide font-bold text-[24px] leading-[32px]">
          BESTSELLER PRODUCTS
        </h3>
        <p className="font-Montserrat tracking-wide text-[14px] font-bold leading-[20px] text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {[
          { src: product1, alt: "Graphic Design 1" },
          { src: product2, alt: "Graphic Design 2" },
          { src: product3, alt: "Graphic Design 3" },
          { src: product4, alt: "Graphic Design 4" },
          { src: product5, alt: "Graphic Design 5" },
          { src: product6, alt: "Graphic Design 6" },
          { src: product7, alt: "Graphic Design 7" },
          { src: product8, alt: "Graphic Design 8" },
        ].map((product, index) => (
          <div key={index} className="flex flex-col items-center w-[250px]">
            {/* Product Image */}
            <Image
              src={product.src}
              alt={product.alt}
              className="w-full h-auto object-contain"
            />
            <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42] mt-4">
              Graphic Design
            </h5>
            <p className="font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
              English Department
            </p>
            <div className="flex justify-center items-center gap-2 mt-2">
              <h5 className="font-Montserrat font-bold text-[16px] text-[#BDBDBD] line-through">
                $16.48
              </h5>
              <h5 className="font-Montserrat font-bold text-[16px] text-[#23856D]">
                $6.48
              </h5>
            </div>
            <div className="mt-3">
              <Image src={colours} alt="Colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
