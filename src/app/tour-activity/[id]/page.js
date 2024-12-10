"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BASE_URI } from "../../web/beConfig";
import { useParams } from "next/navigation";
import { IoIosClock } from "react-icons/io";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import axios from "axios";
import BookingForm from "@/app/components/BookingForm";

const ActivityPage = () => {
  const params = useParams();
  console.log(params);
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState("");

  const fetchActivityData = async () => {
    axios({
      method: "GET",
      url: `${BASE_URI}/activities/single/${params.id}`,
    }).then(
      (res) => {
        console.log(res.data.data);
        setActivity(res.data.data);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching activity data:", error);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    fetchActivityData();
  }, []);

  const renderStars = (rating) => {
    const maxStars = 5;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = hasHalfStar ? filledStars + 1 : filledStars;

    return (
      <span className="flex items-center text-[#FFA432]">
        {Array.from({ length: filledStars }, (_, i) => (
          <FaStar key={`filled-${i}`} />
        ))}
        {hasHalfStar && <FaStarHalfAlt />}
        {Array.from({ length: maxStars - totalStars }, (_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </span>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!activity) {
    return <div>No activity data available.</div>;
  }

  const {
    activityName,
    pictures,
    description,
    duration,
    price,
    averageRating,
    numberOfReviews,
    activityType,
    activityLocation,
  } = activity;

  const location = JSON.parse(activityLocation);

  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden p-6">
        <div className="lg:flex lg:space-x-8">
          <div className="mb-6 lg:mb-0 w-full lg:w-1/2">
            <div className="space-y-4">
              {pictures.map((pic, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-60 h-40 relative rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src={pic}
                    alt={`Activity Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-800">{activityName}</h1>
            <p className="mt-2 text-lg text-gray-600">{activityType}</p>

            <div className="mt-4 flex items-center">
              {renderStars(averageRating)}
              <span className="ml-2 text-gray-500 text-sm">
                ({numberOfReviews} reviews)
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Description
              </h3>
              <p className="text-gray-600 mt-2">{description}</p>
            </div>

            <div className="mt-4 flex items-center text-gray-700">
              <IoIosClock className="mr-2" />
              <span>Duration: {duration}</span>
            </div>
            <div className="mt-2 text-xl font-semibold text-[#56C2C3]">
              ${price} <span className="text-sm text-gray-500">per person</span>
            </div>
            <div className="mt-5">
              <BookingForm tour={activity} />
            </div>
          </div>
        </div>

        {/* <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-signup-gradient text-white text-lg font-semibold rounded-lg ">
            Book Now
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ActivityPage;
