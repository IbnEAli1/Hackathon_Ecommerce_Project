import React from 'react'
import Image from 'next/image';
import pic1 from '@/images/pic1.png';
import pic2 from '@/images/pic2.png';
import pic3 from '@/images/pic3.png';


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
        Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics 
        </p>
      </div>
      {/* Content card */}
      <div className="flex flex-wrap justify-center gap-10">
        {[
          { src: pic1, alt: "pic1" },
          { src: pic2, alt: "pic2" },
          { src: pic3, alt: "pic3" },
        ].map((pic, index) => (
          <div key={index} className="flex flex-col items-center w-[250px]">
            <Image 
            src={pic.src}
            alt={pic.alt}
            className="w-full h-auto object-contain"
            />
            <div className='text-left '>
              Google
            </div>
            <h4 className="font-Montserrat font-bold text-[20px] leading-[30px] text-left text-[#252B42]">
            Loudest à la Madison #1 <br />
            (L'integral)
            </h4>
            <p className="font-Montserrat font-thin text-[14px] leading-[20px] text-left text-[#737373]">
            We focus on ergonomics and meeting <br /> you where you work. It's only a <br />keystroke away.
            </p>
            <div className="flex justify-center items-center gap-2 mt-2">
              <h5 className="font-Montserrat font-bold text-[16px] text-[#BDBDBD] line-through">
                $16.48
              </h5>
              <h5 className="font-Montserrat font-bold text-[16px] text-[#23856D]">
                $6.48
              </h5>
            </div>
            {/* <div className="mt-3">
              <Image src={colours} alt="Colors" />
            </div> */}
          </div>
         ))}
         </div>
       </div>
     );
   }
