import React from 'react';
import ContactHero from './ContactHero';
import ContactMethods from './ContactMethods';
import ContactForm from './ContactForm';
import WhatHappensNext from './WhatHappensNext';
import ContactFAQ from './ContactFAQ';

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactMethods />
      <div id="form">
        <ContactForm />
      </div>
      <WhatHappensNext />
      <ContactFAQ />
    </div>
  );
};

export default ContactUs;
