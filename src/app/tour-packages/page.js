"use client";
import Image from "next/image";
import AllTours from "../../../public/assets/Tour-Packages.png";
import rec from "../../../public/assets/Rectangle.png";
import { IoIosClock } from "react-icons/io";
import { PiCarProfileFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";

const TourPackage = () => {
  return (
    <div className=" ">
      <div className="relative m-0">
        <Image
          src={AllTours}
          alt="About Us"
          height={500}
          className="w-full object-cover"
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.05em] leading-tight my-12 mx-auto">
          Dive Into Thrilling Activities, Where Every Moment Becomes an
          <span className="text-[#228B22]"> Adventure.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-12 my-12 px-4 sm:px-6 lg:px-8">
        {Array(8)
          .fill(0)
          .map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative group">
                <Image
                  src={rec}
                  width={500}
                  height={300}
                  alt="Alaska"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Alaska: Westminster to Greenwich River Thames
                </h3>
                <ul className="mt-2 text-sm sm:text-base font-normal leading-[21.6px] text-[#2D2D2D] space-y-2">
                  <li className="flex items-center gap-2">
                    <IoIosClock className="justify-center " />
                    Duration: 2 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <PiCarProfileFill className="justify-center " />
                    Transport Facility
                  </li>
                  <li className="flex items-center gap-2">
                    <MdPeopleAlt className="justify-center " />
                    Family Plan
                  </li>
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm sm:text-base text-[#FFA432]">
                    ★★★★☆
                  </span>
                  <span className="text-[#56C2C3] font-bold mr-7">$35.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">584 reviews</span>
                  <span className="text-[#778088] font-bold">per person</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TourPackage;
