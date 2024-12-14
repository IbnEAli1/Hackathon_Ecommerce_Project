import React from "react";
import Image from "next/image";
import facebook from "@/images/facebook.png";
import insta from "@/images/instagram.png";
import twitter from "@/images/twitter.png";

const Footer = () => {
  return (
    <footer className="w-[1440px] h-[488px] absolute top-[5200px] bottom-[50px] left-[1px] border ">
      <div className="mx-auto px-6 py-10 bg-[#fafafa] w-[1440px] h-[142px]">
        {/* bandage bar */}
        <div className="flex flex-col  md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <h2 className="text-2xl font-bold text-[#252B42] ">Bandage</h2>
          <div className=" flex gap-6">
            <span>
              <Image
              src={facebook}
              alt="fb"
              height={20}
              width={20}/>
            </span>
            <span>
              <Image
              src={insta}
              alt="insta"
              height={20}
              width={20}/>
            </span>
            <span>
              <Image
              src={twitter}
              alt="tw"
              height={20}
              width={20}/>
            </span>
          </div>
        </div>
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-10 w-[1440px] h-[272px]">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-[#252B42] ">Company Info</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-[#737373] text-[14px]">About Us</a></li>
              <li><a href="#" className="text-[#737373] text-[14px]">Carrier</a></li>
              <li><a href="#" className="text-[#737373] text-[14px]">We are hiring</a></li>
              <li><a href="#" className="text-[#737373] text-[14px]">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-[#252B42] ">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-[#737373] text-[14px]">Privacy Policy</a></li>
              <li><a href="#" className="text-[#737373] text-[14px]">Terms of Service</a></li>
              <li><a href="#" className="text-[#737373] text-[14px]">Licenses</a></li>
              <li><a href="#" className="text-[#737373] text-[14px]">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-[#252B42] ">Features</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-[#737373] text-[14px]">Business Marketing</a></li>
              <li><a href="#" className="text-[#737373] text-[14px]">User Analytics</a></li>
              <li><a href="#" className="text-[#737373] text-[14px]">Live Chat</a></li>
              <li><a href="#" className="text-[#737373] text-[14px]">Unlimited Support</a></li>
            </ul>
          </div>
{/* Resource  */}
          <div>
            <h3 className="font-semibold text-[#252B42] ">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-[#737373] text-[14px]">IOS & Android</a></li>
              <li><a href="#" className="text-[#737373] text-[14px]">Watch a Demo</a></li>
              <li><a href="#" className="text-[#737373] text-[14px]">Customers</a></li>
              <li><a href="#" className="text-[#737373] text-[14px]">API</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-[#252B42] ">Get In Touch</h3>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-[#737373]">
                Lore ipsum dolor sit amet.
              </p>
            </form>
          </div>
        </div>
</div>
{/* last section  */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-[#737373]">
          Made With Love By Finland | All Rights Reserved By <a href="https://www.youtube.com/@akazbaba" target="_blank">AkazBaba-2024 </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
