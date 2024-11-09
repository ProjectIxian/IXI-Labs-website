import classes from './UseCases.module.scss';

import Image from 'next/image';
import communications from '../../../public/assets/communications.svg';
import accessManagement from '../../../public/assets/access-management.svg';
import deviceConnectivity from '../../../public/assets/device-connectivity.svg';
import { useTranslations } from 'next-intl';
import { Section } from '@/contants/contants';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Text from '@/components/Text/Text';

const UseCases = () => {
  const t = useTranslations('UseCases');

  return (
    <section className={classes.useCases} id={Section.USE_CASES}>
      <ContentWrapper className={classes.content}>
        <div className={classes.text}>
          <Text type={'subtitle-03'} className={'blueText'}>
            {t('smallTitle')}
          </Text>
          <Text type={'title-04'} as={'h1'} className={classes.title}>
            {t('title')}
          </Text>
        </div>
        <div className={classes.cards}>
          <div className={classes.card}>
            <Image src={accessManagement} alt={'access-management-img'} />
            <Text type={'subtitle-03'}>{t('cards.card1.title')}</Text>
            <Text type={'body-03'}>{t('cards.card1.subtitle')}</Text>
            {/*<Text type={'link'}>{t('cards.readMore')}</Text>*/}
          </div>
          <div className={classes.card}>
            <Image src={deviceConnectivity} alt={'device-connectivity-img'} />
            <Text type={'subtitle-03'}>{t('cards.card2.title')}</Text>
            <Text type={'body-03'}>{t('cards.card2.subtitle')}</Text>
            {/*<Text type={'link'}>{t('cards.readMore')}</Text>*/}
          </div>
          <div className={classes.card}>
            <Image src={communications} alt={'communications-img'} />
            <Text type={'subtitle-03'}>{t('cards.card3.title')}</Text>
            <Text type={'body-03'}>{t('cards.card3.subtitle')}</Text>
            {/*<Text type={'link'}>{t('cards.readMore')}</Text>*/}
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default UseCases;
