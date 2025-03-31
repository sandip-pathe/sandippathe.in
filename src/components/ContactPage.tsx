"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Anton } from "next/font/google";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa6";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = "service_1t6q9ru";
    const templateId = "template_fav6aws";
    const userId = "JK9YEN_0ZSu1hYcxz";

    try {
      await emailjs.send(serviceId, templateId, formData, userId);
      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  };

  return (
    <div className="bg-[#F9F7F1] flex flex-col items-center p-8 max-w-[90%] mx-auto">
      <div className="flex max-h-[9vh] my-10">
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl uppercase text-[#242021] font-extrabold ${anton.className}`}
        >
          Contact
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="flex flex-col gap-6 w-full lg:w-1/2 flex-grow">
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-[#1b3652] mb-4">
              Mentorship & Partnerships
            </h2>
            <p className="text-gray-700">
              I'm always open to connecting with like-minded innovators,
              founders, and mentors. Let's talk about ideas and collaboration!
            </p>
          </motion.div>

          <motion.div
            className="bg-[#1b3652] text-white text-center py-6 rounded-xl shadow-lg flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-2">☕ Coffee Chat</h2>
            <p className="text-gray-300">
              Great ideas start with conversations — let's connect!
            </p>
            <button
              className="mt-4 bg-white text-[#1b3652] px-6 py-2 rounded-lg hover:bg-gray-200 transition"
              onClick={() =>
                window.open("https://calendly.com/sandippathe9689", "_blank")
              }
            >
              Schedule a Chat
            </button>
          </motion.div>
        </div>

        <motion.form
          className="bg-white shadow-lg rounded-xl p-6 w-full lg:w-1/2 flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-lg font-bold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3652]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3652]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-bold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b3652]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1b3652] text-white py-2 rounded-lg hover:bg-[#2a4a72] transition"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <div className="absolute top-20 right-20 text-green-600 font-bold text-center animate-fade-out bg-white p-2 rounded-lg shadow-lg">
              ✅ Message sent successfully!
            </div>
          )}
        </motion.form>
      </div>

      <style jsx>{`
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        .animate-fade-out {
          animation: fadeOut 5s ease-in-out forwards;
        }
      `}</style>

      <a
        href="https://wa.me/918767394523?text=Hi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row mt-12 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={30} className="inline-block mr-2" />
        <p className="text-md text-white font-semibold">Chat on WhatsApp</p>
      </a>
    </div>
  );
};

export default ContactPage;
