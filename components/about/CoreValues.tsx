'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiEye, FiTrendingUp, FiUsers } from 'react-icons/fi';

const CoreValues = () => {
  const values = [
    {
      icon: FiHeart,
      title: 'Empathy First',
      description: 'We believe that behind every ticket number, email, or chat log is a real person with a real problem. We approach every interaction with patience and understanding.',
      color: 'from-[#00A8E1] to-[#0BC5EA]'
    },
    {
      icon: FiEye,
      title: 'Radical Transparency',
      description: 'We operate as an open book. From our response times to our interaction logs, you have full visibility into how we are handling your customers. We are accountable for our results.',
      color: 'from-[#0BC5EA] to-[#00A8E1]'
    },
    {
      icon: FiTrendingUp,
      title: 'Continuous Improvement',
      description: '"Good enough" is not in our vocabulary. We are constantly training, upskilling, and refining our processes to ensure we are better today than we were yesterday.',
      color: 'from-[#00A8E1] to-[#0BC5EA]'
    },
    {
      icon: FiUsers,
      title: 'Brand Adaptability',
      description: 'We are chameleons. We don\'t force our style on you; we adopt yours. Whether your brand voice is professional and corporate or witty and casual, we mirror it perfectly.',
      color: 'from-[#0BC5EA] to-[#00A8E1]'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
            Our Core <span className="text-[#00A8E1]">Values</span>
          </h2>
          <p className="text-xl text-[#4A5568] max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-br from-[#F7FAFC] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Icon Container */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl mb-6 relative`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="text-3xl text-white relative z-10" />
                  
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl blur-md opacity-0 group-hover:opacity-50`}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4 group-hover:text-[#00A8E1] transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-[#4A5568] leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative corner accent */}
                <motion.div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${value.color} opacity-10 rounded-bl-full rounded-tr-2xl`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
