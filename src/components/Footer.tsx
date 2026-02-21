import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";

export default function Footer() {
  return (
    // <footer className="bg-slate-900  border-t border-white/10 text-center py-6">
    //   <p className="text-gray-500 text-sm">
    //     © {new Date().getFullYear()} Adwise Technology. All rights reserved.
    //   </p>
    // </footer>

    <section className={`flex justify-center items-center sm:py-16 py-6 flex-col`}>
      {/* <div className={`flex justify-center items-center md:flex-row flex-col mb-8 w-full`} >
        <div className="flex-1 flex flex-col justify-start mr-10">
          <Image src="/logo.png" alt="HooBank" width={124} height={20} />
          <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310px]`} >
            A smarter way to manage your institution — secure, scalable, and
            seamless.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.id}
              className="flex flex-col ss:my-0 my-4 mix-w-[150px"
            >
              <h4
                className={`font-poppins font-medium text-[18px] leading-[27px] text-white`}
              >
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          © {new Date().getFullYear()} Adwise Technology. All rights reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" className={index !== socialMedia.length - 1 ? "mr-6" : ""}>
              <Image src={social.icon} key={social.id} alt={social.id} width={21} height={21} className={`w-[21px] h-[21px] object-contain cursor-pointer ${ index !== socialMedia.length - 1 ? "mr-6" : "mr-0" }`}/>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
