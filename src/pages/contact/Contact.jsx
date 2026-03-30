import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>

        {/* FORM */}
        <form
          action="https://formspree.io/f/xzzzbvnl"
          method="POST"
          className="flex flex-col gap-4"
        >
          {/* NAME */}
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-red-500"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-red-500"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="4"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-red-500 resize-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}

export default Contact;