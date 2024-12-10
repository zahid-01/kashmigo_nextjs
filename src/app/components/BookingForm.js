import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URI } from "../web/beConfig";

const BookingForm = ({ tour }) => {
  const router = useRouter();

  const [startDate, setStartDate] = useState();
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [err, setErr] = useState("");

  const handleChangeNoOfPeople = (operator) => {
    if (operator === "+") {
      if (numberOfPeople >= 20)
        return setErr("A group can only have 20 max members");
      setNumberOfPeople((state) => state + 1);
    }
    if (operator === "-") {
      if (numberOfPeople <= 1)
        return setErr("A group can only have 1 minimum member1");
      setNumberOfPeople((state) => state - 1);
    }
  };

  const handleBooking = async () => {
    if (!startDate || !numberOfPeople) {
      return setErr("Provide all the required details");
    }

    const payload = {
      tourId: tour.id,
      date: startDate,
      numberOfPeople,
    };
    router.push(
      `/checkout?date=${startDate}&people=${numberOfPeople}&id=${tour.id}`
    );
    // router.push({
    //   pathname: "/checkout",
    //   // query: {
    //   //   tourId: tour.id,
    //   //   date: startDate,
    //   //   numberOfPeople,
    //   // },
    // });
  };

  // const handleBooking = () => {
  //   if (!startDate || !numberOfPeople) {
  //     return setErr("Provide all the required details");
  //   }

  //   console.log(startDate);
  //   console.log(numberOfPeople);
  //   router.push("/checkout");
  // };
  const totalPrice = numberOfPeople * tour.price;

  return (
    <div className="w-[470px] lg:pl-4 ">
      <div className="bg-[white] p-6 rounded-lg shadow-md">
        <h2 className="text-[36px] font-medium text-[#1C2B38] border-b mb-4">
          Booking
        </h2>
        <div className="mb-4">
          <label className="block text-black mb-2">Select Date</label>
          <input
            type="date"
            className="w-full p-2 border bg-[#D6D6D6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#808080] cursor-pointer"
            onChange={(e) => {
              if (new Date(Date.now()) > new Date(e.target.value))
                return setErr("Date cannot be earlier than today");
              setStartDate(e.target.value);
            }}
          />
        </div>
        {["Adults (3 yrs onwards)"].map((label, idx) => (
          <div key={idx} className="mb-4">
            <label className="block text-black  mb-2">{label}</label>
            <div className="flex items-center">
              <button
                className="px-3 py-2 border bg-[#D6D6D6] rounded-r-lg"
                onClick={() => {
                  handleChangeNoOfPeople("-");
                }}
              >
                <FiMinus />
              </button>
              <input
                type="number"
                className="w-12 text-center border-t border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                value={numberOfPeople}
                onChange={(e) => {
                  setNumberOfPeople(e.target.value);
                }}
              />
              <button
                className="px-3 py-2 border bg-[#D6D6D6] rounded-r-lg"
                onClick={() => {
                  handleChangeNoOfPeople("+");
                }}
              >
                <FiPlus />
              </button>
            </div>
          </div>
        ))}
        <div className="text-2xl font-bold text-[#56C2C3] mb-4">
          {/* &#8377; {tour.price} */}
          Total: &#8377; {totalPrice}
        </div>
        <button
          onClick={handleBooking}
          className="w-full h-[50px] bg-signup-gradient text-white py-2 text-[18px] font-bold rounded-lg tracking-[0.04em]"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
