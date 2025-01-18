import ProductTitle from './ProductTitle'
import ProductCard from './ProductCard'
import { StaticImageData } from 'next/image'


function BestSellerProduct({ showTitle = true, cardCollection }: { showTitle?: boolean, cardCollection: (StaticImageData | string)[] }) {


  return (
    <div className='wraper flex flex-col items-center justify-between flex-wrap  py-28 gap-20'>
      {showTitle &&
        <ProductTitle productTitles={
          ["Featured Products",
            "BESTSELLER PRODUCTS",
            "Problems trying to resolve the conflict between"]
        } />
      }
      <div className="flex flex-col sm:flex-row justify-center flex-wrap  gap-[30px]">
        {
          cardCollection.map(
            (card, index) => {
              return (
                <ProductCard id={index.toString()} key={index} imgPath={card} />
              )
            }
          )
        }

      </div>
    </div>
  )
}

export default BestSellerProduct
