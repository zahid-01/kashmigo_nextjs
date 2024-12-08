"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { loginActions } from "../store/loginSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(loginActions.logout());
    router.push("/login");
  };

  return (
    <nav className="relative bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          className="font-caveat-brush text-[28px] font-normal leading-[35.28px]"
          href="/"
        >
          Kashmi-Go
        </Link>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="/tour-packages"
              className="text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
            >
              Kashmir Tour Packages
            </a>
          </li>
          <li>
            <a
              href="/taxi-services"
              className="text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
            >
              Taxi Services
            </a>
          </li>
          <li>
            <a
              href="/activities"
              className="text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
            >
              Activities
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
            >
              About us
            </a>
          </li>
        </ul>

        <div className="hidden md:flex space-x-4">
          {user ? (
            <>
              <span className="px-4 py-2 text-[#228B22] font-semibold">
                {user.fullName}
              </span>
              <button
                className="px-4 py-2 text-white bg-red-500 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="px-4 py-2 text-[#228B22]" href="/login">
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 text-white bg-signup-gradient rounded"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-green-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 px-4 py-2">
            <li>
              <a
                href="#"
                className="block text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
              >
                Kashmir Tour Packages
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
              >
                Taxi Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
              >
                Activities
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
              >
                About us
              </a>
            </li>
            {user && user.fullName ? (
              <>
                <li className="text-[#228B22] font-semibold">
                  {user.fullName}
                </li>
                <li>
                  <button
                    className="block w-full px-4 py-2 text-white bg-red-500 rounded"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="block text-[#228B22] px-4 py-2"
                    href="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="block px-4 py-2 text-white bg-signup-gradient rounded"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
