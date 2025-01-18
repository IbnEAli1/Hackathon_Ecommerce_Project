import BottomNav from '@/components/BottomNav'
import OurTeamCards from '@/components/OurTeamCards'

import Image from 'next/image'
import Link from 'next/link'

import gt from "@/app/assets/gt-icn arrow-right icn-xs.png"
import redLady from "@/app/assets/red-lady.png"

import c1 from "@/app/assets/b1.png"
import c2 from "@/app/assets/c2.png"
import c3 from "@/app/assets/c3.png"
import c4 from "@/app/assets/c4.png"


import teamUser1 from "@/app/assets/team-1-user-1.png"
import teamUser2 from "@/app/assets/team-1-user-2.png"
import teamUser3 from "@/app/assets/team-1-user-3.png"
import teamUser4 from "@/app/assets/team-1-user-4.jpg"
import teamUser5 from "@/app/assets/team-1-user-4.png"
import teamUser6 from "@/app/assets/team-1-user-6.png"
import teamUser7 from "@/app/assets/team-1-user-7.png"
import teamUser8 from "@/app/assets/team-1-user-8.png"
import teamUser9 from "@/app/assets/team-1-user-9.png"
import TrailCard from '@/components/TrailCard'
import Footer from '@/components/Footer'

function Team() {
    return (
        <div>
            <header className='bg-white'>
                <BottomNav linksNames={["product", "pricing", "contact",]} showLastSectionLinks={false} showMemberBtn={true} />
            </header>
            {/*  */}
            <div className="wraper py-[50px] flex justify-center items-center flex-col gap-4 bg-white ">
                <h5 className="h5 text-[#737373]">WHAT WE DO</h5>
                <h1 className="h1 text-[#252B42] text-center">Innovation tailored for you</h1>
                <div className="w-[134px] h-[44px] py-[10px] flex gap-[15px]">
                    <Link href="/" className="link text-[#252B42]">Home</Link>
                    <Image src={gt} alt='gt' width={9} height={16} />
                    <Link href="/team" className="link text-[#252B42]">Team</Link>
                </div>
            </div>
            {/*  */}
            <main>
                <div className='wraper flex justify-center gap-3 flex-wrap items-center'>
                    <div className='relative flex-grow min-w-[414px] h-[530px] flex justify-center items-center'>
                        <Image
                            src={redLady}
                            alt='red'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                        />
                    </div>
                    <div className="flex-grow min-w-[414px] flex flex-col gap-3">
                        <div className="flex flex-grow gap-3">
                            <div className='h-[260px] flex-grow relative'>
                                <Image
                                    src={c1}
                                    alt='c1'
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center'
                                />
                            </div>
                            <div className='h-[260px] flex-grow relative'>
                                <Image
                                    src={c2}
                                    alt='c2'
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center'
                                />
                            </div>
                        </div>
                        <div className="flex flex-grow gap-3">
                            <div className='h-[260px] flex-grow relative'>
                                <Image
                                    src={c3}
                                    alt='c3'
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center'
                                />
                            </div>
                            <div className='h-[260px] flex-grow relative'>
                                <Image
                                    src={c4}
                                    alt='c4'
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center'
                                />
                            </div>
                        </div>

                    </div>

                </div>
                {/*  */}
                <div className="wraper flex flex-col justify-center items-center gap-28 py-28">
                    <h2 className="h2 text-[#252B42]">Meet Our Team</h2>
                    <div className='lg:grid lg:grid-cols-3 lg:gap-[30px] flex justify-center flex-wrap items-center my-28 gap-[30px]'>
                        <OurTeamCards imagePath={teamUser1} />
                        <OurTeamCards imagePath={teamUser2} />
                        <OurTeamCards imagePath={teamUser3} />

                        <OurTeamCards imagePath={teamUser4} />
                        <OurTeamCards imagePath={teamUser5} />
                        <OurTeamCards imagePath={teamUser6} />

                        <OurTeamCards imagePath={teamUser7} />
                        <OurTeamCards imagePath={teamUser8} />
                        <OurTeamCards imagePath={teamUser9} />
                    </div>
                </div>
                {/*  */}
                <TrailCard />
            </main>
            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default Team
