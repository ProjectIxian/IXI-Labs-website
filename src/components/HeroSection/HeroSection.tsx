import classes from './HeroSection.module.scss';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import heroImage from '../../../public/assets/hero-image.svg';

import Link from 'next/link';
import { Section } from '@/contants/contants';
import Button from '@/components/Button/Button';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Text from '@/components/Text/Text';

const HeroSection = () => {
  const t = useTranslations('HeroSection');

  return (
    <section className={classes.heroSection}>
      <ContentWrapper className={classes.content}>
        <div className={classes.info}>
          <Text as={'h1'} type={'title-02'}>
            {t('title')}
          </Text>
          <Text type={'body-02'} as={'span'}>
            {t('subtitle')}
          </Text>
          <Link href={`#${Section.SOLVING}`}>
            <Button variant={'outlined'}>{t('button')}</Button>
          </Link>
        </div>
        <Image
          priority
          src={heroImage}
          alt={'hero-image'}
          className={classes.heroImage}
          width={625}
          height={640}
        />
      </ContentWrapper>
    </section>
  );
};

export default HeroSection;
