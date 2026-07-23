import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import GalleryPreview from '../components/home/GalleryPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>New House Decoration — Premium Interior Finishing</title>
        <meta
          name="description"
          content="Premium interior finishing, decoration, and construction services. Where Quality Meets Design."
        />
      </Helmet>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <GalleryPreview />
      <WhyChooseUs />
      <HomeCTA />
    </>
  );
}
