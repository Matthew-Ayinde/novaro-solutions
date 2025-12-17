'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiMessageCircle, FiBriefcase, FiClock } from 'react-icons/fi';

const ContactMethods = () => {
  const methods = [
    {
      icon: FiBriefcase,
      title: 'Sales & New Partnerships',
      description: 'Looking to outsource your support? Let\'s chat about your requirements.',
      details: [
        { icon: FiMail, text: 'support@novarosolutions.com', link: 'mailto:support@novarosolutions.com' },
        { icon: FiPhone, text: '+(234) 802 573 3103', link: 'tel:+2348025733103' }
      ],
      gradient: 'from-[#00A8E1] to-[#0BC5EA]'
    },
    {
      icon: FiMessageCircle,
      title: 'General Enquiries',
      description: 'Have a general question about how we work?',
      details: [
        { icon: FiMail, text: 'support@novarosolutions.com', link: 'mailto:support@novarosolutions.com' },
        { icon: FiMessageCircle, text: 'Live Chat: 9 AM - 5 PM', link: '#' }
      ],
      gradient: 'from-[#0BC5EA] to-[#00A8E1]'
    },
    {
      icon: FiMapPin,
      title: 'Visit Our Office',
      description: 'Drop by and say hello!',
      details: [
        { icon: FiMapPin, text: '123 Business Park, Suite 400, City, Country', link: '#' },
        { icon: FiClock, text: 'Mon - Fri: 8:00 AM - 6:00 PM', link: null }
      ],
      gradient: 'from-[#00A8E1] to-[#0BC5EA]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F7FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-4">
            Get in <span className="text-[#00A8E1]">Touch</span>
          </h2>
          <p className="text-lg text-[#4A5568]">Choose the best way to reach us</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 border-2 border-transparent hover:border-[#00A8E1] transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-xl mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <method.icon className="text-3xl text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0A2540] mb-3 group-hover:text-[#00A8E1] transition-colors">
                  {method.title}
                </h3>

                {/* Description */}
                <p className="text-[#4A5568] mb-6 leading-relaxed">
                  {method.description}
                </p>

                {/* Contact Details */}
                <div className="space-y-3">
                  {method.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <detail.icon className="text-[#00A8E1] mt-1 flex-shrink-0" />
                      {detail.link && detail.link !== '#' ? (
                        <a
                          href={detail.link}
                          className="text-sm text-[#4A5568] hover:text-[#00A8E1] transition-colors break-all"
                        >
                          {detail.text}
                        </a>
                      ) : (
                        <span className="text-sm text-[#4A5568] break-all">
                          {detail.text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Decorative gradient line */}
                <motion.div
                  className={`mt-6 h-1 bg-gradient-to-r ${method.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
