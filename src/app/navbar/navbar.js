// app/navbar/navbar.js
export default function Navbar() {
  return (
    <nav className="relative bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-caveat-brush text-[28px] font-normal leading-[35.28px] ">
          KashmiGo
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#"
              className="font-poppins text-[16px] font-normal leading-6 text-[#000000] hover:text-[#228B22]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-poppins text-[16px] font-normal leading-6 text-[#000000] hover:text-[#228B22]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-poppins text-[16px] font-normal leading-6 text-[#000000] hover:text-[#228B22]"
            >
              Destination
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-poppins text-[16px] font-normal leading-6 text-[#000000] hover:text-[#228B22]"
            >
              Tour
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-poppins text-[16px] font-normal leading-6 text-[#000000] hover:text-[#228B22]"
            >
              Blog
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-[#228B22]  ">Login</button>
          <button className="px-4 py-2 text-white bg-signup-gradient rounded ">
            Signup
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-blue-600 focus:outline-none">
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
    </nav>
  );
}
