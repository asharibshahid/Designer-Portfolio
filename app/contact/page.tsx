"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiSend, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto pt-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          Get in <span className="text-red-500">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                />
                <motion.div
                  className="absolute inset-0 border-2 border-red-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                />
                <motion.div
                  className="absolute inset-0 border-2 border-red-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
              >
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
                />
                <motion.div
                  className="absolute inset-0 border-2 border-red-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all flex items-center justify-center gap-2"
              >
                <FiSend className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-500 to-red-600 p-8 rounded-2xl shadow-xl text-white"
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-center gap-4">
                <FiMapPin className="w-6 h-6 text-red-200" />
                <div>
                  <p className="font-medium">Ponta D Agua, Praia</p>
                  <p className="text-sm text-red-100">Cape Verde</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <FiPhone className="w-6 h-6 text-red-200" />
                <div>
                  <p className="font-medium">983 12 32</p>
                  <p className="text-sm text-red-100">Mon - Fri, 9am - 5pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <FiMail className="w-6 h-6 text-red-200" />
                <div>
                  <p className="font-medium">creativevisionstudio23@gmail.com</p>
                  <p className="text-sm text-red-100">
                    gsdesign15@gmail.com
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4">
                <FiMail className="w-6 h-6 text-red-200" />
                <div>
                  <p className="font-medium">@gs.designers</p>
                  <p className="text-sm text-red-100">Follow us on Instagram</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
