'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHeadphones, FiUsers, FiTrendingUp } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#0A2540]/95 z-10" />
        {/* Placeholder for video - replace with actual video */}
        <div className="w-full h-full bg-gradient-to-br from-[#0A2540] via-[#0d2d4a] to-[#0A2540]">
          {/* Video element can be added here */}
          {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/videos/support-team.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00A8E1] rounded-full filter blur-[120px] opacity-20 z-0"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#0BC5EA] rounded-full filter blur-[130px] opacity-15 z-0"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Floating Icons */}
          <motion.div
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { icon: FiHeadphones, delay: 0 },
              { icon: FiUsers, delay: 0.1 },
              { icon: FiTrendingUp, delay: 0.2 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="w-16 h-16 bg-gradient-to-br from-[#00A8E1]/20 to-[#0BC5EA]/20 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "easeInOut"
                }}
              >
                <item.icon className="text-2xl text-[#00A8E1]" />
              </motion.div>
            ))}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We Take Care of Your{' '}
            <span className="bg-gradient-to-r from-[#00A8E1] via-[#0BC5EA] to-[#00A8E1] text-transparent bg-clip-text animate-gradient">
              Customers
            </span>
            ,<br />
            So You Can Focus on Your Business
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 text-center max-w-4xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional, reliable, and scalable customer support solutions. From 24/7 phone answering to technical troubleshooting and back-office management—we are the extension of your team you have been looking for.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-[#00A8E1]/40 hover:shadow-[#00A8E1]/60 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Get a Free Quote
              <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Services
            </motion.a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: '24/7', label: 'Availability' },
              { number: '10 Min', label: 'Avg Response Time' },
              { number: '98%', label: 'Customer Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-transparent bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-[#00A8E1] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
