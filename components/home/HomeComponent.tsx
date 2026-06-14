'use client';
import { useState, useEffect } from 'react';
import ExpertsectionComponent from '@/components/Expertsection/CareoxExperienceComponent.tsx';

import HeroSection from '@/components/HeroSection/HeroSectionComponent';
import InfoSection from '@/components/InfoSection/InfoSectionComponent';
import CareoxSectionComponent from '@/components/careoxsection/CareoxSectionComponent';
import ServicesSection from '@/components/ServicesSection/ServicesSectionComponent';
import WhyCareox from '@/components/WhyCareox/WhycareoxComponent';
import HealConsciousSection from '@/components/HealConsciousSection/HealconsciousComponent';

const HomeComponent = () => {
  const [showConnect, setShowConnect] = useState(false);

  useEffect(() => {
    const shouldShow = sessionStorage.getItem('show_connect') === 'true';
    sessionStorage.removeItem('show_connect');
    setShowConnect(shouldShow);
  }, []);

  if (showConnect) {
    return null; 
  }

  return <HomeSections />;
};

function HomeSections() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <CareoxSectionComponent />
      <WhyCareox />
      <ServicesSection />
      <ExpertsectionComponent />
      <HealConsciousSection />
    </>
  );
}

export default HomeComponent;