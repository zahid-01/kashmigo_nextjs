"use client";
import Image from "next/image";
import Link from "next/link";
import TexiServices from "../../../public/assets/text-services.png";
import Frame from "../../../public/assets/Frame.png";
import Taxis from "../../../public/assets/taxis.png";
import Table from "../components/table";

const TaxiServices = () => {
  return (
    <div className=" ">
      <div className="relative m-0">
        <Image
          src={TexiServices}
          alt="About Us"
          height={500}
          className="w-full object-cover"
        />
      </div>

      <div className=" mx-auto">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.05em] leading-tight my-12 mx-[100px]">
          Ride in Comfort, Reach Your Destination, <br /> and Experience the
          <span className="text-[#228B22]"> Journey.</span>
        </h1>
      </div>
      <div className="flex justify-center my-10 ">
        <div className="pr-12">
          <h2 className="text-[36px] text-[#56C2C3] font-medium leading-[43.2px] mb-5">
            Kashmir Taxi Service
          </h2>
          <p className="text-[18px] font-normal leading-[21.6px]">
            With a wide range of vehicles, including sedans, SUVs, minibuses,
            hatchbacks, and more, KashmiGo offers <br /> the premier taxi
            service in the Kashmir region to cater to the diverse transportation
            needs of our clients. <br /> Whether you prefer a professional
            driver or want the freedom to drive yourself, we provide self-drive
            car <br /> options for a personalized experience. Our cars are in
            top-notch condition and are regularly maintained to <br /> ensure
            your comfort and safety. For instant taxi bookings or self-drive car
            options in Kashmir, KashmiGo is <br /> your trusted choice.
          </p>
          <Link
            href="https://wa.me/9622729348"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-signup-gradient rounded-lg text-white text-[18px] font-bold mt-5 px-3 py-3 ">
              Reserve a Ride Now!
            </button>
          </Link>
        </div>
        <div>
          <Image
            src={Frame}
            alt="About Us"
            width={400}
            height={381}
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="flex-col justify-center mx-12">
        <h2 className="text-[36px] text-[#56C2C3] font-medium leading-[43.2px] my-5">
          How to Book a Taxi Service in Kashmir?
        </h2>
        <p className="text-[18px] font-normal leading-[21.6px]">
          Booking a taxi with KashmiGo is simple and hassle-free. Just follow
          these easy steps and enjoy the convenience of online payment.
          <br /> You can reserve your taxi in Kashmir by calling or sending a
          WhatsApp message to +919999999999. KashmiGo is proud to be the most
          trusted and highly-rated taxi service provider in the region, with
          over 1,00 positive reviews on Google.
        </p>
      </div>
      <div className="relative my-5 mx-12">
        <Image src={Taxis} alt="About Us" height={517} className="w-full" />
      </div>
      <Table />
      <div className="mx-12">
        <p className="text-[#000000] text-[18px] font-normal leading-[21.6px] my-12 ">
          If you’re looking to travel off the beaten path and visit destinations
          like Baba Reshi Shrine, Shrunz Fall, and Drung Waterfall from Gulmarg,
          you’ll need to book a local taxi for transportation. To find out the
          taxi fares for these off-route journeys, as well as for Gulmarg Cable
          Car bookings, Gulmarg Cable Car fares, Gulmarg Skiing rates, and
          Gulmarg sightseeing rates, simply call +91 9999999999 for an instant
          quote.
        </p>
        <h2 className="text-[36px] font-medium leading-[43.2px] text-center">
          Self Drive Car in <span className="text-[#228B22]">Kashmir</span>
        </h2>
        <p className="text-[#000000] text-[18px] font-normal leading-[21.6px]  my-12 ">
          Absolutely! Now, for your Kashmir trip, you can rent a self-drive car
          without a driver for a truly private and flexible experience. In
          addition to offering vehicles for your leisure and privacy, we also
          provide driverless car rentals, ensuring complete independence during
          your journey. Our cars are thoroughly cleaned and sanitized after
          every rental, prioritizing your safety and comfort for a worry-free
          travel experience in Kashmir.
        </p>
      </div>
      <div className="mx-12 my-12">
        <h2 className="text-[36px] font-medium leading-[43.2px] text-center mb-8">
          Pre Book Your{" "}
          <span className="text-[#228B22]">
            Kashmir Tour Package , Cab Service , Self Drive
          </span>
        </h2>
        <h2 className="text-[36px] font-medium leading-[43.2px]">
          With <span className="text-[#56C2C3]">KashmiGo,</span> reservations
          for taxi services in Kashmir can be made in advance. You can simply
          make a reservation for your Kashmir cab by calling our reservation
          team at <span className="text-[#56C2C3]">+919999999999</span> 
        </h2>
      </div>
    </div>
  );
};

export default TaxiServices;
