"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URI } from "../web/beConfig";

axios.defaults.withCredentials = true;

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [amountPaid, setAmountPaid] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const JWT = localStorage.getItem("JWT");
        const response = await axios.get(`${BASE_URI}/booking`, {
          headers: {
            Authorization: `Bearer ${JWT}`,
          },
        });
        setBookings(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        setError("Failed to load bookings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleApproveOrUpdate = (booking) => {
    setSelectedBooking(booking);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedBooking(null);
    setAmountPaid("");
  };

  const handleSubmit = async () => {
    if (amountPaid === "") {
      alert("Please enter a valid amount.");
      return;
    }

    try {
      const JWT = localStorage.getItem("JWT");
      const updatedStatus =
        parseFloat(amountPaid) === 0 ? "Cancelled" : "Approved";

      await axios.patch(
        `${BASE_URI}/booking/status/${selectedBooking.id}`,
        { frontPayment: parseFloat(amountPaid), status: updatedStatus },
        {
          headers: {
            Authorization: `Bearer ${JWT}`,
          },
        }
      );

      // Update the status and payment locally
      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === selectedBooking.id
            ? {
                ...booking,
                frontPayment: parseFloat(amountPaid),
                status: updatedStatus,
              }
            : booking
        )
      );

      alert(
        `Booking ${
          updatedStatus === "Cancelled" ? "cancelled" : "updated"
        } successfully!`
      );
      handleModalClose();
    } catch (error) {
      alert("Failed to process the booking. Please try again.");
    }
  };

  if (loading) {
    return <div className="text-center mt-4">Loading bookings...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Bookings</h1>
      {bookings.length === 0 ? (
        <div className="text-center text-gray-500">No bookings available.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-[#228B22]">
              <tr>
                <th className="px-4 py-2 text-left text-white">#</th>
                <th className="px-4 py-2 text-left text-white">Customer</th>
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
                <th className="px-4 py-2 text-left text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id} className="border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    {booking.user?.fullName || "N/A"}
                  </td>
                  <td className="px-4 py-2">{booking.bookingDate}</td>
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
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleApproveOrUpdate(booking)}
                      className="text-blue-500 hover:underline"
                    >
                      {booking.status === "Approved" ? "Update" : "Approve"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-xl font-bold mb-4">
              {selectedBooking?.status === "Approved"
                ? "Update Booking"
                : "Approve Booking"}
            </h2>
            <p className="mb-4">
              Enter the amount paid for the booking by{" "}
              <strong>{selectedBooking?.user?.fullName || "N/A"}</strong>.
            </p>
            <input
              type="number"
              className="w-full border rounded px-3 py-2 mb-4"
              placeholder="Enter amount paid"
              value={amountPaid}
              onChange={(e) => setAmountPaid(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
