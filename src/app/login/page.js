"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginImage from "../../../public/assets/login.png"; // Your login illustration
import taj from "../../../public/assets/taj.png"; // Optional branding images
import peso from "../../../public/assets/peso.png"; // Optional branding images
import { BASE_URI } from "../web/beConfig";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";
import { useRouter } from "next/navigation";
axios.defaults.withCredentials = true;

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    axios({
      method: "POST",
      url: `${BASE_URI}/auth/login`,
      data: {
        email,
        password,
      },
    }).then(
      (res) => {
        localStorage.setItem("JWT", res.data.data.user.token);
        dispatch(loginActions.setUser(res.data.data.user));
        router.push("/");
      },
      () => {
        setError("Invalid credentials or server error.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={LoginImage}
          alt="Login Illustration"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          priority
        />
      </div>

      {/* Login Card */}
      <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 md:p-12 w-full max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold text-[#228B22] text-center mb-6">
          Welcome to Kashmi-Go
        </h1>

        {/* Error Message */}
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <form className="w-full" onSubmit={handleSubmit}>
          {/* Email Field */}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="mb-4 text-right">
            <Link
              href="/forgotPassword"
              className="text-sm text-green-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-lg transition-colors ${
                loading
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <Link href="/signup" className="text-green-500 font-bold">
              Register Now
            </Link>
          </p>
        </div>

        {/* Optional Branding Images */}
        <div className="flex justify-center gap-8 mt-8">
          <Image src={taj} alt="Taj" width={120} height={100} priority />
          <Image src={peso} alt="Peso" width={120} height={100} priority />
        </div>
      </div>
    </div>
  );
}
