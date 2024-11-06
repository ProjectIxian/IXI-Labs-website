import classes from './HeroSection.module.scss';
import ContentWrapper from '@/app/Components/ContentWrapper/ContentWrapper';
import { useTranslations } from 'next-intl';
import Text from '@/app/Components/Text/Text';
import Image from 'next/image';
import heroImage from '../../../../public/assets/hero-image.svg';
import Button from '@/app/Components/Button/Button';

const HeroSection = () => {
  const t = useTranslations('HeroSection');

  return (
    <section className={classes.heroSection}>
      <ContentWrapper className={classes.content}>
        <div className={classes.info}>
          <Text as={'h1'} type={'title-03'}>
            {t('title')}
          </Text>
          <Text type={'body-02'} as={'span'}>
            {t('subtitle')}
          </Text>
          <Button variant={'outlined'}>{t('button')}</Button>
        </div>
        <Image
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
