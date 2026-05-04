"use client";

import Navbar from "../../components/Navbar";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
    age: "3-4 years",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
        age: "3-4 years",
      });
    } else {
      alert("Error sending message");
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f7f4ef] px-4 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* ✅ FORM FIRST ON MOBILE */}
          <div className="order-1 md:order-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg space-y-4"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-center">
                Get the Right Book for Your Child
              </h2>

              {success && (
                <p className="text-green-600 text-center">
                  ✅ Message sent successfully!
                </p>
              )}

              <input
                type="text"
                placeholder="Parent Name"
                value={form.name}
                required
                className="w-full p-3 border rounded-lg"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Email (for recommendations)"
                value={form.email}
                required
                className="w-full p-3 border rounded-lg"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              {/* AGE */}
              <select
                value={form.age}
                className="w-full p-3 border rounded-lg"
                onChange={(e) =>
                  setForm({ ...form, age: e.target.value })
                }
              >
                <option>2-3 years</option>
                <option>3-4 years</option>
                <option>4-5 years</option>
                <option>5-6 years</option>
              </select>

              {/* SUBJECT */}
              <select
                value={form.subject}
                className="w-full p-3 border rounded-lg"
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
              >
                <option>General Inquiry</option>
                <option>Book Recommendation</option>
                <option>Order Issue</option>
                <option>Bulk Purchase</option>
              </select>

              <textarea
                placeholder="Tell us about your child (optional)"
                value={form.message}
                rows="4"
                className="w-full p-3 border rounded-lg"
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg text-white font-semibold ${
                  loading
                    ? "bg-gray-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Sending..." : "Get Recommendation"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                We don’t spam. Only helpful recommendations.
              </p>
            </form>
          </div>

          {/* ✅ CONTENT */}
          <div className="order-2 md:order-1 space-y-6">

            <div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Help Your Child Enjoy Learning 📚
              </h1>
              <p className="text-gray-600 mt-2">
                Tell us your child’s age and we’ll recommend the perfect book.
              </p>
            </div>

            {/* TRUST */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="font-semibold mb-2">⭐ Trusted by Parents</p>
              <p className="text-sm text-gray-600">
                “My child actually enjoys learning now!”
              </p>
              <p className="text-sm text-gray-600">
                “Finally, books that make sense to kids.”
              </p>
              <p className="text-sm text-gray-600">
                “Saw improvement in just a few days.”
              </p>
            </div>

            {/* BENEFITS */}
            <div className="bg-white p-5 rounded-xl shadow-sm space-y-2">
              <p className="font-semibold">Why parents choose us:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✔ Age-appropriate learning</li>
                <li>✔ Simple & engaging content</li>
                <li>✔ Builds strong fundamentals</li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="font-semibold">📞 Need quick help?</p>
              <p className="text-sm text-gray-600">
                We usually respond within a few hours.
              </p>

              <a
                href="https://wa.me/919133233330?text=Hi%20Vyrudhya%2C%20I%20need%20help%20choosing%20a%20book"
                target="_blank"
                className="inline-block mt-3 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}