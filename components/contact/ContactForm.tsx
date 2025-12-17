'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiBriefcase, FiPhone, FiMessageSquare, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    ticketVolume: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        interest: '',
        ticketVolume: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const interests = [
    'Customer Support (Phone/Email/Chat)',
    'Technical Support',
    'Social Media Management',
    'Back-Office Support',
    'Sales Support',
    'Live Chat & Website Support',
    'Other / Custom Package'
  ];

  const ticketVolumes = [
    '<500',
    '500-2000',
    '2000+',
    'Unsure'
  ];

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] dark:text-white mb-4">
              Send Us a <span className="text-[#00A8E1]">Message</span>
            </h2>
            <p className="text-lg text-[#4A5568] dark:text-gray-300">
              Please fill out the form below, and a member of our team will get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-[#F7FAFC] to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-[#0A2540] dark:text-gray-200 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00A8E1]" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#00A8E1] focus:outline-none transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Business Email */}
              <div>
                <label className="block text-sm font-semibold text-[#0A2540] dark:text-gray-200 mb-2">
                  Business Email *
                </label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00A8E1]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#00A8E1] focus:outline-none transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-400"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-semibold text-[#0A2540] dark:text-gray-200 mb-2">
                  Company Name *
                </label>
                <div className="relative">
                  <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00A8E1]" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#00A8E1] focus:outline-none transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-400"
                    placeholder="Your Company Inc."
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-[#0A2540] dark:text-gray-200 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00A8E1]" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#00A8E1] focus:outline-none transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-400"
                    placeholder="+(234) 802 573 3103"
                  />
                </div>
              </div>

              {/* Interest Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-[#0A2540] dark:text-gray-200 mb-2">
                  I am interested in *
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#00A8E1] focus:outline-none transition-colors"
                >
                  <option value="">Select a service...</option>
                  {interests.map((interest, index) => (
                    <option key={index} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
              </div>

              {/* Ticket Volume */}
              <div>
                <label className="block text-sm font-semibold text-[#0A2540] dark:text-gray-200 mb-2">
                  Estimated Monthly Ticket Volume
                </label>
                <select
                  name="ticketVolume"
                  value={formData.ticketVolume}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#00A8E1] focus:outline-none transition-colors"
                >
                  <option value="">Select volume...</option>
                  {ticketVolumes.map((volume, index) => (
                    <option key={index} value={volume}>
                      {volume}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-[#0A2540] dark:text-gray-200 mb-2">
                Message / Specific Requirements *
              </label>
              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-[#00A8E1]" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#00A8E1] focus:outline-none transition-colors resize-none placeholder:text-gray-400 dark:placeholder:text-gray-400"
                  placeholder="Tell us about your requirements..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full mt-8 px-8 py-4 bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-white font-bold text-lg rounded-xl shadow-lg overflow-hidden ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              whileHover={!isSubmitting ? { 
                scale: 1.02, 
                boxShadow: "0 20px 40px rgba(0, 168, 225, 0.4)" 
              } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              <span className="relative flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Request Consultation
                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </span>
            </motion.button>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <FiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-green-700 dark:text-green-400">Message Sent Successfully!</p>
                  <p className="text-sm text-green-600 dark:text-green-300 mt-1">
                    Thank you for contacting us. We've sent a confirmation email to your inbox and our team will get back to you within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-xl flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <FiAlertCircle className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-red-700 dark:text-red-400">Error Sending Message</p>
                  <p className="text-sm text-red-600 dark:text-red-300 mt-1">
                    {errorMessage}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Privacy Note */}
            <p className="text-xs text-[#4A5568] dark:text-gray-400 text-center mt-4">
              By submitting this form, you agree to our privacy policy. We respect your data and will never share it with third parties.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
