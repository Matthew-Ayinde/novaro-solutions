'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiBookOpen } from 'react-icons/fi';

const OurTeam = () => {
  const features = [
    {
      icon: FiUsers,
      title: 'High Emotional Intelligence',
      description: 'We recruit individuals who naturally connect with people'
    },
    {
      icon: FiBookOpen,
      title: 'Rigorous Training',
      description: 'Deep product knowledge and company culture immersion'
    },
    {
      icon: FiAward,
      title: 'Problem-Solving Skills',
      description: 'Agents equipped to handle complex customer scenarios'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#F7FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
            Meet the <span className="text-[#00A8E1]">Experts</span>
          </h2>
          <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
            Our strength lies in our people. We don't just hire anyone with a headset.
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Image Section */}
            <div className="relative h-80 bg-gradient-to-br from-[#0A2540] to-[#00528A]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200')] bg-cover bg-center opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center text-white"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <FiUsers className="text-7xl mx-auto mb-4 text-[#00A8E1]" />
                  <p className="text-2xl font-semibold">Passionate. Professional. People-First.</p>
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <motion.p
                className="text-lg text-[#4A5568] leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Before an agent ever touches your account, they undergo a rigorous onboarding process to understand your products, your software, and your company ethos.
              </motion.p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-[#F7FAFC] to-white rounded-xl border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: '0 20px 40px rgba(0, 168, 225, 0.2)',
                      borderColor: 'rgba(0, 168, 225, 0.5)'
                    }}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#00A8E1] to-[#0BC5EA] rounded-xl mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="text-2xl text-white" />
                    </motion.div>
                    <h4 className="text-lg font-bold text-[#0A2540] mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[#4A5568]">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Stats Section */}
              <motion.div
                className="mt-10 pt-8 border-t border-gray-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {[
                    { value: '100%', label: 'Vetted Agents' },
                    { value: '40hrs', label: 'Min Training' },
                    { value: '98%', label: 'Retention Rate' },
                    { value: '24/7', label: 'Support Ready' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-3xl font-bold text-[#00A8E1]">{stat.value}</div>
                      <div className="text-sm text-[#4A5568] mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
