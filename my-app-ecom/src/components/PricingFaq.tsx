
import Para from './Para'
function PricingFaq() {
    return (
        <div className='wraper flex flex-col items-center gap-[50px] py-20 '>
            <div className="py-[45px] flex flex-col justify-center items-center gap-[10px] ">
                <h2 className="h2 text-[#252B42]">Pricing FAQs</h2>
                <h4 className="h4 text-[#737373]">
                    Problems trying to resolve the conflict between
                    the two major realms of Classical physics
                </h4>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-[30px] ">
                <div className=" flex-grow  flex flex-col gap-[30px]  ">
                    <Para />
                    <Para />
                    <Para />
                </div>
                <div className="flex-grow flex gap-[30px] flex-col ">
                    <Para />
                    <Para />
                    <Para />
                </div>

                <p className="h4 text-[#737373] text-center text-wrap">Haven’t got your answer? Contact our support</p>

            </div>

        </div>
    )
}

export default PricingFaq
