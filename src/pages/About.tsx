import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/ui/PageBanner';
import CompanyStory from '../components/about/CompanyStory';
import VisionMission from '../components/about/VisionMission';
import StatsStrip from '../components/about/StatsStrip';
import CompanyValues from '../components/about/CompanyValues';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — New House Decoration</title>
        <meta name="description" content="Learn about New House Decoration's story, vision, mission, and values." />
      </Helmet>
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />
      <CompanyStory />
      <VisionMission />
      <StatsStrip />
      <CompanyValues />
    </>
  );
}
