import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import HeroSection from '@/components/wedding/HeroSection';
import CountdownSection from '@/components/wedding/CountdownSection';
import OurStorySection from '@/components/wedding/OurStorySection';
import GallerySection from '@/components/wedding/GallerySection';
import EventDetailsSection from '@/components/wedding/EventDetailsSection';
import RSVPSection from '@/components/wedding/RSVPSection';
import FooterSection from '@/components/wedding/FooterSection';
import SplashScreen from '@/components/wedding/SplashScreen';

import coupleImg from '@/assets/couple.jpeg';
import moment1 from '@/assets/moment1.jpeg';
import moment2 from '@/assets/moment2.jpeg';

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070',
  couple: coupleImg,
  venue: moment2,
  reception: moment1,
  divider: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070',
};

const galleryImages = [
  { src: IMAGES.venue, alt: 'Local da cerimônia' },
  { src: IMAGES.reception, alt: 'Mesa da recepção' },
  { src: IMAGES.couple, alt: 'Foto do casal' },
];

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showSplash ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSplash]);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <SplashScreen key="splash" onOpen={() => setShowSplash(false)} />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="min-h-screen bg-background overflow-x-hidden"
        >
          <HeroSection heroImage={IMAGES.hero} dividerImage={IMAGES.divider} />
          <CountdownSection />
          <OurStorySection coupleImage={IMAGES.couple} />
          <GallerySection images={galleryImages} />
          <EventDetailsSection />
          <RSVPSection />
          <FooterSection />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
