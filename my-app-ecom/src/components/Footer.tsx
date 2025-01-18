
import React from 'react'

import fb from "@/app/assets/fb.png"
import ins from "@/app/assets/ins.png"
import tw from "@/app/assets/tw.png"
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/app/assets/logo.png"
function Footer() {
    return (

        <div className=" bg-[#fafafa] " >
            <div className='wraper flex flex-wrap sm:gap-[10px] justify-between  py-10 flex-col sm:flex-row sm:justify-between'>
                <h1 className="h3 text-[#252B42] font-bold text-justify">Deli</h1>
                <div className="flex gap-5 h-6">
                    <Image
                        src={fb}
                        alt=""
                        width={24}
                        height={24}
                    />
                    <Image
                        src={ins}
                        alt=""
                        width={24}
                        height={24}
                    />
                    <Image
                        src={tw}
                        alt=""
                        width={24}
                        height={24}
                    />

                </div>
            </div>
            <div className='bg-white'>

                <div className="wraper py-[50px] gap-[30px] flex flex-col sm:flex-row flex-wrap sm:justify-center sm:items-center ">
                    <div className=" h-[170px] w-[148px] gap-5 flex flex-col flex-grow">
                        <h5 className='h5 text-[#252B42]'>Company Info</h5>
                        <div className="flex flex-col gap-[10px]">
                            <Link href={"/about"} className='link text-[#737373]'>About Us</Link>
                            <Link href={"/carrier"} className='link text-[#737373]'>Carrier</Link>
                            <Link href={"/hiring"} className='link text-[#737373]'>We are hiring</Link>
                            <Link href={"/blog"} className='link text-[#737373]'>Blog</Link>

                        </div>
                    </div>
                    <div className="h-[170px] w-[152px] gap-5 flex flex-col flex-grow">
                        <h5 className='h5 text-[#252B42]'>Legal</h5>
                        <div className="flex flex-col gap-[10px]">
                            <Link href={"/about"} className='link text-[#737373]'>About Us</Link>
                            <Link href={"/carrier"} className='link text-[#737373]'>Carrier</Link>
                            <Link href={"/hiring"} className='link text-[#737373]'>We are hiring</Link>
                            <Link href={"/blog"} className='link text-[#737373]'>Blog</Link>

                        </div>
                    </div>
                    <div className="h-[170px] w-[148px] gap-5 flex flex-col flex-grow">
                        <h5 className='h5 text-[#252B42]'>Features</h5>
                        <div className="flex flex-col gap-[10px]">
                            <Link href={"/business"} className='link text-[#737373]'>Business Marketing</Link>
                            <Link href={"/analytic"} className='link text-[#737373]'>User Analytic</Link>
                            <Link href={"/chats"} className='link text-[#737373]'>Live Chat</Link>
                            <Link href={"/support"} className='link text-[#737373]'>Unlimited Support</Link>

                        </div>
                    </div>
                    <div className="h-[170px] w-[152px] gap-5  flex flex-col flex-grow">
                        <h5 className='h5 text-[#252B42]'>Resources</h5>
                        <div className="flex flex-col gap-[10px]">
                            <Link href={"/ios-android"} className='link text-[#737373]'>IOS & Android</Link>
                            <Link href={"/demo"} className='link text-[#737373]'>Watch a Demo</Link>
                            <Link href={"/customers"} className='link text-[#737373]'>Customers</Link>
                            <Link href={"/api"} className='link text-[#737373]'>API</Link>

                        </div>

                    </div>
                    <div className="h-[131px] gap-5 flex flex-col ">
                        <h5 className='h5 text-[#252B42] ' >Get In Touch</h5>
                        <div className="flex flex-col">
                            <div className="flex h-[58px] w-[321px] rounded-[5px] text-[#f9f9f9] border border-[#e6e6e6]">
                                <input type="text" className='text-[#737373] font-Montserrat font-normal text-sm leading-7 tracking-[.2px] flex-grow' placeholder='Your Email' />
                                <button className='w-[117px] h-[58px] text-[#FFFFFF] font-Montserrat font-normal text-sm leading-7 tracking-[.2px] bg-[#23A6F0] '>
                                    Subscribe
                                </button>
                            </div>
                            <p className='font-Montserrat font-normal text-xs leading-7 tracking-[.2px] text-[#737373]'>Lore imp sum dolor Amit</p>
                        </div>
                    </div>

                </div>
            </div >


            <div className='flex flex-col bg-[#fafafa] text-center items-center'>
                <div className="wraper bg-[#fafafa] flex justify-center items-center lg:justify-start py-[25px] text-wrap">
                <p className="flex flex-col text-center font-extrabold items-center px-6 sm:px-8 lg:px-32 md:px-16">
                  
                    Made With Love By Akazbaba. 
                    <br /> All Rights Reserved by Akazbaba.
                   
                    {/* <p className="flex flex-col text-center items-center px-6 sm:px-8 lg:px-32 md:px-16"> */}
                    <a href="https://www.youtube.com/@akazbaba" target='_blank'>
                    <Image
                    src={logo}
                    alt='logo'
                    height={50}
                    width={50}
                    />
                    </a>
                </p>
                </div>
            </div>

        </div>

    )
}

export default Footer
