import { TitleSection } from '@widgets/1-title-section';
import { RoadMapSection } from '@widgets/2-roadmap-section';
import { EconomicsSecion } from '@widgets/3-economics-section/';
import { HowToBuySection } from '@widgets/4-how-to-buy-section';
import { Footer } from '@widgets/5-footer';

const LandingPage = () => {
  return (
    <>
      <TitleSection />
      <RoadMapSection />
      <EconomicsSecion />
      <HowToBuySection />
      <Footer />
    </>
  );
}

export { LandingPage };