'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/85 to-[#00528A]/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            We Are the{' '}
            <span className="text-[#00A8E1]">Human Voice</span>{' '}
            Behind Your Brand
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Bridging the gap between growing businesses and their customers through empathy, expertise, and efficiency.
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            className="mt-12 flex justify-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-20 h-1 bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] rounded-full" />
            <div className="w-20 h-1 bg-gradient-to-r from-[#0BC5EA] to-[#00A8E1] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
