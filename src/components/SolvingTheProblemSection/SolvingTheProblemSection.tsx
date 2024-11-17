import classes from './SolvingTheProblemSection.module.scss';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import solvingProblemImg from '../../../public/assets/solving-problem-img.svg';
import { Section } from '@/contants/contants';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import SolvingAccordion from '@/components/SolvingAccordion/SolvingAccordion';
import Text from '@/components/Text/Text';

const SolvingTheProblemSection = () => {
  const t = useTranslations('SolvingTheProblem');

  return (
    <section className={classes.solvingTheProblem} id={Section.SOLVING}>
      <ContentWrapper className={classes.wrapper}>
        <div className={classes.content}>
          <Text as={'h1'} type={'title-03'}>
            {t.rich('title', {
              blue: (chunks) => <span className={'blueText'}>{chunks}</span>,
            })}
          </Text>
          <Text as={'div'} type={'body-02'} className={classes.subtitle}>
            {t('subtitle')}
          </Text>
          <SolvingAccordion />
        </div>
        <Image
          priority
          src={solvingProblemImg}
          alt={'solving-problem-img'}
          className={classes.solvingImage}
          width={596}
          height={604}
        />
      </ContentWrapper>
    </section>
  );
};

export default SolvingTheProblemSection;
