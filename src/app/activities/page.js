"use client";
import Image from "next/image";
import Link from "next/link";
import AllTours from "../../../public/assets/all-tours.png";
import Activity from "../components/Activity";

const Activities = () => {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-12  px-4 lg:py-12 sm:px-6 lg:px-8">
        <Activity />
      </div>
    </div>
  );
};

export default Activities;
