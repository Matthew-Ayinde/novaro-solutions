'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMessageCircle, FiTool, FiThumbsUp, FiArrowRight } from 'react-icons/fi';
import { BsHeadset, BsChatDots } from 'react-icons/bs';
import Link from 'next/link';

const Homepage = () => {
  // Variants for staggered word animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as any,
      },
    },
  };

  const headlineText = "We Take Care of Your Customers,";
  const accentText = "So You Can Focus on Your Business";

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Homehero.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 via-[#0A2540]/80 to-[#00528A]/85" />
          
          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00A8E1] rounded-full mix-blend-screen filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0BC5EA] rounded-full mix-blend-screen filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated Headline with word-by-word reveal */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight perspective-1000"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {headlineText.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-3"
                  style={{ transformOrigin: 'bottom' }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {accentText.split(' ').map((word, index) => (
                <motion.span
                  key={index + 100}
                  variants={wordVariants}
                  className="inline-block mr-3 text-[#00A8E1]"
                  style={{ transformOrigin: 'bottom' }}
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0 0 20px rgba(0, 168, 225, 0.8)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Animated Sub-headline with character reveal */}
            <motion.p
              className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Professional, reliable, and scalable customer support solutions. From 24/7 phone answering to technical troubleshooting and back-office management—we are the extension of your team you've been looking for.
              </motion.span>
            </motion.p>

            {/* CTA Buttons with enhanced animations */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
            >
              <Link href="/contact">
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#00A8E1] to-[#0BC5EA] text-white font-semibold rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 168, 225, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    initial={false}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                  />
                  <span className="relative flex items-center gap-2">
                    Get a Free Quote
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              <Link href="#services">
                <motion.button
                  className="relative px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 group-hover:text-[#0A2540] transition-colors">
                    View Our Services
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Floating Icons with enhanced animations */}
            <motion.div
              className="mt-16 flex justify-center gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              {[BsHeadset, FiPhone, BsChatDots].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="relative p-4 bg-white/10 backdrop-blur-sm rounded-full"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    backgroundColor: "rgba(0, 168, 225, 0.3)",
                    transition: { duration: 0.5 }
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <Icon className="text-3xl text-[#00A8E1]" />
                  </motion.div>
                  
                  {/* Pulse ring effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#00A8E1]"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              More Than Just a Call Center.{' '}
              <span className="text-[#00A8E1]">We Are Your Brand Ambassadors.</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg text-[#4A5568] leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Great customer service is the difference between a one-time buyer and a lifelong fan. But managing inquiries, tickets, and technical issues can drain your internal resources.
              </p>
              <p>
                That's where we come in. We provide a fully managed, trained, and dedicated support team that integrates seamlessly with your business. We adopt your tone of voice, master your product knowledge, and treat your customers with the care they deserve.
              </p>
            </motion.div>

            {/* Feature Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { number: '24/7', label: 'Support Available' },
                { number: '99%', label: 'Customer Satisfaction' },
                { number: '5min', label: 'Avg Response Time' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gradient-to-br from-[#F7FAFC] to-white rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 168, 225, 0.2)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold text-[#00A8E1] mb-2">{stat.number}</div>
                  <div className="text-[#4A5568] font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW GRID */}
      <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-[#F7FAFC] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
              Comprehensive Support Solutions
            </h2>
            <p className="text-xl text-[#4A5568] max-w-2xl mx-auto">
              From customer care to technical support, we've got you covered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Service Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link href="/services/customer-support">
                <motion.div
                  className="group h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#00A8E1]"
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-[#00A8E1] to-[#0BC5EA] rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BsHeadset className="text-3xl text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-4 group-hover:text-[#00A8E1] transition-colors">
                    Customer Support
                  </h3>
                  <p className="text-[#4A5568] mb-4 leading-relaxed">
                    Friendly, reliable assistance across all channels. We handle inquiries and resolve complaints so your customers always feel heard.
                  </p>
                  <div className="flex items-center gap-3 text-[#4A5568] mb-6">
                    <FiPhone className="text-[#00A8E1]" />
                    <FiMail className="text-[#00A8E1]" />
                    <FiMessageCircle className="text-[#00A8E1]" />
                  </div>
                  <div className="flex items-center text-[#00A8E1] font-semibold group-hover:gap-3 gap-2 transition-all">
                    Read More <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/services/technical-support">
                <motion.div
                  className="group h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#00A8E1]"
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-[#00A8E1] to-[#0BC5EA] rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FiTool className="text-3xl text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-4 group-hover:text-[#00A8E1] transition-colors">
                    Technical Support
                  </h3>
                  <p className="text-[#4A5568] mb-4 leading-relaxed">
                    Step-by-step troubleshooting for your products. We resolve technical friction points quickly to keep your users confident and engaged.
                  </p>
                  <div className="flex items-center gap-3 text-[#4A5568] mb-6">
                    <span className="text-sm bg-[#F7FAFC] px-3 py-1 rounded-full">Troubleshooting</span>
                    <span className="text-sm bg-[#F7FAFC] px-3 py-1 rounded-full">24/7</span>
                  </div>
                  <div className="flex items-center text-[#00A8E1] font-semibold group-hover:gap-3 gap-2 transition-all">
                    Read More <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/services/social-media-care">
                <motion.div
                  className="group h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#00A8E1]"
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-[#00A8E1] to-[#0BC5EA] rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FiThumbsUp className="text-3xl text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-4 group-hover:text-[#00A8E1] transition-colors">
                    Social Media Customer Care
                  </h3>
                  <p className="text-[#4A5568] mb-4 leading-relaxed">
                    Protect your online reputation. We manage comments, DMs, and reviews across all major platforms to keep your community happy.
                  </p>
                  <div className="flex items-center gap-3 text-[#4A5568] mb-6">
                    <span className="text-sm bg-[#F7FAFC] px-3 py-1 rounded-full">All Platforms</span>
                    <span className="text-sm bg-[#F7FAFC] px-3 py-1 rounded-full">Real-time</span>
                  </div>
                  <div className="flex items-center text-[#00A8E1] font-semibold group-hover:gap-3 gap-2 transition-all">
                    Read More <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
