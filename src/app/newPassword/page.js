"use client";
import Image from "next/image";
import Link from "next/link";
import LoginImage from "../../../public/assets/login.png"; // Your login illustration
import taj from "../../../public/assets/taj.png"; // Optional branding image
import peso from "../../../public/assets/peso.png"; // Optional branding image

export default function ForgotPasswordPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={LoginImage}
          alt="Forgot Password Illustration"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          priority
        />
      </div>

      {/* Forgot Password Card */}
      <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 md:p-12 w-full max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold text-[#228B22] text-center mb-6">
          Set New Password
        </h1>
        <h2 className="text-lg font-normal text-[#6E7074] mb-6 text-center">
          Your previous password has been reset. Please set a new password for
          your account.
        </h2>

        {/* Password Reset Form */}
        <form className="w-full">
          {/* New Password Field */}
          <div className="mb-4">
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter new password"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Continue Button */}
          <div>
            <button
              type="submit"
              className="mt-12 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              Continue
            </button>
          </div>
        </form>

        {/* Branding Images */}
        <div className="flex justify-center gap-8 mt-8">
          <Image src={taj} alt="Taj" width={120} height={100} priority />
          <Image src={peso} alt="Peso" width={120} height={100} priority />
        </div>
      </div>
    </div>
  );
}
