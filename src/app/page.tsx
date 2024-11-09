import styles from './page.module.scss';
import HeroSection from '@/components/HeroSection/HeroSection';
import OurMissionSection from '@/components/OurMissionSection/OurMissionSection';
import SolvingTheProblemSection from '@/components/SolvingTheProblemSection/SolvingTheProblemSection';
import OurServicesSection from '@/components/OurServicesSection/OurServicesSection';
import CuttingEdgeSection from '@/components/CuttingEdgeSection/CuttingEdgeSection';
import UseCases from '@/components/UseCases/UseCases';
import LatestProjects from '@/components/LatestProjects/LatestProjects';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <OurMissionSection />
      <SolvingTheProblemSection />
      <OurServicesSection />
      <CuttingEdgeSection />
      <UseCases />
      <LatestProjects />
    </main>
  );
}
