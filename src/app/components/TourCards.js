import Image from "next/image";
import Mountain from "../../../public/assets/mountains.png";

const TourCards = ({ tour }) => {
  console.log(tour);
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
          {tour.packageName}
        </h3>
        <ul className="mt-2 text-sm text-gray-600 space-y-1">
          <li>{tour.duration}</li>
        </ul>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-sm text-[#FFA432]">★★★★☆</span>
            <span className="text-sm text-gray-500 ml-2">
              {tour.numberOfReviews}
            </span>
          </div>

          <span className="text-[#56C2C3] font-bold">from $35.00</span>
        </div>
      </div>
    </div>
  );
};

export default TourCards;
