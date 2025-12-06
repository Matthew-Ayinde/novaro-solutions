'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye } from 'react-icons/fi';

const MissionVision = () => {
  const cards = [
    {
      icon: FiTarget,
      title: 'Our Mission',
      content: 'To provide seamless, high-quality support solutions that empower businesses to grow while ensuring every customer feels heard, valued, and respected.',
      gradient: 'from-[#00A8E1] to-[#0BC5EA]'
    },
    {
      icon: FiEye,
      title: 'Our Vision',
      content: 'To redefine the outsourcing industry by prioritizing quality over quantity, and human connection over robotic scripts.',
      gradient: 'from-[#0BC5EA] to-[#00A8E1]'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#F7FAFC] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="h-full bg-white rounded-2xl shadow-xl p-8 lg:p-10 border-2 border-transparent hover:border-[#00A8E1] transition-all duration-300"
                  whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0, 168, 225, 0.2)' }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-xl mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <card.icon className="text-3xl text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-[#0A2540] mb-4">
                    {card.title}
                  </h3>

                  {/* Content */}
                  <p className="text-lg text-[#4A5568] leading-relaxed">
                    {card.content}
                  </p>

                  {/* Decorative gradient line */}
                  <motion.div
                    className={`mt-6 h-1 bg-gradient-to-r ${card.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
