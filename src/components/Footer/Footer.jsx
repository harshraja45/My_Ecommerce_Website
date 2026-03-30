import React from "react";

function Footer() {
  return (
    <footer className="bg-[#14191d] text-gray-300 py-6 mt-10">

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* LEFT */}
        <h2 className="text-white font-semibold text-lg">
          HR-Shop
        </h2>

        {/* CENTER */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} HR-Shop. All rights reserved.
        </p>

        {/* RIGHT */}
        <p className="text-sm text-gray-500">
          Made By Harsh Raja
        </p>

      </div>

    </footer>
  );
}

export default Footer;