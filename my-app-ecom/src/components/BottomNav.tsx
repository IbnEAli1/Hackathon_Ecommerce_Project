import Image from 'next/image'
import Link from 'next/link'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import search1 from "@/app/assets/search .icn-xs.png"
import shopping1 from "@/app/assets/shopping-cart .icn-xs.png"
import menu from "@/app/assets/menu .icn-xs.png"
import search from "@/app/assets/search-b.png"
import shopping from "@/app/assets/shoping-b.png"
import heart from "@/app/assets/heart.png"
import ac from "@/app/assets/icn settings icn-xs.png"
import BecomeMemberButton from './becomeMemberButton'

function BottomNav({ linksNames, showOtherLinks = false, showShopLink = false, showLastSectionLinks = true, showMemberBtn = false }: { linksNames: string[], showOtherLinks?: boolean, showShopLink?: boolean, showLastSectionLinks?: boolean, showMemberBtn?: boolean }) {
    return (
        <div className='h-1/2 bg-white '>
            <div className="h-full flex items-center justify-between wraper">

                <h3 className='h3 w-[187px] text-[#252B42]'>Bandage</h3>

                <div className="flex justify-end w-full h-full">
                    {/* mobile nav */}
                    <div className='w-[187px] h-[58px] flex justify-between items-center lg:hidden'>
                        <Image
                            src={search1}
                            alt='search'
                            width={24}
                            height={24}
                        />

                        <Image
                            src={shopping1}
                            alt='cart'
                            width={24}
                            height={24}
                        />

                        {/* menu */}
                        <div>
                            <Sheet>
                                <SheetTrigger>
                                    <Image
                                        src={menu}
                                        alt='menu'
                                        width={24}
                                        height={24}
                                    />
                                </SheetTrigger>
                                <SheetContent side="top" className='w-full  flex flex-col justify-center items-center absolute top-[81px]'>
                                    <Link href="/" className='m-font'>
                                        Home
                                    </Link>
                                    {
                                        linksNames?.map(
                                            (linkName, index) => {
                                                return (
                                                    <Link key={index} href={`/${linkName === "product" ? "shop" : linkName}`} className={`m-font`}>
                                                        {
                                                            linkName.charAt(0).toUpperCase().concat(linkName.slice(1).toLowerCase())
                                                        }
                                                    </Link>
                                                )
                                            }
                                        )

                                    }
                                    {
                                        showOtherLinks && (
                                            <div className='flex flex-col items-center'>
                                                <Link href="/login" className='mobile-menu text-[#23A6F0] w-full text-wrap text-center flex items-center p-[15px]'>
                                                    <span className='hidden lg:block' >
                                                        <Image
                                                            src={ac}
                                                            alt='ac'
                                                            width={12}
                                                            height={12}
                                                        />
                                                    </span>
                                                    Login / Register
                                                </Link>
                                                <Image
                                                    src={search}
                                                    alt='search'
                                                    width={56}
                                                    height={56}
                                                />
                                                <Image
                                                    src={shopping}
                                                    alt='shoping'
                                                    width={56}
                                                    height={56}
                                                />
                                                <Image
                                                    src={heart}
                                                    alt='menu'
                                                    width={56}
                                                    height={56}
                                                />
                                            </div>
                                        )
                                    }
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>

                    {/* destop nav */}
                    <div className=' h-full w-full hidden lg:flex justify-between items-center'>
                        <div className="flex gap-[15px] items-center justify-center">
                            <Link href="/" className='link'>
                                Home
                            </Link>
                            {
                                showShopLink && (
                                    <Link href={"/shop"}>
                                        <select className='link'>
                                            <option value="shop ">
                                                Shop
                                            </option>
                                        </select>
                                    </Link>)
                            }
                            {
                                linksNames?.map(
                                    (linkName, index) => {
                                        return (
                                            <Link key={index} href={`/${linkName === "product" ? "shop" : linkName}`} className='link'>
                                                {
                                                    linkName.charAt(0).toUpperCase().concat(linkName.slice(1).toLowerCase())
                                                }
                                            </Link>
                                        )
                                    }
                                )

                            }

                        </div>

                        {
                            showLastSectionLinks && (
                                <div className={`flex items-center justify-center `}>
                                    <Link href="/login" className='link text-[#23A6F0] w-full text-wrap text-center flex items-center p-[15px] md:p-0'>
                                        <span className='hidden lg:block' >
                                            <Image
                                                src={ac}
                                                alt='ac'
                                                width={12}
                                                height={12}
                                            />
                                        </span>
                                        Login / Register
                                    </Link>

                                    <div className='flex items-center  w-3/5 md:w-full'>
                                        <Image
                                            src={search}
                                            alt='search'
                                            width={56}
                                            height={46}
                                        />
                                        <Image
                                            src={shopping}
                                            alt='shoping'
                                            width={56}
                                            height={46}
                                        />
                                        <Image
                                            src={heart}
                                            alt='menu'
                                            width={56}
                                            height={46}
                                        />
                                    </div>



                                </div>
                            )
                        }
                        {
                            showMemberBtn && <BecomeMemberButton />
                        }



                    </div>


                </div>

            </div>
        </div>
    )
}

export default BottomNav
