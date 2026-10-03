import React from "react";
import Image from "next/image";
import NavLinks from "./NavLinks";

//   console.log(date);
const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full"
  });
  return (
    <header className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
        
         
            <div className="flex  gap-3 ml-64">
            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
              <Image
                src="/logo.webp"
                alt="Bangla News 24"
                className="w-10 h-10"
                height={50}
                width={50}
                priority
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-red-600">
                Bangla News 24
              </h1>

              <span className="text-xs text-neutral-500">{date}</span>
            </div>
          </div>
          

          {/* Authentication */}
          <div className="flex items-center gap-5">
            <button className="text-sm text-gray-700 hover:text-red-600">
              সাইন ইন
            </button>

            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
              সাইন আপ
            </button>
          </div>
        </div>
      </div>
      <NavLinks/>
    </header>
  );
};

export default Header;
