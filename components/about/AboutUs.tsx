import React from 'react';
import AboutHero from './AboutHero';
import OurStory from './OurStory';
import MissionVision from './MissionVision';
import CoreValues from './CoreValues';
import TheDifference from './TheDifference';
import OurTeam from './OurTeam';
import AboutCTA from './AboutCTA';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <TheDifference />
      <OurTeam />
      <AboutCTA />
    </div>
  );
};

export default AboutUs;
