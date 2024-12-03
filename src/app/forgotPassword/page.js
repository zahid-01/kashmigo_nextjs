'use client'
import Image from "next/image";
import Link from "next/link";
import LoginImage from "../../../public/assets/login.png";
import taj from "../../../public/assets/taj.png";
import peso from "../../../public/assets/peso.png";

export default function ForgotPasswordPage() {
  return (
    <div className="flex items-center justify-center bg-white  h-screen">
      <div className="flex flex-col md:flex-row mx-auto bg-white rounded-lg shadow-custom-green overflow-hidden">
        <div className="hidden md:flex items-center justify-center">
          <Image
            src={LoginImage}
            layout="intrinsic"
            alt="Login Illustration"
            width={576}
            height={662}
            priority
          />
        </div>

        <div className="w-full mx-auto md:w-1/2 flex flex-col items-center px-8 py-8 bg-[#F9F9F9]">
          <h1 className="text-5xl font-bold text-[#228B22] mb-6 text-center">Forgot Password</h1>
          <h2 className="text-lg font-[400] text-[#6E7074] mb-6 text-center">Don’t worry, happens to all of us. Enter your email below to recover your password</h2>
          <form className="w-full max-w-sm ">
          
            
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your email"
              />
            </div>

           
           


            

            
            <div>
              <button
                type="submit"
                className="mt-12 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
              >
                Send Instructions
              </button>
            </div>
          </form>

          
          <div className="mt-6">
            <p className="text-[18px] font-[400]">
              Back to{" "}
              <Link href="/login" className="text-[18px] font-bold text-[#56C2C3]">
                Sign In
              </Link>
            </p>
          </div>

          
          <div className="flex gap-[100px] mt-16">
            <Image
              src={taj}
              layout="intrinsic"
              alt="Taj"
              width={120}
              height={100}
              priority
            />
            <Image
              src={peso}
              layout="intrinsic"
              alt="Peso"
              width={120}
              height={100}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
