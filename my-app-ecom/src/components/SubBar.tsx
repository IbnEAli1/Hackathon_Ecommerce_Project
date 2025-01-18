import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import gt from "@/app/assets/gt.png"
function SubBar() {
  return (
    <>
      <div className='wraper w-[92%] bg-[#fafafa] h-[202px] sm:h-[92px] py-6  flex flex-col justify-between items-center sm:flex-row'>
        <h3 className='text-[#252B42] h3 text-center '>Shop</h3>

        <div className="flex justify-center items-center py-[10px] gap[15px]">
          <Link href={"/"} className='link text-[#BDBDBD] hover:text-[#252B42]'>Home</Link>
          <Image src={gt} alt='' width={10} height={7} className='px-[1.5px] mx-2' />
          <Link href={"/shop"} className='link text:[#BDBDBD] hover:text-[#252B42]'>Shop</Link>
        </div>
      </div>

    </>
  )
}

export default SubBar
