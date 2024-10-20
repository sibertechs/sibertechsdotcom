import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import software from "../../Images/software.jpg";
import mobile1 from "../../Images/mobile1.jpg";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.success);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        // alert(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("");
    }
  };

  return (
    <>
      <Navbar />
      <section className="relative py-24 bg-gray-100">
        {/* Top Section with Background Image */}
        <div className="relative w-full h-96">
          <img
            src={software}
            alt="Background"
            className="absolute inset-0 object-cover w-full h-full brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-70"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
            <h2 className="mb-6 text-5xl font-extrabold text-white md:text-6xl">
              Get In Touch
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-white md:text-xl">
              We’re here to assist you with any inquiries or support. Fill out
              the form below and we’ll get back to you as soon as possible.
            </p>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="container px-6 mx-auto mt-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form Section */}
            <div className="w-full max-w-xl p-8 mx-auto bg-white border border-gray-300 rounded-lg shadow-lg">
              <h4 className="mb-4 text-base font-medium text-blue-600">
                Contact Us
              </h4>
              <h2 className="mb-6 text-3xl font-semibold text-gray-900">
                Reach Out To Us
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 text-gray-700 placeholder-gray-400 transition-transform transform border border-gray-300 rounded-lg shadow-md h-14 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:scale-105"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 text-gray-700 placeholder-gray-400 transition-transform transform border border-gray-300 rounded-lg shadow-md h-14 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:scale-105"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 text-gray-700 placeholder-gray-400 transition-transform transform border border-gray-300 rounded-lg shadow-md h-14 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:scale-105"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-48 px-4 py-3 text-gray-700 placeholder-gray-400 transition-transform transform border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:scale-105"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full h-12 text-base font-semibold text-center text-white transition-colors bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Information Section */}
            <div className="w-full max-w-lg p-8 mx-auto bg-white border border-gray-300 rounded-lg shadow-lg">
              <h4 className="mb-4 text-base font-medium text-blue-600">
                Our Location
              </h4>
              <h2 className="mb-6 text-3xl font-semibold text-gray-900">
                Find Us Here
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Our office is located in the heart of the city. Visit us to
                discuss your project or simply drop by to say hello!
              </p>
              <div className="flex flex-col mb-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <MdLocationOn className="text-2xl text-blue-600" />
                  <p className="text-lg text-gray-600">
                    Navrongo, Upper East Region, Ghana
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <MdEmail className="text-2xl text-blue-600" />
                  <p className="text-lg text-gray-600">
                    Email: sibertechs@gmail.com
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <MdPhone className="text-2xl text-blue-600" />
                  <p className="text-lg text-gray-600">
                    Phone: +233 548 529 284
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center w-full h-64 overflow-hidden bg-gray-100 rounded-lg">
                <img
                  src={mobile1}
                  className="object-cover w-full h-full"
                  alt="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
