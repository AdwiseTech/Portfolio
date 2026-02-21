import styles from "@/styles/style";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* Left Content */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className=" flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src="/discount.svg" alt="discount" width={32} height={32} className="object-contain" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white font-semibold">Free Demo</span>{" "}
            Available for Schools & Colleges
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Adwise Technology{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/*  <GetStarted /> */}
          </div>
        </div>
             <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Adwise Technology specializes in building intelligent ERP systems,
          attendance management software, timetable automation, and enterprise
          web & mobile applications for educational institutions and businesses.
          We deliver secure, scalable, and user-friendly digital solutions.
        </p> 
      </div>

      <div className="flex-1 flex justify-center items-center relative md:my-0 my-10">
        <div className="relative w-full h-[450px] sm:h-[550px]">
          <Image
            src="/technology_rbg.png"
            alt="billings"
            fill
            priority
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      {/* <div className={`flex justify-center items-center ss:hidden`}>
        {/* <GetStarted /> 
      </div> */}
    </section>
  );
}
