'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can you start?',
      answer: 'Depending on the complexity of training required, we can usually go live within 1–2 weeks of signing. We prioritize rapid onboarding while ensuring our team is fully prepared to represent your brand.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes! We can structure shifts to cover your customers in any time zone, day or night. Our global team ensures continuous coverage so your customers always get the help they need.'
    },
    {
      question: 'Is there a long-term contract?',
      answer: 'We offer flexible terms. You can choose month-to-month options or discounted annual partnerships. We believe in earning your business every single day, not locking you into rigid contracts.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We work with businesses across various industries including SaaS, e-commerce, healthcare, fintech, and more. Our adaptable approach allows us to quickly learn and represent any brand effectively.'
    },
    {
      question: 'How do you ensure quality?',
      answer: 'Quality is maintained through rigorous training, ongoing performance monitoring, regular feedback loops, and detailed reporting. You have full transparency into every interaction and metric.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00A8E1] to-[#0BC5EA] rounded-full mb-6"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FiHelpCircle className="text-3xl text-white" />
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
              Frequently Asked <span className="text-[#00A8E1]">Questions</span>
            </h2>
            <p className="text-lg text-[#4A5568]">
              Quick answers to common questions
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#F7FAFC] to-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/50 transition-colors"
                >
                  <span className="text-lg font-bold text-[#0A2540] pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      openIndex === index 
                        ? 'bg-gradient-to-br from-[#00A8E1] to-[#0BC5EA] text-white' 
                        : 'bg-gray-200 text-[#4A5568]'
                    } transition-colors`}>
                      <FiChevronDown />
                    </div>
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-[#4A5568] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <motion.div
            className="mt-12 text-center p-8 bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-white/90 mb-6">
              We are here to help! Contact us directly for personalized answers.
            </p>
            <motion.a
              href="#form"
              className="inline-block px-8 py-3 bg-white text-[#00A8E1] font-bold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
