import React from 'react'

function ProductTitle({ productTitles }: { productTitles: string[] }) {
  return (
    <div className='flex justify-between flex-col gap-[10px] items-center text-wrap'>
      <h4 className='h4 text-[#737373]'>{productTitles[0]}</h4>
      <h3 className='h3 text-[#252B42]'>{productTitles[1]}</h3>
      <p className='para text-[#737373]'>{productTitles[2]}</p>

    </div>
  )
}

export default ProductTitle
