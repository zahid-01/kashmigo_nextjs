import React from "react";
import Image from "next/image";
import Navbar from "../navbar/navbar";
import Dal from "../../../public/assets/dal.png";

const TourPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className=" min-h-screen">
          <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-2">
              Vintage Double Decker Bus Tour & Dal lake Cruise
            </h1>
            <div className="flex items-center mb-4">
              <i className="fas fa-map-marker-alt text-gray-500 mr-2"></i>
              <span className="text-gray-500">Srinagar</span>
              <span className="ml-4 text-yellow-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i> (348 reviews)
              </span>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3">
                <Image src={Dal} alt="dal" />
                <div className="flex space-x-2 mt-4">
                  {[...Array(5)].map((_, idx) => (
                    <img
                      key={idx}
                      src={`https://placehold.co/100x100`}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-20 h-20 rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: "fa-check-circle",
                    title: "Free cancellation",
                    description:
                      "Cancel up to 24 hours in advance to receive a full refund",
                  },
                  {
                    icon: "fa-shield-alt",
                    title: "Health precautions",
                    description:
                      "Special health and safety measures apply. Learn more",
                  },
                  {
                    icon: "fa-mobile-alt",
                    title: "Mobile ticketing",
                    description: "Use your phone or print your voucher",
                  },
                  {
                    icon: "fa-clock",
                    title: "Duration 3.5 hours",
                    description: "Check availability to see starting times",
                  },
                  {
                    icon: "fa-bolt",
                    title: "Instant confirmation",
                    description: "Don't wait for the confirmation!",
                  },
                  {
                    icon: "fa-language",
                    title: "Live tour guide in English",
                    description: "English",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <i
                      className={`fas ${item.icon} text-green-500 text-xl mr-2`}
                    ></i>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description Section */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p>
                The Vintage Double Decker Bus Tour & Dal lake Cruise 5D4N is a
                5-day, 4-night tour package that provides travelers with a
                fun-filled and memorable experience in the stunning region of
                Kashmir, India. This tour package typically includes a mix of
                scenic sightseeing, cultural activities, and outdoor adventure.
                The itinerary is designed to give travelers a chance to explore
                the local culture, natural beauty, and vibrant history of
                Kashmir. Accommodation and meals are typically included in the
                package, along with transportation and guide services. This tour
                is suitable for those seeking a unique and enjoyable holiday
                experience in one of India’s most picturesque destinations.
                Activities may include visits to famous landmarks, boat rides on
                the stunning Dal Lake, trekking in the nearby hills, and much
                more.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 lg:pl-8 mt-[100px] ">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Booking</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Select Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {["Adults (18 yrs onwards)", "Children (5 yrs - 17 yrs)"].map(
              (label, idx) => (
                <div key={idx} className="mb-4">
                  <label className="block text-gray-700 mb-2">{label}</label>
                  <div className="flex items-center">
                    <button className="px-3 py-1 border rounded-l-lg">-</button>
                    <input
                      type="text"
                      defaultValue="1"
                      className="w-12 text-center border-t border-b"
                    />
                    <button className="px-3 py-1 border rounded-r-lg">+</button>
                  </div>
                </div>
              )
            )}
            <div className="text-2xl font-bold text-green-500 mb-4">
              444,78.90
            </div>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourPage;
