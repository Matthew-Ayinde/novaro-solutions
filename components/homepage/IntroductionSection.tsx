'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiShield, FiZap } from 'react-icons/fi';

const IntroductionSection = () => {
  const features = [
    {
      icon: FiAward,
      title: 'Brand Ambassadors',
      description: 'We represent your brand with excellence'
    },
    {
      icon: FiHeart,
      title: 'Customer First',
      description: 'Every interaction creates lifelong fans'
    },
    {
      icon: FiShield,
      title: 'Trusted Partner',
      description: 'Reliable support you can count on'
    },
    {
      icon: FiZap,
      title: 'Quick Resolution',
      description: 'Fast, efficient problem solving'
    }
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#00A8E1]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-[#0BC5EA]/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00A8E1]/10 to-[#0BC5EA]/10 border border-[#00A8E1]/20 rounded-full px-6 py-2">
              <div className="w-2 h-2 bg-[#00A8E1] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#00A8E1]">Who We Are</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2540] dark:text-white text-center mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            More Than Just a Call Center.{' '}
            <span className="bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-transparent bg-clip-text">
              We Are Your Brand Ambassadors.
            </span>
          </motion.h2>

          {/* Body Text */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Great customer service is the difference between a one-time buyer and a lifelong fan. But managing inquiries, tickets, and technical issues can drain your internal resources.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-[#0A2540] dark:text-white">That is where we come in.</strong> We provide a fully managed, trained, and dedicated support team that integrates seamlessly with your business. We adopt your tone of voice, master your product knowledge, and treat your customers with the care they deserve.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-full p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A8E1]/0 to-[#0BC5EA]/0 group-hover:from-[#00A8E1]/5 group-hover:to-[#0BC5EA]/5 transition-all duration-300" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#00A8E1] to-[#0BC5EA] rounded-xl shadow-lg mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="text-2xl text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0A2540] dark:text-white mb-2">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#00A8E1]/10 to-transparent rounded-bl-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
