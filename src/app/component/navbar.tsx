import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-full shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 h-[72px] w-full">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="EduPress Text Logo"
            width={166}
            height={30}
            className="w-auto h-[70px]"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-black font-medium">
          <Link href="/" className="text-orange-500 hover:underline">
            Home
          </Link>

          <div className="relative group">
            <button className="hover:text-orange-500">Products ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded p-2 z-10">
              <Link href="/about" className="block px-4 py-1 hover:bg-gray-100">
                Beauty
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-1 hover:bg-gray-100"
              >
                Fragrance
              </Link>
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-black font-medium hover:text-orange-500"
          >
            Contact / Login
          </Link>
          <div className="flex items-center justify-center rounded-full border-[#F9550E] border-2 h-12 w-12">
            <FaSearch className="text-[#2099E2] cursor-pointer h-5 w-5" />
          </div>
        </div>

        <div className="md:hidden">
          <label htmlFor="mobile-menu" className="cursor-pointer">
            <FaBars className="h-6 w-6 text-orange-500" />
          </label>
        </div>
      </div>
      {/* mobile menu */}
      <input type="checkbox" id="mobile-menu" className="peer hidden" />
      <div className="peer-checked:flex hidden flex-col items-start gap-4 px-6 pb-4 bg-white shadow-md md:hidden">
        <Link href="/" className="text-orange-500 font-medium">
          Home
        </Link>

        <div className="font-medium">
          <span className="block">Products</span>
          <div className="ml-4">
            <Link
              href="/about"
              className="block text-sm text-gray-600 hover:text-orange-500"
            >
              Beauty
            </Link>
            <Link
              href="/contact"
              className="block text-sm text-gray-600 hover:text-orange-500"
            >
              Fragrance
            </Link>
          </div>
        </div>
        <Link href="/login" className="font-medium text-black">
          Contact / Login
        </Link>
        <div className="flex items-center justify-center rounded-full border-[#F9550E] border-2 h-12 w-12">
          <FaSearch className="text-[#2099E2] cursor-pointer h-5 w-5" />
        </div>
      </div>
    </header>
  );
}
