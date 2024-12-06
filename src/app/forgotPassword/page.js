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
          Forgot Password
        </h1>
        <h2 className="text-lg font-normal text-[#6E7074] mb-6 text-center">
          Don’t worry, happens to all of us. Enter your email below to recover
          your password.
        </h2>

        {/* Password Reset Form */}
        <form className="w-full">
          {/* Email Address Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Send Instructions Button */}
          <div>
            <button
              type="submit"
              className="mt-8 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              Send Instructions
            </button>
          </div>
        </form>

        {/* Link to Sign In */}
        <div className="mt-6 text-center">
          <p className="text-lg font-medium">
            Back to{" "}
            <Link
              href="/login"
              className="text-green-500 font-bold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Branding Images */}
        <div className="flex justify-center gap-8 mt-16">
          <Image src={taj} alt="Taj" width={120} height={100} priority />
          <Image src={peso} alt="Peso" width={120} height={100} priority />
        </div>
      </div>
    </div>
  );
}
