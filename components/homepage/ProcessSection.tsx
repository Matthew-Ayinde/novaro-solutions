'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiUsers, FiCheckCircle } from 'react-icons/fi';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: FiSearch,
      title: 'Discovery',
      description: 'We consult with you to understand your products, your brand voice, and your specific pain points.',
      details: [
        'Brand voice analysis',
        'Product deep-dive',
        'Pain point identification',
        'Goal setting'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      icon: FiUsers,
      title: 'Onboarding & Training',
      description: 'We build a knowledge base and train our agents to become experts on your business.',
      details: [
        'Custom knowledge base',
        'Agent training program',
        'Tool integration',
        'Quality assurance setup'
      ],
      color: 'from-cyan-500 to-teal-500'
    },
    {
      number: '03',
      icon: FiCheckCircle,
      title: 'Go Live',
      description: 'We switch on the lines and start delighting your customers immediately, while you track our performance.',
      details: [
        'Seamless launch',
        'Real-time monitoring',
        'Performance tracking',
        'Continuous optimization'
      ],
      color: 'from-teal-500 to-emerald-500'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #00A8E1 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00A8E1]/10 to-[#0BC5EA]/10 border border-[#00A8E1]/20 rounded-full px-6 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-[#00A8E1] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#00A8E1]">How It Works</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2540] dark:text-white mb-6">
              Getting Started is{' '}
              <span className="bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-transparent bg-clip-text">
                Simple
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From first contact to full operation, we make the onboarding process smooth and efficient.
            </p>
          </motion.div>

          {/* Timeline - Desktop */}
          <div className="hidden lg:block relative mb-20">
            {/* Connection Line */}
            <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 opacity-20" />
            
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Step Number Badge */}
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900`}>
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className="mt-16 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{ y: -10 }}
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <step.icon className="text-2xl text-white" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#0A2540] dark:text-white text-center mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                        >
                          <div className={`w-5 h-5 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <FiCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-sm">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline - Mobile/Tablet */}
          <div className="lg:hidden space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex gap-6">
                  {/* Left: Number Badge */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </motion.div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-xl">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg items-center justify-center mb-4`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon className="text-xl text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0A2540] dark:text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                          <div className={`w-4 h-4 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <FiCheckCircle className="text-white text-xs" />
                          </div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="ml-10 h-8 w-0.5 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-700" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-[#00A8E1]/40 hover:shadow-[#00A8E1]/60 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Journey Today
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
