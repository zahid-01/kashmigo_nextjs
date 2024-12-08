"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import SignupBg from "../../../public/assets/login.png";
import taj from "../../../public/assets/taj.png";
import peso from "../../../public/assets/peso.png";
import { BASE_URI } from "../web/beConfig";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    axios({
      method: "POST",
      url: `${BASE_URI}/auth/signUp`,
      data: formData,
    }).then(
      (res) => {
        setSuccessMessage("Account created successfully! You can now log in.");
      },
      (error) => {
        setErrorMessage(error.response.data.message || "Something went wrong!");
      }
    );
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0">
        <Image
          src={SignupBg}
          alt="Travel Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          priority
        />
      </div>

      <div className="relative z-10 bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        <h1 className="text-3xl font-extrabold text-green-600 text-center">
          Welcome to Kashmi-Go
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Create an account and start your adventure today.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-all shadow-lg font-bold"
          >
            Create Account
          </button>
        </form>

        {errorMessage && (
          <p className="mt-4 text-center text-sm text-red-600">
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p className="mt-4 text-center text-sm text-green-600">
            {successMessage}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-green-500 font-bold">
            Sign In
          </Link>
        </p>

        <div className="flex justify-center gap-8 mt-4">
          <Image src={taj} alt="Taj" width={120} height={100} priority />
          <Image src={peso} alt="Peso" width={120} height={100} priority />
        </div>
      </div>
    </div>
  );
}
