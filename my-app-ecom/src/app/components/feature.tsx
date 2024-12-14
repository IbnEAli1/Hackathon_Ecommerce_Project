import React from "react";
import Image from "next/image";
import pic1 from "@/images/pic1.png";
import pic2 from "@/images/pic2.png";
import pic3 from "@/images/pic3.png";
import clock from "@/images/icon cool-icon-1.png"
import picture from "@/images/icon ant-design-area-chart-outlined.png"

export const Feature = () => {
  return (
    <div className="container w-full mx-auto flex flex-col items-center py-20 absolute top-[4300px]">
      <div className="text-center mb-10">
        <h6 className="font-Montserrat tracking-wide font-bold text-[14px] gap-[24px] leading-[24px] text-[#23A6F0]">
          Practice Advice
        </h6>
        <h3 className="font-Montserrat tracking-wide text-[#252B42] font-bold text-[40px] leading-[50px]">
          Featured Posts
        </h3>
        <p className="font-Montserrat tracking-wide text-[14px] font-bold leading-[20px] text-[#737373]">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      {/* Content card */}
      <div className="flex flex-wrap justify-center gap-10">
        {[
          { src: pic1, alt: "pic1" },
          { src: pic2, alt: "pic2" },
          { src: pic3, alt: "pic3" },
        ].map((pic, index) => (
          <div key={index} className="flex flex-col  w-[348px] h-[606px]">
            <Image
              src={pic.src}
              alt={pic.alt}
              className="w-full h-auto object-contain"
            />
            <div className="flex text-xstext-left space-x-3 px-2 py-5">
              <span className="text-[#23A6F0]">Google</span>
              <span className="text-[#737373]">Trending</span>
              <span className="text-[#737373]">New</span>
            </div>
            <h4 className="font-Montserrat font-medium text-xl leading-[30px] text-left text-[#252B42] px-2 py-3">
              Loudest à la Madison #1 <br />
              (L'integral)
            </h4>
            <p className="font-Montserrat font-thin text-[14px] leading-[20px] text-left text-[#737373]">
              We focus on ergonomics and meeting <br /> you where you work. It's
              only a <br />
              keystroke away.
            </p>
            <div className="flex items-center justify-between text-xs text-gray-400 mt-4">
              <div className="flex items-center gap-1">
                <span className="material-icons">
                  <Image
                  src={clock}
                  alt="clock"
                  height={20}
                  width={20}/>
                </span>
                <span>22 April 2021</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons">
                  <Image
                  src={picture}
                  alt="pic"
                  height={20}
                  width={20}/>
                </span>
                <span>10 comments</span>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-blue-500 text-sm font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};