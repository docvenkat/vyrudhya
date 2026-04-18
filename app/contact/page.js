"use client";

import Navbar from "../../components/Navbar";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
    } else {
      alert("Error sending message");
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="bg-[#f7f4ef] min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow w-full max-w-md space-y-4"
        >
          <h1 className="text-2xl font-bold text-center">Contact Us</h1>

          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 border rounded-lg"
            rows="4"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}