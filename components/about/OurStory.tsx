'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const OurStory = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00A8E1] to-[#0BC5EA] rounded-full mb-6"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FiHeart className="text-3xl text-white" />
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
              It's Not Just About Solving Tickets.{' '}
              <span className="text-[#00A8E1]">It's About Building Relationships.</span>
            </h2>
          </motion.div>

          {/* Story Content */}
          <motion.div
            className="space-y-6 text-lg text-[#4A5568] leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              In today's digital world, genuine human connection is becoming rare. Many businesses view customer support as a cost center—a box to be checked.
            </p>
            
            <motion.p
              className="text-xl font-semibold text-[#0A2540] py-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              We see it differently.
            </motion.p>

            <p>
              We founded Novaro Global Limited with a simple mission: to help businesses scale without losing their personal touch. We recognized that as companies grow, they often struggle to maintain the quality of support that made them successful in the first place.
            </p>

            <div className="bg-gradient-to-r from-[#F7FAFC] to-white p-8 rounded-2xl border-l-4 border-[#00A8E1] my-8">
              <p className="text-[#0A2540] font-medium">
                We exist to solve that problem. We aren't just an outsourcing vendor; we are a dedicated partner. We immerse ourselves in your brand culture so that when your customers talk to us, they feel like they are talking to you.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { number: '10+', label: 'Years Experience' },
                { number: '500+', label: 'Happy Clients' },
                { number: '1M+', label: 'Tickets Resolved' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100"
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 168, 225, 0.2)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold text-[#00A8E1] mb-2">{stat.number}</div>
                  <div className="text-[#4A5568] font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
