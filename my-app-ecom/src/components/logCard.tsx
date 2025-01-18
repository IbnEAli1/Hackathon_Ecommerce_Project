import Image from "next/image"
import logo1 from "@/app/assets/logos1.png"
import logo2 from "@/app/assets/logos2.png"
import logo3 from "@/app/assets/logos3.png"
import logo4 from "@/app/assets/logos4.png"
import logo5 from "@/app/assets/logos5.png"
import logo6 from "@/app/assets/logos6.png"

function LogoCard() {
    return (
        <div className='wraper flex flex-co flex-wrap items-center justify-between flex-col  sm:flex-row  bg-[#fafafa] gap-[30px]  '>
            <Image
                src={logo1}
                alt=""

            />
            <Image
                src={logo2}
                alt=""

            />
            <Image
                src={logo3}
                alt=""

            />
            <Image
                src={logo4}
                alt=""

            />
            <Image
                src={logo5}
                alt=""

            />
            <Image
                src={logo6}
                alt=""

            />
        </div>
    )
}

export default LogoCard
