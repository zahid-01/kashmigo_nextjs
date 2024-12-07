// pages/about.js
import Image from "next/image";
import About from "../../../public/assets/about.png";
import Shikara from "../../../public/assets/shikara.png";

const AboutPage = () => {
  return (
    <div className="">
      <div className="relative w-screen">
        <Image
          src={About}
          alt="About Us"
          height={500}
          className="w-full object-cover"
        />
      </div>

      <div className="flex p-4 mx-[160px] my-10 space-x-12">
        <div className="relative">
          <div className=" mb-12">
            <h2 className="text-[36px] font-medium leading-[43.2px]">
              Who <span className="text-[#56C2C3]">We Are?</span>
            </h2>
            <p>
              We’re all about creating unforgettable experiences for our <br />
              guests. Our journey began with a simple passion for
              <br /> exploring the beauty of the World. 
            </p>
          </div>
          <div className="">
            <h2 className="text-[36px] font-medium leading-[43.2px] ">
              Our <span className="text-[#56C2C3]">Mission</span>
            </h2>
            <p>
              We believe that travel is not just about visiting new places,
              <br /> but about immersing yourself in new cultures, connecting
              <br />
              with nature, and making memories that last a lifetime.
            </p>
          </div>
        </div>
        <div className="relaive mt-12">
          <Image src={Shikara} alt="Shikara" width={544} height={385} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
