import styles from './page.module.scss';
import HeroSection from '@/app/Components/HeroSection/HeroSection';
import OurMissionSection from '@/app/Components/OurMissionSection/OurMissionSection';
import SolvingTheProblemSection from '@/app/Components/SolvingTheProblemSection/SolvingTheProblemSection';
import CuttingEdgeSection from '@/app/Components/CuttingEdgeSection/CuttingEdgeSection';
import UseCases from '@/app/Components/UseCases/UseCases';
import LatestProjects from '@/app/Components/LatestProjects/LatestProjects';
import OurServicesSection from '@/app/Components/OurServicesSection/OurServicesSection';

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
