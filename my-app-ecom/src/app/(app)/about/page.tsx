import BottomNav from '@/components/BottomNav'
import OurTeamCards from '@/components/OurTeamCards'
import aboutusimg from '@/app/assets/technology 1.png'
import Image from 'next/image'

import videoCard from "@/app/assets/Video card.png"
import teamUser1 from "@/app/assets/team-1-user-1.png"
import teamUser2 from "@/app/assets/team-1-user-2.png"
import teamUser3 from "@/app/assets/team-1-user-3.png"
import LogoCard from '@/components/logCard'
import Footer from '@/components/Footer'

import blueLady from "@/app/assets/blue-lady.png"

function About() {
  return (
    <div>
      <header>
        <BottomNav linksNames={["product", "pricing", "contact",]} showLastSectionLinks={false} showMemberBtn={true} />
      </header>
      <main>
        {/*  */}
        <div className='wraper py-28  flex flex-wrap md:flex-nowrap justify-center gap-[30px] relative'>
          <div className=' flex flex-col items-center justify-center gap-10 py-12 sm:hidden flex-grow'>
            <h1 className="h1 text-[#252B42]">ABOUT US</h1>
            <h4 className='h4 text-[#737373] text-center text-wrap'>
              We know how large
              objects will act, but things
              on a small scale just do
              not act that way.
            </h4>
            <button className='w-[195px] h-[52px] btn-text text-white rounded-[5px] bg-[#23A6F0]'>Get Quote Now</button>
          </div>
          {/*  */}


          <div className="flex-grow h-[320px] gap-[35px] sm:flex flex-col hidden items-center">
            <h5 className='h5 text-[#252B42]'>ABOUT COMPANY</h5>
            <h1 className="h1 text-[#252B42]">ABOUT US</h1>
            <h4 className='h4 text-[#737373] text-wrap'>We know how large objects will act,
              but things on a small scale</h4>
            <button className='w-[195px] h-[52px] btn-text text-white rounded-[5px] bg-[#23A6F0]'>Get Quote Now</button>
          </div>

          <div className="flex-grow  sm:basis-1/2  h-[440px] items-center relative">
            <Image
              src={aboutusimg}
              alt='about-us-image'

              layout="fill"
              objectFit='cover'
              objectPosition='center'
              className='rounded-[9px]'

            />
          </div>

        </div>

        {/*  */}
        <div className="wraper  flex justify-center items-center">
          <div className="flex flex-col items-center  lg:flex-row gap-[60px] lg:px-6 ">
            <div className="flex-grow flex gap-6 items-center flex-wrap">
              <p className='para text-[#E74040] '>Problems trying</p>
              <h3 className="h3 text-[#252B42] ">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
            </div>
            <div className="flex-grow">
              <p className="para text-[#737373] " >Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="wraper flex  gap-[30px] items-center py-20 justify-center flex-wrap ">
          <div className=" h-[104px]  flex-grow flex flex-col items-center justify-between  ">
            <h1 className='h1 text-black '>15k</h1>
            <p className='h5 text-[#737373]'>Happy Customers</p>
          </div>

          <div className="h-[104px]  flex-grow flex flex-col items-center justify-between ">
            <h1 className='h1 text-black '>150k</h1>
            <p className='h5 text-[#737373]'>Monthly Visitors</p>
          </div>

          <div className="h-[104px]  flex-grow flex flex-col items-center justify-between ">
            <h1 className='h1 text-black '>15</h1>
            <p className='h5 text-[#737373]'>Countries  Worldwide</p>
          </div>

          <div className="h-[104px] flex-grow flex flex-col items-center justify-between ">
            <h1 className='h1 text-black '>100+</h1>
            <p className='h5 text-[#737373]'>Countries  Worldwide</p>
          </div>
        </div>

        {/*  */}
        <div className="wraper flex justify-center items-center ">
          <div className="flex justify-center items-center py-28">
            <div className="rounded-[20px] relative ">
              <Image
                src={videoCard}
                alt='video'
                layout=''
                objectFit='cover'
                objectPosition='center'

              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="wraper py-28 gap-28 flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center gap-4 text-center ">
            <h2 className='h2 text-[#252B42] '>Meet Our Team</h2>
            <p className='para text-[#737373]'>
              Problems trying to resolve the conflict between
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="flex  gap-[30px] justify-center flex-wrap">

            <OurTeamCards imagePath={teamUser1} />
            <OurTeamCards imagePath={teamUser2} />
            <OurTeamCards imagePath={teamUser3} />
          </div>

        </div>
        {/*  */}
        <div className='bg-[#fafafa]'>
          <div className="wraper my-20 gap-6  bg-[#fafafa] flex justify-center items-center">
            <div className="w-[854px] h-[120px] flex flex-col justify-between items-center text-center ">
              <h2 className="h2 text-[#252B42]">Big Companies Are Here</h2>
              <p className='para text-[#737373] text-wrap'>
                Problems trying to resolve the conflict between
                the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
          <LogoCard />
          <div className='flex  justify-center items-center wraper flex-wrap lg:flex-nowrap  mt-20 bg-[#2A7CC7]' >
            <div className=' flex-grow flex-col text-center justify-center items-center py-28  text-white  bg-[#2A7CC7] text-wrap px-10'>
              <h5 className="h5 my-6">WORK WITH US</h5>
              <h2 className="h2 my-6 text-wrap">Now Let’s grow Yours</h2>
              <p className="para my-7">
                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
              </p>
            </div>
            <div className='relative flex-grow h-[640p] w-[590px] hidden md:flex'>
              <Image src={blueLady} alt='blue' layout='responsive' objectFit='contain' objectPosition='center' />
            </div>

          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default About
