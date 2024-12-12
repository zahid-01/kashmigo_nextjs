"use client";
import Image from "next/image";
import Mountain from "../../public/assets/mountains.png";
import Image1 from "../../public/assets/Image.png";
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
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URI } from "./web/beConfig";
import TourCards from "./components/TourCards";
import Link from "next/link";
import Gallery from "./components/Gallery";

export default function Home() {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${BASE_URI}/tours/package`,
    }).then(
      (res) => {
        setTours(res.data.data);
      },
      (err) => {}
    );
  }, []);

  return (
    <>
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
                  <FaLocationDot className="text-[#56C2C3] text-[18px] font-bold leading-[21.6px]" />
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
                  <MdOutlinePeopleAlt className="text-[#56C2C3] text-[18px] font-bold leading-[21.6px]" />
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
            <div className="relative mx-auto max-w-full lg:max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center">
                <Image
                  src={Mountain}
                  width={1170}
                  height={500}
                  alt="Mountain"
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute w-full max-w-[90%] lg:w-[1110px] mx-auto bottom-0 left-0 right-0 translate-y-1/2 bg-[#F9FDFF] p-4 sm:p-5 rounded-lg shadow-custom-green">
                <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 lg:gap-[70px] my-4">
                  <div className="w-full max-w-md lg:w-[464px]">
                    <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-left">
                      Gulmarg
                    </h1>
                    <p className="mt-4 lg:mt-8 text-gray-600 text-sm lg:text-base text-center lg:text-left">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-4">
                    <div className="col-span-2 h-[40px] w-full flex items-center justify-center gap-2 bg-white shadow-custom-light text-[#D176E0] rounded-lg font-mulish text-sm font-semibold">
                      <FaBusAlt />
                      Public Transportations
                    </div>
                    <div className="h-[40px] w-full flex items-center justify-center gap-2 bg-white shadow-custom-light text-[#7BBCB0] rounded-lg font-mulish text-sm font-semibold">
                      <Image
                        alt="Nature & Adventure"
                        height={20}
                        src={Nature}
                        width={20}
                        priority
                      />
                      Nature & Adventure
                    </div>
                    <div className="h-[40px] w-full flex items-center px-4 justify-center gap-2 bg-white shadow-custom-light text-[#E4B613] rounded-lg font-mulish text-sm font-semibold">
                      <BsTaxiFrontFill />
                      Private Transportations
                    </div>
                    <div className="h-[40px] w-full flex items-center px-4 justify-center gap-2 bg-white shadow-custom-light text-[#FE3131] rounded-lg font-mulish text-sm font-semibold">
                      <BiSolidBriefcase />
                      Business Tours
                    </div>
                    <div className="h-[40px] w-full flex items-center justify-center gap-2 bg-white shadow-custom-light text-[#5C9BDE] rounded-lg font-mulish text-sm font-semibold">
                      <Image
                        alt="Local Visit"
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
                  <Link href={`/tour/${tour.id}`} key={index} passHref>
                    <TourCards tour={tour} />
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <section className="relative h-auto md:h-[525px] flex items-center mx-auto bg-gradient-to-r from-purple-500 to-teal-500">
          <div className="absolute inset-0">
            <Image
              src={Full}
              alt="Background"
              height={590}
              className="opacity-50 object-cover w-full h-full"
              priority
            />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-8 gap-8 md:gap-[100px]">
            <div className="relative w-[200px] md:w-[250px] h-[200px] md:h-[247px] md:mr-40 ">
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
                className="absolute top-4 md:top-6 left-4 md:left-6 rounded-lg z-20"
                priority
              />
              <Image
                src={overlap3}
                alt="Tour"
                width={250}
                height={246.9}
                className="absolute top-8 md:top-12 left-8 md:left-12 rounded-lg z-30"
                priority
              />
            </div>
            <div className="flex flex-col text-center md:text-left items-center md:items-start text-white">
              <span className="bg-[#56C2C3] text-xs md:text-sm px-3 py-1 rounded-full font-bold">
                Trending Now
              </span>
              <h1 className="text-2xl md:text-4xl font-bold mt-4">
                Wildlife of Gulmarg
              </h1>
              <div className="text-gray-100 flex flex-col md:flex-row items-center md:justify-between mt-4 space-y-2 md:space-y-0">
                <span className="font-semibold">Gulmarg, Baramulla</span>
                <div className="flex items-center space-x-2">
                  <span className="text-[#FFA432]">★★★★★</span>
                  <span>4.9</span>
                  <span className="text-gray-200">(300 reviews)</span>
                </div>
              </div>
              <p className="mt-5 text-sm md:text-base text-center md:text-left leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                <br className="hidden md:block" />
                amet sint. Velit officia consequat duis enim velit mollit.
                <br className="hidden md:block" />
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="w-full md:w-[200px] h-[50px] bg-signup-gradient px-6 py-3 text-white font-bold rounded-full mt-8">
                Book Now
              </button>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="mt-12 bg-[#FEFCFB] max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-3xl font-bold mb-4">Trending Activities</h2>
              <p className="text-gray-600 mb-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.<br></br> Velit officia consequat duis enim velit
                mollit.
              </p>
            </div>
            <div className="flex items-center space-x-4 ">
              <IoChevronBackCircleOutline className="w-[50px] h-[50px] border-none rounded-full cursor-pointer transition duration-300 text-[#56C2C3]" />
              <IoChevronForwardCircleOutline className="w-[50px] h-[50px] cursor-pointer border-none text-white rounded-full bg-[#56C2C3] transition duration-300 border" />
            </div>
          </div>
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
                      <li>Duration: 2 hours</li>
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
            <Gallery />
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
