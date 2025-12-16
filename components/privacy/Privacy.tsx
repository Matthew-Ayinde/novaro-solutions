'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiEye, FiAlertCircle, FiCheckCircle, FiMail } from 'react-icons/fi';

const Privacy = () => {
  const sections = [
    {
      icon: FiAlertCircle,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you use our services or contact us, we may collect personal information including your name, email address, phone number, company name, and any other information you provide to us voluntarily.'
        },
        {
          subtitle: 'Service Usage Data',
          text: 'We collect information about how you use our services, including call recordings (with consent), chat transcripts, support tickets, and interaction history to improve service quality and training.'
        },
        {
          subtitle: 'Technical Information',
          text: 'We automatically collect certain technical information such as IP addresses, browser type, device information, and usage patterns through cookies and similar technologies.'
        }
      ]
    },
    {
      icon: FiEye,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'We use your information to provide, maintain, and improve our customer service solutions, respond to inquiries, and fulfill our contractual obligations.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your contact information to send service updates, respond to inquiries, provide customer support, and share important notices about our services.'
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We analyze usage data to improve our services, train our staff, optimize customer interactions, and develop new features that benefit our clients.'
        },
        {
          subtitle: 'Legal Compliance',
          text: 'We process your information to comply with legal obligations, enforce our terms, protect our rights, and respond to lawful requests from authorities.'
        }
      ]
    },
    {
      icon: FiLock,
      title: 'Data Security',
      content: [
        {
          subtitle: 'Protection Measures',
          text: 'We implement industry-standard security measures including encryption, secure data storage, access controls, and regular security audits to protect your information from unauthorized access, disclosure, or destruction.'
        },
        {
          subtitle: 'Employee Training',
          text: 'All our team members undergo comprehensive training on data protection and confidentiality. They are bound by strict confidentiality agreements and follow our security protocols.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. After this period, we securely delete or anonymize your data.'
        }
      ]
    },
    {
      icon: FiCheckCircle,
      title: 'Your Rights',
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access your personal information and request corrections if it is inaccurate or incomplete.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You can request a copy of your data in a structured, commonly used format for transfer to another service provider.'
        },
        {
          subtitle: 'Deletion and Restriction',
          text: 'You have the right to request deletion of your personal information or restrict its processing under certain circumstances.'
        },
        {
          subtitle: 'Opt-Out',
          text: 'You can opt out of marketing communications at any time by following the unsubscribe instructions in our emails or contacting us directly.'
        }
      ]
    }
  ];

  const additionalPoints = [
    {
      title: 'Cookies and Tracking',
      text: 'We use cookies and similar technologies to enhance your experience, analyze site usage, and assist in our marketing efforts. You can control cookie preferences through your browser settings.'
    },
    {
      title: 'Third-Party Services',
      text: 'We may share information with trusted third-party service providers who assist us in operating our business, such as cloud storage providers, analytics services, and communication platforms. These parties are contractually obligated to protect your information.'
    },
    {
      title: 'International Transfers',
      text: 'Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this policy.'
    },
    {
      title: 'Children\'s Privacy',
      text: 'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take steps to delete it.'
    },
    {
      title: 'Changes to This Policy',
      text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#00528A]/95 z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0d2d4a] to-[#0A2540]" />
        </div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00A8E1] rounded-full filter blur-[120px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <FiShield className="w-12 h-12 text-[#00A8E1]" />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              className="text-xl text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your privacy and data security are our top priorities
            </motion.p>

            <motion.p
              className="text-sm text-gray-300 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Last Updated: December 9, 2025
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-l-4 border-[#00A8E1]">
              <h2 className="text-2xl font-bold text-[#0A2540] dark:text-white mb-4">
                Our Commitment to Your Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At Novaro Solutions, we understand that trust is the foundation of every customer relationship. This Privacy Policy explains how we collect, use, protect, and share your personal information when you use our customer service solutions and interact with our website.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By using our services, you agree to the terms outlined in this policy. We encourage you to read this document carefully and contact us if you have any questions or concerns.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#00A8E1] to-[#0BC5EA] rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] dark:text-white">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {section.content.map((item, idx) => (
                      <div key={idx} className="pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-[#0A2540] dark:text-white mb-2">
                          {item.subtitle}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Important Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-[#0A2540] to-[#00528A] rounded-2xl shadow-lg p-8 text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Additional Important Information
                </h2>
                <div className="space-y-6">
                  {additionalPoints.map((point, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3 text-[#00A8E1]">
                        {point.title}
                      </h3>
                      <p className="text-gray-100 leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-2 border-[#00A8E1]/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00A8E1] rounded-xl flex items-center justify-center">
                  <FiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0A2540] dark:text-white mb-2">
                    Questions About Your Privacy?
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please do not hesitate to contact us:
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 space-y-3">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-[#0A2540] dark:text-white">Email:</strong> support@novarosolutions.com
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-[#0A2540] dark:text-white">Address:</strong> Novaro Solutions Privacy Team
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  We will respond to your inquiry within 30 days of receipt.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;