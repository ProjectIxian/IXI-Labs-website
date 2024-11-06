import classes from './SolvingTheProblemSection.module.scss';
import ContentWrapper from '@/app/Components/ContentWrapper/ContentWrapper';
import Text from '@/app/Components/Text/Text';
import SolvingAccordion from '@/app/Components/SolvingAccordion/SolvingAccordion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import solvingProblemImg from '../../../../public/assets/solving-problem-img.svg';

const SolvingTheProblemSection = () => {
  const t = useTranslations('SolvingTheProblem');

  return (
    <section className={classes.solvingTheProblem}>
      <ContentWrapper className={classes.wrapper}>
        <div className={classes.content}>
          <Text as={'h1'} type={'title-03'}>
            {t('title1')} <span className={'blueText'}>{t('title2')}</span>
          </Text>
          <Text as={'div'} type={'body-02'} className={classes.subtitle}>
            {t('subtitle')}
          </Text>
          <SolvingAccordion />
        </div>
        <Image
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
