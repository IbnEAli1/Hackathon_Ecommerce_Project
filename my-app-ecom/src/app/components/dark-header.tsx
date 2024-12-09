import Image from "next/image"
import phone from "@/images/icn settings icn-xs.png"
import mail from "@/images/icn settings icn-xs (1).png";
import insta from "@/images/icn settings icn-xs (2).png";
import yout from "@/images/icn settings icn-xs (3).png";
import fb from "@/images/icn settings icn-xs (4).png";
import twit from "@/images/icn settings icn-xs (5).png";

export default function DarkHeader() {
  return (
    <div className="lg:block hidden w-[1440px] h-[58px] bg-[#252B42]">
      <div className="flex justify-between items-center w-full h-full px-[24px]">
      {/* left side */}
        <div className="flex gap-[10px]">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
            <Image src={phone} alt="phone" width={16} height={16} />
            <span className="font-Montserrat text-[14px] font-bold"> (92) 317 2776177</span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
            <Image src={mail} alt="mail" width={16} height={16} />
            <span className="font-Montserrat text-[14px] font-bold ">akazbaba6@gmail.com</span>
          </button>
        </div>

        {/* Center section */}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section */}
        <div className="flex gap-[10px] items-center">
          <h6 className="font-Montserrat text-[14px] text-white">Follow Us:</h6>
          <div className="flex gap-[10px]">
            <Image src={insta} alt="Instagram" width={16} height={16} />
            <Image src={yout} alt="YouTube" width={16} height={16} />
            <Image src={fb} alt="Facebook" width={16} height={16} />
            <Image src={twit} alt="Twitter" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
}