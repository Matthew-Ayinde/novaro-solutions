'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiCheckCircle, FiAlertTriangle, FiShield, FiUsers, FiDollarSign } from 'react-icons/fi';

const Terms = () => {
  const sections = [
    {
      icon: FiCheckCircle,
      title: 'Acceptance of Terms',
      content: [
        {
          text: 'By accessing or using Novaro Solutions\' services, website, or any related platforms, you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you ("Client," "you," or "your") and Novaro Solutions ("we," "us," or "our").'
        },
        {
          text: 'If you are entering into this agreement on behalf of a company or organization, you represent that you have the authority to bind such entity to these terms. If you do not agree to these terms, you must not use our services.'
        },
        {
          text: 'We reserve the right to modify these terms at any time. We will notify you of any material changes, and your continued use of our services after such modifications constitutes your acceptance of the updated terms.'
        }
      ]
    },
    {
      icon: FiUsers,
      title: 'Service Description',
      content: [
        {
          subtitle: 'Our Services',
          text: 'Novaro Solutions provides comprehensive customer service and support solutions including but not limited to call center services, email support, live chat support, technical assistance, and customer relationship management on behalf of our clients.'
        },
        {
          subtitle: 'Service Scope',
          text: 'The specific services, service levels, and deliverables will be outlined in your service agreement or statement of work. We commit to providing services with professionalism, expertise, and in accordance with industry best practices.'
        },
        {
          subtitle: 'Service Modifications',
          text: 'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice. We will work with you to minimize any disruption to your business operations.'
        }
      ]
    },
    {
      icon: FiShield,
      title: 'Client Responsibilities',
      content: [
        {
          subtitle: 'Information and Access',
          text: 'You agree to provide accurate, complete, and timely information necessary for us to deliver our services. This includes product information, training materials, access to relevant systems, and updates about changes to your business operations.'
        },
        {
          subtitle: 'Cooperation',
          text: 'You agree to cooperate with our team, respond to inquiries in a timely manner, and provide feedback to help us continuously improve our service delivery. Your designated contact person should be available for regular communication.'
        },
        {
          subtitle: 'Lawful Use',
          text: 'You agree to use our services only for lawful purposes and in compliance with all applicable laws and regulations. You must not use our services in any way that could harm, disable, or impair our operations or interfere with other clients\' use of our services.'
        },
        {
          subtitle: 'Brand Representation',
          text: 'You grant us permission to represent your brand in customer interactions and authorize us to act as your representative in communications with your customers, within the scope defined in your service agreement.'
        }
      ]
    },
    {
      icon: FiDollarSign,
      title: 'Payment Terms',
      content: [
        {
          subtitle: 'Fees and Billing',
          text: 'Service fees, billing frequency, and payment terms are specified in your service agreement. Unless otherwise stated, all fees are due within 30 days of invoice date. Fees are exclusive of taxes, which you are responsible for paying.'
        },
        {
          subtitle: 'Late Payments',
          text: 'Late payments may incur interest charges at the rate of 1.5% per month or the maximum rate permitted by law, whichever is lower. We reserve the right to suspend services for accounts with overdue balances exceeding 30 days.'
        },
        {
          subtitle: 'Fee Changes',
          text: 'We may adjust our fees with 60 days\' written notice. Continued use of our services after the notice period constitutes acceptance of the new fees. You may terminate the agreement if you do not accept the fee changes.'
        }
      ]
    },
    {
      icon: FiAlertTriangle,
      title: 'Confidentiality and Data Protection',
      content: [
        {
          subtitle: 'Confidential Information',
          text: 'Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of our business relationship. This includes but is not limited to business strategies, customer data, technical information, and trade secrets.'
        },
        {
          subtitle: 'Data Security',
          text: 'We implement industry-standard security measures to protect your data and your customers\' information. Our team members are trained on data protection and bound by confidentiality agreements. For more details, please refer to our Privacy Policy.'
        },
        {
          subtitle: 'Data Ownership',
          text: 'You retain ownership of all customer data and information provided to us. We use this data solely to provide services to you and will return or securely destroy it upon termination of our agreement, unless retention is required by law.'
        }
      ]
    }
  ];

  const additionalTerms = [
    {
      icon: FiCheckCircle,
      title: 'Intellectual Property',
      points: [
        'All intellectual property rights in our services, technology, processes, and methodologies remain our exclusive property.',
        'You retain all rights to your brand, trademarks, and customer data. You grant us a limited license to use your brand materials solely for providing services.',
        'Any improvements, insights, or methodologies developed during service delivery belong to Novaro Solutions unless otherwise agreed in writing.'
      ]
    },
    {
      icon: FiShield,
      title: 'Limitation of Liability',
      points: [
        'To the maximum extent permitted by law, our total liability for any claims arising from our services shall not exceed the fees paid by you in the 12 months preceding the claim.',
        'We are not liable for indirect, incidental, consequential, or punitive damages, including lost profits, data loss, or business interruption.',
        'We make reasonable efforts to provide accurate and reliable services but do not guarantee error-free or uninterrupted service availability.'
      ]
    },
    {
      icon: FiUsers,
      title: 'Indemnification',
      points: [
        'You agree to indemnify and hold harmless Novaro Solutions from any claims arising from: (a) your breach of these terms, (b) your violation of laws or third-party rights, or (c) content and information you provide.',
        'We agree to indemnify you against claims arising from our gross negligence, willful misconduct, or breach of confidentiality obligations.',
        'The indemnifying party shall have the right to control the defense of any claim, subject to the other party\'s right to participate with its own counsel.'
      ]
    },
    {
      icon: FiFileText,
      title: 'Term and Termination',
      points: [
        'The term of service begins on the effective date specified in your service agreement and continues for the agreed period, automatically renewing unless terminated.',
        'Either party may terminate with 60 days\' written notice. Immediate termination is permitted for material breach, bankruptcy, or violation of confidentiality obligations.',
        'Upon termination, you must pay all outstanding fees, and we will provide a reasonable transition period to minimize disruption to your operations.'
      ]
    }
  ];

  const legalPoints = [
    {
      title: 'Dispute Resolution',
      text: 'Any disputes arising from these terms shall first be addressed through good-faith negotiations. If unresolved within 30 days, disputes may be submitted to binding arbitration in accordance with applicable arbitration rules, unless otherwise prohibited by law.'
    },
    {
      title: 'Governing Law',
      text: 'These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which Novaro Solutions is registered, without regard to conflict of law principles.'
    },
    {
      title: 'Force Majeure',
      text: 'Neither party shall be liable for failure to perform obligations due to circumstances beyond their reasonable control, including natural disasters, war, terrorism, pandemics, or government actions.'
    },
    {
      title: 'Severability',
      text: 'If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.'
    },
    {
      title: 'Entire Agreement',
      text: 'These Terms of Service, together with your service agreement and Privacy Policy, constitute the entire agreement between you and Novaro Solutions regarding your use of our services and supersede all prior agreements.'
    },
    {
      title: 'Assignment',
      text: 'You may not assign or transfer these terms or your rights without our prior written consent. We may assign these terms in connection with a merger, acquisition, or sale of assets with notice to you.'
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

        {/* Static Background Elements - Removed infinite animation for performance */}
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#0BC5EA] rounded-full filter blur-[120px] opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <FiFileText className="w-12 h-12 text-[#00A8E1]" />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Terms of Service
            </motion.h1>

            <motion.p
              className="text-xl text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Clear guidelines for a successful partnership
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
                Welcome to Novaro Solutions
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of Novaro Solutions' customer service and support solutions. We believe in transparency and clear communication, so we've outlined these terms to ensure both parties understand their rights and responsibilities.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Please read these terms carefully. By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you have any questions, our team is always available to provide clarification.
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
                        {'subtitle' in item && item.subtitle && (
                          <h3 className="text-lg font-semibold text-[#0A2540] dark:text-white mb-2">
                            {item.subtitle}
                          </h3>
                        )}
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Terms Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {additionalTerms.map((term, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#00A8E1] rounded-lg flex items-center justify-center">
                        <term.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2540] dark:text-white">
                        {term.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {term.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <FiCheckCircle className="w-5 h-5 text-[#00A8E1] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Legal Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-[#0A2540] to-[#00528A] rounded-2xl shadow-lg p-8 text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Legal Provisions
                </h2>
                <div className="space-y-6">
                  {legalPoints.map((point, index) => (
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
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00A8E1] to-[#0BC5EA] rounded-2xl mb-6">
                  <FiFileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#0A2540] dark:text-white mb-4">
                  Questions About These Terms?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                  We are here to help. If you have any questions about these Terms of Service or need clarification on any points, please do not hesitate to reach out to our team.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 inline-block">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong className="text-[#0A2540] dark:text-white">Email:</strong> support@novarosolutions.com
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-[#0A2540] dark:text-white">Phone:</strong> Available through our contact page
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;