'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { BsChatQuote } from 'react-icons/bs';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Since hiring this team, our response times dropped from 24 hours to 10 minutes. Our customers have never been happier.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      rating: 5,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      quote: "They seamlessly integrated with our systems and truly became an extension of our team. The quality of support is outstanding.",
      author: "Michael Chen",
      role: "Operations Director, GrowthCo",
      rating: 5,
      color: 'from-cyan-500 to-teal-500'
    },
    {
      quote: "The data insights they provide have helped us improve our product significantly. It's not just support—it's strategic partnership.",
      author: "Emily Rodriguez",
      role: "Founder, InnovateLab",
      rating: 5,
      color: 'from-teal-500 to-emerald-500'
    }
  ];

  const trustLogos = [
    { name: 'Zendesk', width: 'w-32' },
    { name: 'HubSpot', width: 'w-32' },
    { name: 'Salesforce', width: 'w-36' },
    { name: 'Freshdesk', width: 'w-32' },
    { name: 'Intercom', width: 'w-32' }
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00A8E1]/5 rounded-full filter blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0BC5EA]/5 rounded-full filter blur-3xl transform -translate-y-1/2" />
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
              <FiStar className="text-[#00A8E1]" />
              <span className="text-sm font-semibold text-[#00A8E1]">Client Success Stories</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2540] dark:text-white mb-6">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-transparent bg-clip-text">
                Growing Brands
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Do not just take our word for it—hear what our clients have to say about their experience.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Quote Icon */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${testimonial.color} rounded-full opacity-10 flex items-center justify-center`}>
                    <BsChatQuote className="text-5xl text-white" />
                  </div>

                  <div className="relative z-10">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                        >
                          <FiStar className="text-yellow-500 fill-yellow-500 text-lg" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-bold text-[#0A2540] dark:text-white">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Signals - Tool Logos */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center mb-8">
              <p className="text-gray-500 dark:text-gray-400 uppercase tracking-wider text-sm font-semibold">
                Integrated with Industry-Leading Tools
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
              {trustLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className={`${logo.width} h-12 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <span className="text-white font-bold text-sm">{logo.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            className="mt-20 text-center p-12 bg-gradient-to-br from-[#0A2540] to-[#0d2d4a] rounded-3xl shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you deliver exceptional customer experiences.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-[#00A8E1]/40 hover:shadow-[#00A8E1]/60 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
