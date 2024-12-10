const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-center text-[#228B22] mb-8">
        Privacy Policy
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <div className="text-gray-700 text-sm leading-7">
          <p className="mb-6">
            <strong>1. Information Collection:</strong> We collect personal
            information such as your name, email address, phone number, and
            payment details when you book a service with us. This information is
            used solely for processing your bookings and ensuring smooth
            communication.
          </p>
          <p className="mb-6">
            <strong>2. Use of Information:</strong> The information collected is
            used to confirm your bookings, provide customer support, and share
            updates or promotional offers. We do not sell, trade, or share your
            personal data with third parties without your consent.
          </p>
          <p className="mb-6">
            <strong>3. Data Security:</strong> We employ the latest security
            measures to protect your data from unauthorized access, alteration,
            or misuse. However, we cannot guarantee 100% security due to the
            nature of online transactions.
          </p>
          <p className="mb-6">
            <strong>4. Cookies:</strong> Our website uses cookies to enhance
            your browsing experience. Cookies help us analyze user behavior and
            optimize website functionality. You can disable cookies through your
            browser settings if you prefer.
          </p>
          <p className="mb-6">
            <strong>5. Third-Party Services:</strong> We may use third-party
            tools and services, such as payment gateways or analytics providers,
            which have their own privacy policies. We recommend reviewing their
            policies to understand how your data is handled.
          </p>
          <p className="mb-6">
            <strong>6. User Rights:</strong> You have the right to access,
            update, or delete your personal information. If you wish to exercise
            any of these rights, please contact us at{" "}
            <a
              href="mailto:support@kashmigo.com"
              className="text-[#56C2C3] underline"
            >
              support@kashmigo.com
            </a>
            .
          </p>
          <p>
            By using our services, you agree to this Privacy Policy. We reserve
            the right to update or modify this policy at any time. Please check
            this page periodically for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
