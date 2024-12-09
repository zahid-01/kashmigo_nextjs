const TermsAndConditionsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-center text-[#228B22] mb-8">
        Terms & Conditions
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <div className="overflow-y-auto text-gray-700 text-sm leading-7">
          <p className="mb-6">
            <strong>1. Booking & Payments:</strong> All bookings are confirmed
            only after the deposit amount is received. The balance payment must
            be completed prior to the tour start date.
          </p>
          <p className="mb-6">
            <strong>2. Cancellation Policy:</strong> Cancellations made more
            than 7 days prior to the departure date are eligible for a partial
            refund. No refunds are available for cancellations made within 7
            days of the departure date.
          </p>
          <p className="mb-6">
            <strong>3. Liability:</strong> We are not responsible for delays,
            interruptions, or cancellations caused by natural calamities,
            strikes, or other unforeseen circumstances.
          </p>
          <p className="mb-6">
            <strong>4. Code of Conduct:</strong> Guests are expected to behave
            respectfully with the locals and comply with regional guidelines.
            Any damages caused to property will be the sole responsibility of
            the guest.
          </p>
          <p className="mb-6">
            <strong>5. Self-Drive Cars:</strong> The renter is solely
            responsible for any damages to self-drive cars during the rental
            period. A valid driver's license and ID proof are mandatory for all
            self-drive rentals.
          </p>
          <p>
            By proceeding with the booking, you acknowledge that you have read
            and agree to these Terms & Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
