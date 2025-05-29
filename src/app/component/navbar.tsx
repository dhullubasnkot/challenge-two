"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 h-[72px] w-full">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="EduPress Logo"
            width={160}
            height={30}
            className="h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] w-auto"
          />
        </div>

        <nav className="flex items-center gap-4 text-sm sm:text-base md:text-lg font-medium">
          <Link href="/" className="text-orange-500 hover:underline">
            Home
          </Link>

          <div className="relative group">
            <button className="hover:text-orange-500">Products ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded p-2 z-10 w-40 text-sm">
              <Link
                href="/pages/beautyproducts"
                className="block px-4 py-1 hover:bg-gray-100"
              >
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
        </div>
      </div>
    </header>
  );
}
