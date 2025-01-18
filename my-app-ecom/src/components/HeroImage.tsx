
import Image from "next/image"
import heroimg from "@/app/assets/shop-hero-1-product-slide-1.png"

function HeroImage() {

  return (
    <div className="relative flex">
      <div className="wraper  h-[753px] m:h-[852px] ">
        <Image
          src={heroimg}
          alt="hero-image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"

        />
        <div className=" h-[381px] sm:h-[331px] w-[414px] lg:w-[600px] gap-9 flex flex-col absolute top-56  sm: md:left-48">
          <h5 className="h5 text-[#ffffff]">SUMMER 2020</h5>
          <h2 className="h1 text-[#ffffff]">NEW COLLECTION</h2>
          <h4 className="h4 text-[#fafafa]">We know how large objects will act, <br /> but things on a small scale.</h4>
          <button
            className="h3b bg-[#2DC071] w-[221px] h-[62px] rounded[5px] px-10 py-[15px] text-white"
          >
            SHOP NOW
          </button>

        </div>
      </div>
    </div>

  )
}

export default HeroImage
