import Image from 'next/image'
import React from 'react'

import rightArrow from "../../public/icn arrow-right .icn-xs.png"

function becomeMemberButton() {
  return (
    <div className='w-[300px] h-[42px] my-3 flex justify-between items-center'>
      <button className='btn-text text-[#23A6F0]  '>Login</button>
      <button className='w-[214px] h-full btn-text text-white bg-[#23A6F0] rounded-[5px] flex justify-center items-center gap-2'>
        Become a member <Image src={rightArrow} alt='right-arrow' height={10} width={12} />
      </button>

    </div>
  )
}

export default becomeMemberButton
