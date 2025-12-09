'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import { ApplicationRoutes } from '@/constants/ApplicationRoutes';

const AboutCTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#00528A] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00A8E1] rounded-full mix-blend-screen filter blur-3xl opacity-20"
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
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0BC5EA] rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00A8E1] to-[#0BC5EA] rounded-full mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
          >
            <FiMessageCircle className="text-4xl text-white" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Grow{' '}
            <span className="text-[#00A8E1]">Together</span>
          </motion.h2>

          {/* Body Text */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            You focus on building your product and expanding your market. Let us handle the questions, the technical issues, and the day-to-day care of your customers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={ApplicationRoutes.Contact}>
              <motion.button
                className="group relative px-10 py-5 bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-white font-bold text-lg rounded-xl shadow-2xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(0, 168, 225, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                  initial={false}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                />
                <span className="relative flex items-center gap-3">
                  Meet Your New Team
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>
            </Link>

            <Link href={ApplicationRoutes.Home}>
              <motion.button
                className="relative px-10 py-5 bg-transparent text-white font-bold text-lg rounded-xl border-2 border-white cursor-pointer overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10  group-hover:text-[#0A2540] transition-colors">
                  Learn More
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-16 pt-12 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-300 mb-6">Trusted by businesses worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {['24/7 Support', 'Dedicated Team', '99% Satisfaction'].map((badge, index) => (
                <motion.div
                  key={index}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: 'rgba(0, 168, 225, 0.3)',
                    boxShadow: '0 10px 30px rgba(0, 168, 225, 0.3)'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
