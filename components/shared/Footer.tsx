'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import { ApplicationRoutes } from '@/constants/ApplicationRoutes';
import Image from 'next/image';
import images from '@/public/images';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: ApplicationRoutes.Home },
        { name: 'About Us', path: ApplicationRoutes.About },
        { name: 'Contact', path: ApplicationRoutes.Contact },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Customer Support', path: '/' },
        { name: 'Technical Support', path: '/' },
        { name: 'Social Media Care', path: '/' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#00528A] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href={ApplicationRoutes.Home}>
                <div className="flex items-center gap-3 mb-6 cursor-pointer group">
                  <Image src={images.footerLogo} alt="Novaro Logo" width={175} height={65} className="object-contain" />
                </div>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Professional customer support solutions that help businesses scale and deliver exceptional service experiences.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00A8E1] transition-colors group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-bold mb-6 text-[#00A8E1]">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path}>
                      <motion.span
                        className="text-gray-300 hover:text-[#00A8E1] transition-colors cursor-pointer inline-block"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-[#00A8E1]">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#00A8E1] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Business Avenue<br />
                  Suite 100<br />
                  City, State 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[#00A8E1] flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-[#00A8E1] transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[#00A8E1] flex-shrink-0" />
                <a href="mailto:support@novarosolutions.com" className="text-gray-300 hover:text-[#00A8E1] transition-colors">
                  support@novarosolutions.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Novaro Global Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#00A8E1] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#00A8E1] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
