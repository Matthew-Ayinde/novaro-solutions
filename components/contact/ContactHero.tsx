'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiMessageCircle, FiArrowRight } from 'react-icons/fi';

const ContactHero = () => {
  const quickContactItems = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'support@novarosolutions.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+(234) 802 573 3103',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Remote & Global',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: FiClock,
      label: 'Response Time',
      value: 'Within 24 hours',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-24 pb-16 bg-gradient-to-br from-[#0A2540] via-[#0d2d4a] to-[#0A2540]">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00A8E1 1px, transparent 1px), linear-gradient(90deg, #00A8E1 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Static Floating Orbs - Removed infinite animations for performance */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#00A8E1] rounded-full filter blur-[100px] opacity-20" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0BC5EA] rounded-full filter blur-[120px] opacity-15" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-[#00A8E1] rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Available 24/7</span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Let's Start a{' '}
              <span className="bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-transparent bg-clip-text">
                Conversation
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to transform your customer experience? Our team is here to discuss your needs and create tailored solutions that drive real results.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.a
                href="#contact-form"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-[#00A8E1]/30 hover:shadow-[#00A8E1]/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send a Message
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              {/* <motion.a
                href="#contact-methods"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Options
              </motion.a> */}
            </motion.div>
          </div>

          {/* Right Content - Quick Contact Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {quickContactItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-lg`}>
                      <item.icon className="text-white text-xl" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">
                      {item.label}
                    </h3>
                    <p className="text-white font-semibold">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#wave-gradient)"/>
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#00A8E1"/>
              <stop offset="50%" stopColor="#0BC5EA"/>
              <stop offset="100%" stopColor="#00A8E1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ContactHero;
