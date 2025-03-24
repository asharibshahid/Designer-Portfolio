"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="  relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden text-center px-6">
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto pt-8">
        {/* Designer Image */}
        <motion.div
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-500 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/img90.jpg"
            alt="Designer"
            className="w-full h-full object-cover "
          />
        </motion.div>

        {/* Animated Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Crafting <span className="text-red-500">Visual Stories</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Transforming ideas into stunning visuals that inspire and engage.
          Lets create something extraordinary together.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link
            href="/projects"
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all text-center"
          >
            View Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all text-center"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
