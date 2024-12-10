"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URI } from "../web/beConfig";

axios.defaults.withCredentials = true;

export default function UserBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    try {
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      return new Intl.DateTimeFormat("en-GB", options).format(
        new Date(dateString)
      );
    } catch (err) {
      return "Invalid Date";
    }
  };

  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        const JWT = localStorage.getItem("JWT");
        const response = await axios.get(`${BASE_URI}/booking/myBookings`, {
          headers: {
            Authorization: `Bearer ${JWT}`,
          },
        });
        setBookings(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        setError("Failed to load your bookings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserBookings();
  }, []);

  if (loading) {
    return <div className="text-center mt-4">Loading your bookings...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
      {bookings.length === 0 ? (
        <div className="text-center text-gray-500">You have no bookings.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-[#228B22]">
              <tr>
                <th className="px-4 py-2 text-left text-white">#</th>
                <th className="px-4 py-2 text-left text-white">Date</th>
                <th className="px-4 py-2 text-left text-white">Package</th>
                <th className="px-4 py-2 text-left text-white">
                  Transaction ID
                </th>
                <th className="px-4 py-2 text-left text-white">Total Price</th>
                <th className="px-4 py-2 text-left text-white">Amount Paid</th>
                <th className="px-4 py-2 text-left text-white">
                  Pending Amount
                </th>
                <th className="px-4 py-2 text-left text-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id} className="border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    {formatDate(booking.bookingDate)}
                  </td>
                  <td className="px-4 py-2">
                    {booking.travelPackage?.packageName || "N/A"}
                  </td>
                  <td className="px-4 py-2">{booking.transactionId}</td>
                  <td className="px-4 py-2">₹{booking.totalPrice}</td>
                  <td className="px-4 py-2">₹{booking.frontPayment}</td>
                  <td className="px-4 py-2">₹{booking.pendingBalance}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 text-sm rounded ${
                        booking.status === "Approved"
                          ? "bg-green-100 text-green-600"
                          : booking.status === "Cancelled"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
