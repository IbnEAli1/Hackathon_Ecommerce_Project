import Image from "next/image";
import colours from "@/images/product-colors.png";
import product1 from "@/images/product-cover-1.png";
import product2 from "@/images/product-cover-2.png;"
import product3 from "@/images/product-cover-3.png;"
import product4 from "@/images/product-cover-4.png;"
import product5 from "@/images/product-cover-5.png;"
import product6 from "@/images/product-cover-6.png;"
import product7 from "@/images/product-cover-7.png;"
import product8 from "@/images/product-cover-8.png;"


export default function CardText() {
  return (
    <div className="absolute top-[5180px] w-[239px] h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]">
       {/* product cover 1 */}
       <Image
            src={product1}
            alt="Grafic Design1"
            className="object-contain"
            style={{ width: "100%", height: "auto" }}
          />
      <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>
      <p className="w-full font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
        English Department
      </p>
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>
      <div className="w-[82.2px] h-[16px] flex justify-center">
        <Image src={colours} alt="colours" />
      </div>
{/* product cover 2 */}
      <Image
            src={product2}
            alt="Grafic Design2"
            className="object-contain"
            style={{ width: "100%", height: "auto" }}
          />
      <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>
      <p className="w-full font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
        English Department
      </p>
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>
      <div className="w-[82.2px] h-[16px] flex justify-center">
        <Image src={colours} alt="colours" />
      </div>

       {/* product cover 3 */}
       <Image
            src={product3}
            alt="Grafic Design1"
            className="object-contain"
            style={{ width: "100%", height: "auto" }}
          />
      <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>
      <p className="w-full font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
        English Department
      </p>
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>
      <div className="w-[82.2px] h-[16px] flex justify-center">
        <Image src={colours} alt="colours" />
      </div>
{/* product cover 4 */}
      <Image
            src={product4}
            alt="Grafic Design2"
            className="object-contain"
            style={{ width: "100%", height: "auto" }}
          />
      <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>
      <p className="w-full font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
        English Department
      </p>
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>
      <div className="w-[82.2px] h-[16px] flex justify-center">
        <Image src={colours} alt="colours" />
      </div>
    </div>
  );
}
