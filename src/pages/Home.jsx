import HeroSection from '../components/wedding/HeroSection';
import CountdownSection from '../components/wedding/CountdownSection';
import OurStorySection from '../components/wedding/OurStorySection';
import GallerySection from '../components/wedding/GallerySection';
import EventDetailsSection from '../components/wedding/EventDetailsSection';
import RSVPSection from '../components/wedding/RSVPSection';
import FooterSection from '../components/wedding/FooterSection';

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070',
  couple: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069',
  venue: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074',
  reception: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070',
  divider: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070',
};

const galleryImages = [
  { src: IMAGES.venue, alt: 'Local da cerimônia' },
  { src: IMAGES.reception, alt: 'Mesa da recepção' },
  { src: IMAGES.couple, alt: 'Foto do casal' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection heroImage={IMAGES.hero} dividerImage={IMAGES.divider} />
      <CountdownSection />
      <OurStorySection coupleImage={IMAGES.couple} />
      <GallerySection images={galleryImages} />
      <EventDetailsSection dividerImage={IMAGES.divider} />
      <RSVPSection />
      <FooterSection />
    </div>
  );
}