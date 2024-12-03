"use client";
import Image from "next/image";
import Link from "next/link";
import Mountain from "../../public/assets/mountains.png";
import Image1 from "../../public/assets/image.png";
import Nature from "../../public/assets/nature.png";
import Local from "../../public/assets/local.png";
import Full from "../../public/assets/full.png";
import overlap1 from "../../public/assets/overlap1.png";
import overlap2 from "../../public/assets/overlap2.png";
import overlap3 from "../../public/assets/overlap3.png";
import { FaBusAlt } from "react-icons/fa";
import { BsTaxiFrontFill } from "react-icons/bs";
import { BiSolidBriefcase } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import ContactForm from "./components/ContactForm";
import TourCards from "./components/TourCards";
import Navbar from "./navbar/navbar";
import { useEffect, useState } from "react";
import { BASE_URI } from "./web/beConfig";
import axios from "axios";

export default function Home() {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${BASE_URI}/tours/package`,
    }).then(
      (res) => {
        console.log(res.data.data);
        setTours(res.data.data);
      },
      (err) => {}
    );
  }, []);
  return (
    <>
      <Navbar />

      <div className="">
        <div className="">
          <div className="container p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h1 className="text-4xl text-[52px] font-bold leading-[76.8px] text-black ">
                  Wander Beyond Limits,
                  <br />
                  Unleash Your Next
                  <br />
                  <span className="text-[#228B22]">Great Adventure.</span>
                </h1>
                <p className="mt-4 text-[#000000 font-poppins text-[20px] font-normal leading-[40px] text-left">
                  A Team of experienced tourism professionals will <br />{" "}
                  provide you with the best advice and tips for your <br />{" "}
                  desire place.
                </p>
                <button className="mt-6 w-[178px] h-[60px] text-[#228B22] border border-[#228B22] text-[18px] font-bold leading-[21.6px] rounded">
                  Discover Now
                </button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <Image
                  alt="Traveler with suitcase"
                  className=" mx-auto w-auto h-auto"
                  layout="intrinsic"
                  height={400}
                  src={Image1}
                  width={400}
                  priority
                />
              </div>
            </div>
            <div className="mt-12 mx-24 p-4 bg-[#FFFFFF] rounded-lg flex flex-col md:flex-row items-center justify-between shadow-custom-light">
              <div className="flex flex-col items-start mb-4 md:mb-0">
                <i className="flex gap-2 fas fa-map-marker-alt text-[#56C2C3] font-bold">
                  <FaLocationDot className="text-[#56C2C3] font-alegreya-sans text-[18px] font-bold leading-[21.6px]" />
                  Location
                </i>
                <input
                  className="mt-2 ml-4 p-2 rounded w-full focus:outline-none"
                  placeholder="Search For A Destination"
                  type="text"
                />
              </div>
              <div className="w-[1px] h-7 bg-[#E8EAEB] mx-4"></div>

              <div className="flex flex-col items-start mb-4 md:mb-0">
                <i className="flex gap-2 fas fa-map-marker-alt text-[#56C2C3] font-bold">
                  <MdOutlinePeopleAlt className="text-[#56C2C3] font-alegreya-sans text-[18px] font-bold leading-[21.6px]" />
                  Guests
                </i>
                <input
                  className="mt-2 ml-4 p-2 rounded w-full focus:outline-none"
                  placeholder="How many Guests?"
                  type="text"
                />
              </div>
              <div className="w-[1px] h-7 bg-[#E8EAEB] mx-4"></div>
              <div className="flex flex-col items-start mb-4 md:mb-0">
                <i className="flex gap-2 fas fa-map-marker-alt text-[#56C2C3] font-bold">
                  <SlCalender className="text-[#56C2C3] font-alegreya-sans text-[18px] font-bold leading-[21.6px]" />
                  Date
                </i>
                <input
                  className="mt-2 ml-4 p-2 rounded w-full focus:outline-none"
                  placeholder="Pick a date"
                  type="text"
                />
              </div>
              <button className="px-6 py-3 bg-signup-gradient text-white font-bold rounded-full">
                Search
              </button>
            </div>
          </div>
          <section className="container mx-auto p-8">
            <h2 className="text-3xl font-bold text-center">
              Explore Popular Cities
            </h2>
            <p className="text-center text-[16px] text-[#778088] font-medium leading-[17.57px] mt-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia <br></br>consequat duis enim velit mollit
            </p>
            <div className="flex flex-wrap justify-center mt-6">
              {[
                "Srinagar",
                "Jammu",
                "Katra",
                "Gulmarg",
                "Pahalgam",
                "Sonamarg",
                "Doodhpathri",
                "Gurez",
              ].map((city) => (
                <button
                  className="m-2 px-4 py-2 bg-white border rounded-full text-green-500 font-bold"
                  key={city}
                >
                  {city}
                </button>
              ))}
            </div>
          </section>
          <div className=" min-h-screen py-10">
            <div className="relative mx-auto max-w-7xl">
              <div className="flex items-center justify-center">
                <Image
                  src={Mountain}
                  width={1170}
                  height={500}
                  alt="Mountain"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute h-[275px] w-[1110px] mx-auto bottom-0 left-0 right-0 translate-y-1/2 bg-[#F9FDFF]  p-5 rounded-lg shadow-custom-green">
                <div className="flex items-center justify-center my-8 gap-[70px]">
                  <div className="flex-row items w-[464px] h-[116px]">
                    <h1 className="text-4xl font-bold">Gulmarg</h1>
                    <p className="mt-8 text-gray-600">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                  </div>
                  <div className="mt-0 mr-11 grid grid-cols-2 gap-2">
                    <div className="col-span-2 h-[40px] w-[212px] flex items-center justify-center gap-[6px] bg-[#FFFFFF] shadow-custom-light text-[#D176E0]  rounded-[8px] font-mulish text-[14px] font-semibold leading-[17.57px]">
                      <span>
                        <FaBusAlt />
                      </span>
                      Public Transportations
                    </div>
                    <div className="bg-[#FFFFFF] h-[40px] w-[196px] shadow-custom-light text-[#7BBCB0] flex items-center justify-center rounded-[8px] font-mulish text-[14px] font-bold leading-[17.57px] gap-2">
                      <Image
                        alt="Nature & Adventure"
                        className=""
                        height={20}
                        src={Nature}
                        width={20}
                        priority
                      />
                      Nature & Adventure
                    </div>
                    <div className="bg-[#FFFFFF] h-[40px] w-[224px] shadow-custom-light text-[#E4B613] flex items-center justify-center gap-[6px] rounded-[8px] font-mulish text-[14px] font-semibold leading-[17.57px]">
                      <span>
                        <BsTaxiFrontFill />
                      </span>
                      Private Transportations
                    </div>
                    <div className="bg-[#FFFFFF] h-[40px] w-[160px] shadow-custom-light text-[#FE3131] flex items-center justify-center gap-[6px] rounded-[8px] font-mulish text-[14px] font-semibold leading-[17.57px]">
                      <span>
                        <BiSolidBriefcase />
                      </span>
                      Business Tours
                    </div>
                    <div className="bg-[#FFFFFF] h-[40px] w-[130px] shadow-custom-light text-[#5C9BDE] flex items-center justify-center rounded-[8px] font-mulish text-[14px] font-semibold leading-[17.57px] gap-2">
                      <Image
                        alt="Local Visit"
                        className="w-auto h-auto"
                        height={20}
                        src={Local}
                        width={20}
                        priority
                      />
                      Local Visit
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[200px] mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
              {tours.length > 0 &&
                tours.map((tour, index) => (
                  <Link href="/city-tour" key={index} passHref>
                    <TourCards tour={tour} />
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <section className="relative h-[525px] flex items-center mx-auto bg-gradient-to-r from-purple-500 to-teal-500">
          <div className="absolute inset-0">
            <Image
              src={Full}
              alt="Background"
              // width={1340}
              height={590}
              className="opacity-50"
              priority
            />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 gap-12">
            <div className=" w-[250px] h-[247px] mr-12">
              <Image
                src={overlap1}
                alt="Tour"
                width={250}
                height={246.9}
                className="absolute top-0 left-0 rounded-lg z-10"
                priority
              />
              <Image
                src={overlap2}
                alt="Tour"
                width={250}
                height={246.9}
                className="absolute top-6 left-6 rounded-lg z-20"
                priority
              />
              <Image
                src={overlap3}
                alt="Tour"
                width={250}
                height={246.9}
                className="absolute top-12 left-12 rounded-lg z-30"
                priority
              />
            </div>
            <div className="flex-row  ml-12 text-white">
              <span className="bg-[#56C2C3] text-sm px-3 py-1 rounded-full font-bold">
                Trending Now
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4">
                Wildlife of Gulmarg
              </h1>
              <div className="text-gray-100 flex items-center justify-between  mt-4">
                {/* <i className="fas fa-map-marker-alt text-yellow-400"></i> */}
                <span className="font-semibold">Gulmarg, Baramulla</span>
                <div>
                  <span className=" text-[#FFA432]">★★★★★</span>
                  <span>4.9</span>
                  <i className="fas fa-star text-yellow-400 mx-1"></i>
                  <span className="text-gray-200">(300 reviews)</span>
                </div>
              </div>
              <p className="mt-5">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                <br />
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation <br /> veniam consequat sunt nostrud amet.
              </p>
              <button className="w-[200px] h-[50px] bg-signup-gradient px-6 py-3 text-white font-bold rounded-full mt-8">
                Book Now
              </button>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="mt-12 bg-[#FEFCFB] max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative group">
                    <Image
                      src={Mountain}
                      width={500}
                      height={300}
                      alt="Alaska"
                      className="w-full h-40 object-cover transition-transform duration-1000 group-hover:scale-110"
                      priority
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Alaska: Westminster to Greenwich River Thames
                    </h3>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      <li>Duration: hours</li>
                    </ul>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-sm text-[#FFA432]">★★★★☆</span>
                        <span className="text-sm text-gray-500 ml-2">
                          584 reviews
                        </span>
                      </div>

                      <span className="text-[#56C2C3] font-bold">
                        from $35.00
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
        <div className="flex-col items-center bg-[#FEFCFB] justify-center mx-8 p-8 mt-12 gap-5">
          <div className="flex justify-between items-center mb-6 ">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                From The Gallery
              </h2>
              <p className="text-gray-600 mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
                <br /> Velit officia consequat duis enim velit mollit
              </p>
            </div>
            <button className="bg-signup-gradient text-white px-4 py-2 rounded-lg ">
              View All Images
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
            <Image
              src={overlap1}
              alt="A forest with tall trees and a path"
              width={270}
              height={320}
              className="rounded-lg "
            />
            <Image
              src={overlap1}
              alt="A lake with boats and mountains in the background"
              width={270}
              height={320}
              className="rounded-lg "
            />
            <Image
              src={overlap1}
              alt="Snow-covered mountains with clouds"
              width={270}
              height={320}
              className="rounded-lg "
            />
            <Image
              src={overlap1}
              alt="A green field with hills and a cloudy sky"
              width={270}
              height={320}
              className="rounded-lg "
            />
            <Image
              src={overlap1}
              alt="A river flowing through a forest"
              width={270}
              height={320}
              className="rounded-lg "
            />
            <Image
              src={overlap1}
              alt="A red bridge in a forest"
              width={270}
              height={320}
              className="rounded-lg "
            />
            <Image
              src={overlap1}
              alt="A sunset over a lake with trees"
              width={270}
              height={320}
              className="rounded-lg "
            />
            <Image
              src={overlap1}
              alt="A lake with mountains in the background during sunset"
              width={270}
              height={320}
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
