'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMessageCircle, FiTool, FiThumbsUp, FiShoppingCart, FiUsers, FiZap, FiArrowRight } from 'react-icons/fi';
import { BsHeadset, BsGraphUp } from 'react-icons/bs';

const ServicesGrid = () => {
  const services = [
    {
      icon: FiPhone,
      title: 'Customer Support',
      subtitle: 'Phone, Email & Chat',
      description: 'Friendly, reliable assistance across all channels. We handle inquiries and resolve complaints so your customers always feel heard.',
      color: 'from-blue-500 to-cyan-500',
      link: '#'
    },
    {
      icon: FiTool,
      title: 'Technical Support',
      subtitle: 'Expert Troubleshooting',
      description: 'Step-by-step troubleshooting for your products. We resolve technical friction points quickly to keep your users confident and engaged.',
      color: 'from-cyan-500 to-teal-500',
      link: '#'
    },
    {
      icon: FiThumbsUp,
      title: 'Social Media Customer Care',
      subtitle: 'Reputation Management',
      description: 'Protect your online reputation. We manage comments, DMs, and reviews across all major platforms to keep your community happy.',
      color: 'from-teal-500 to-emerald-500',
      link: '#'
    },
    {
      icon: BsHeadset,
      title: 'Help Desk & Ticket Management',
      subtitle: 'Organized Support',
      description: 'We bring order to chaos using tools like Zendesk and HubSpot. We ensure every ticket is tracked, prioritized, and resolved on time.',
      color: 'from-emerald-500 to-green-500',
      link: '#'
    },
    // {
    //   icon: FiUsers,
    //   title: 'Back-Office Support',
    //   subtitle: 'Behind-the-Scenes Excellence',
    //   description: 'Essential behind-the-scenes support. We handle data entry, order processing, refunds, and record updates to keep your operations smooth.',
    //   color: 'from-purple-500 to-pink-500',
    //   link: '#'
    // },
    {
      icon: BsGraphUp,
      title: 'Sales Support',
      subtitle: 'Revenue Generation',
      description: 'Turn inquiries into revenue. Our team guides customers through the buying process and assists with upsells to boost your conversions.',
      color: 'from-orange-500 to-red-500',
      link: '#'
    },
    {
      icon: FiMessageCircle,
      title: 'Live Chat & Website Support',
      subtitle: 'Real-Time Assistance',
      description: 'Real-time assistance that reduces abandoned carts. We answer questions instantly while customers are browsing your site.',
      color: 'from-indigo-500 to-purple-500',
      link: '#'
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00A8E1 1px, transparent 1px), linear-gradient(90deg, #00A8E1 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
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
              <FiZap className="text-[#00A8E1]" />
              <span className="text-sm font-semibold text-[#00A8E1]">Our Services</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2540] dark:text-white mb-6">
              Comprehensive Support{' '}
              <span className="bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-transparent bg-clip-text">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From customer inquiries to technical troubleshooting, we provide end-to-end support solutions tailored to your business needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Top Decorative Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl shadow-lg mb-6`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="text-3xl text-white" />
                    </motion.div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl font-bold text-[#0A2540] dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${service.color} text-transparent bg-clip-text mb-4`}>
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Read More Link */}
                    {/* <motion.a
                      href={service.link}
                      className="inline-flex items-center gap-2 text-[#00A8E1] font-semibold group-hover:gap-3 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Read More
                      <FiArrowRight className="text-lg" />
                    </motion.a> */}
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-tl ${service.color} rounded-tl-full`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Need a custom solution? We're flexible and can adapt to your unique requirements.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-[#00A8E1]/30 hover:shadow-[#00A8E1]/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Discuss Your Needs
              <FiArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
