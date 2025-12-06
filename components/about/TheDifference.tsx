'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiX, FiCheck } from 'react-icons/fi';

const TheDifference = () => {
  const comparisons = [
    {
      traditional: 'Focus on speed and rushing calls',
      novaro: 'Focus on resolution and satisfaction'
    },
    {
      traditional: 'Robots reading rigid scripts',
      novaro: 'Humans having real conversations'
    },
    {
      traditional: '"Us vs. Them" mentality',
      novaro: '"Extension of your team" mentality'
    },
    {
      traditional: 'High turnover, low training',
      novaro: 'Skilled agents with deep product knowledge'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#00528A] text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-[#00A8E1] rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why We Are <span className="text-[#00A8E1]">Different</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From Traditional Call Centers
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Traditional Call Centers Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/10">
                <h3 className="text-2xl font-bold mb-2 text-gray-300">Traditional Call Centers</h3>
              </div>
              
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, borderColor: 'rgba(239, 68, 68, 0.5)' }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-1">
                        <FiX className="text-red-400" />
                      </div>
                      <p className="text-gray-300">{item.traditional}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Novaro Solutions Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] rounded-2xl p-6 mb-4 shadow-xl">
                <h3 className="text-2xl font-bold mb-2">Novaro Solutions</h3>
              </div>
              
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#00A8E1]/50"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      borderColor: 'rgba(0, 168, 225, 0.8)',
                      boxShadow: '0 10px 40px rgba(0, 168, 225, 0.3)'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#00A8E1] rounded-full flex items-center justify-center mt-1">
                        <FiCheck className="text-white font-bold" />
                      </div>
                      <p className="text-white font-medium">{item.novaro}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl text-gray-300 mb-6">
              The choice is clear. Experience the Novaro difference.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheDifference;
