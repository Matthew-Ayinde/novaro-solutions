'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiPhone, FiFileText, FiCheckCircle } from 'react-icons/fi';

const WhatHappensNext = () => {
  const steps = [
    {
      icon: FiSearch,
      title: 'Review',
      description: 'One of our solution specialists will review your business needs.',
      color: 'from-[#00A8E1] to-[#0BC5EA]'
    },
    {
      icon: FiPhone,
      title: 'Discovery Call',
      description: 'We will schedule a quick 15-minute call to discuss your pain points and goals.',
      color: 'from-[#0BC5EA] to-[#00A8E1]'
    },
    {
      icon: FiFileText,
      title: 'Custom Proposal',
      description: 'We will send you a tailored plan and pricing model that fits your budget.',
      color: 'from-[#00A8E1] to-[#0BC5EA]'
    },
    {
      icon: FiCheckCircle,
      title: 'Launch',
      description: 'Once approved, we begin the onboarding process immediately.',
      color: 'from-[#0BC5EA] to-[#00A8E1]'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#F7FAFC] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
            What to <span className="text-[#00A8E1]">Expect</span>
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            After You Contact Us
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#00A8E1] via-[#0BC5EA] to-[#00A8E1]" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`relative z-10 mx-auto w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mb-6 shadow-xl`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="text-3xl text-white" />
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#00A8E1] font-bold text-sm shadow-lg border-2 border-[#00A8E1]">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#4A5568] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-20 w-1 h-full bg-gradient-to-b from-[#00A8E1] to-[#0BC5EA]" />
                )}

                {/* Icon */}
                <motion.div
                  className={`relative z-10 flex-shrink-0 w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <step.icon className="text-3xl text-white" />
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#00A8E1] font-bold text-sm shadow-lg border-2 border-[#00A8E1]">
                    {index + 1}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-4">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Summary */}
          <motion.div
            className="mt-16 text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg text-[#0A2540] font-semibold mb-2">
              Average Time to Launch: <span className="text-[#00A8E1]">1-2 Weeks</span>
            </p>
            <p className="text-sm text-[#4A5568]">
              We move fast so you can start delivering exceptional support sooner
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;
