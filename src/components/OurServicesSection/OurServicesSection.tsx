import classes from './OurServicesSection.module.scss';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import pubKeyImg from '../../../public/assets/pub-key-img.svg';
import authImg from '../../../public/assets/auth-img.svg';
import secCommImg from '../../../public/assets/sec-comm-img.svg';
import { Section } from '@/contants/contants';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Text from '@/components/Text/Text';

const OurServicesSection = () => {
  const t = useTranslations('OurServices');

  return (
    <section className={classes.ourServices} id={Section.SERVICES}>
      <ContentWrapper className={classes.content}>
        <div className={classes.text}>
          <Text type={'subtitle-03'} className={'blueText'}>
            {t('smallTitle')}
          </Text>
          <Text type={'title-04'}>{t('title')}</Text>
          <Text type={'body-03'} as={'div'} className={classes.subtitle}>
            {t.rich('subtitle', {
              blue: (chunks) => <span className={'blueText'}>{chunks}</span>,
            })}
          </Text>
        </div>
        <div className={classes.cards}>
          <div className={classes.card}>
            <Image priority src={pubKeyImg} alt={'public-key-as-identity'} />
            <Text type={'subtitle-03'}>{t('cards.card1.title')}</Text>
            <Text type={'body-02'}>{t('cards.card1.subtitle')}</Text>
          </div>
          <div className={classes.card}>
            <Image priority src={authImg} alt={'self-sovereign-auth'} />
            <Text type={'subtitle-03'}>{t('cards.card2.title')}</Text>
            <Text type={'body-02'}>{t('cards.card2.subtitle')}</Text>
          </div>
          <div className={classes.card}>
            <Image
              priority
              src={secCommImg}
              alt={'secure-communication-protocol'}
            />
            <Text type={'subtitle-03'}>{t('cards.card3.title')}</Text>
            <Text type={'body-02'}>{t('cards.card3.subtitle')}</Text>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default OurServicesSection;
