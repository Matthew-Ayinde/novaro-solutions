'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiTrendingUp, FiDollarSign, FiBarChart2 } from 'react-icons/fi';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: FiLayers,
      title: 'Seamless Integration',
      description: 'We don\'t act like an external agency; we act like your internal department. We train on your specific tools and adopt your specific brand voice.',
      color: 'from-blue-500 to-cyan-500',
      stats: '100% Brand Aligned'
    },
    {
      icon: FiTrendingUp,
      title: 'Scalability',
      description: 'Whether you need 2 agents or 20, we scale our team up or down based on your seasonal demand and business growth.',
      color: 'from-cyan-500 to-teal-500',
      stats: 'Flexible Team Size'
    },
    {
      icon: FiDollarSign,
      title: 'Cost Efficiency',
      description: 'Save on the overheads of hiring, training, and equipping an in-house team. We provide top-tier talent at a fraction of the cost.',
      color: 'from-teal-500 to-emerald-500',
      stats: 'Save up to 60%'
    },
    {
      icon: FiBarChart2,
      title: 'Data-Driven Insights',
      description: 'We don\'t just answer phones; we provide reports on why customers are calling, helping you improve your business.',
      color: 'from-emerald-500 to-green-500',
      stats: 'Actionable Analytics'
    }
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00A8E1]/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0BC5EA]/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
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
              <span className="text-sm font-semibold text-[#00A8E1]">Our Advantage</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2540] dark:text-white mb-6">
              Why Partner{' '}
              <span className="bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-transparent bg-clip-text">
                With Us?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're not just another service provider—we're your strategic partner in delivering exceptional customer experiences.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Top Border Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${benefit.color} rounded-t-2xl`} />

                  <div className="relative z-10 flex flex-col md:flex-row gap-6">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl shadow-xl`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <benefit.icon className="text-4xl text-white" />
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-[#0A2540] dark:text-white">
                          {benefit.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {benefit.description}
                      </p>

                      {/* Stats Badge */}
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${benefit.color} px-4 py-2 rounded-full`}>
                        <span className="text-sm font-bold text-white">
                          {benefit.stats}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-tl ${benefit.color} rounded-tl-full`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats Bar */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 bg-gradient-to-r from-[#0A2540] to-[#0d2d4a] rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { value: '500+', label: 'Clients Served' },
              { value: '98%', label: 'Client Retention Rate' },
              { value: '2M+', label: 'Interactions Handled' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
