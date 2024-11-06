import classes from './LatestProjects.module.scss';
import ContentWrapper from '@/app/Components/ContentWrapper/ContentWrapper';
import { useTranslations } from 'next-intl';
import Text from '@/app/Components/Text/Text';
import Image from 'next/image';
import ixiNamesBg from '../../../../public/assets/ixi-names-bg.png';
import spixiBg from '../../../../public/assets/spixi-bg.png';
import ledgerBg from '../../../../public/assets/ledger-bg.png';
import ixiNamesLogo from '../../../../public/assets/ixi-names-logo.svg';
import spixiLogo from '../../../../public/assets/spixi-logo.svg';
import ixianLogo from '../../../../public/assets/ixian-logo.svg';
import labsBg from '../../../../public/assets/labs-bg.svg';
import LetsBuildFloater from '@/app/Components/LetsBuildFloater/LetsBuildFloater';
import Link from 'next/link';
import { Section } from '@/app/Contants/contants';

const LatestProjects = () => {
  const t = useTranslations('LatestProjects');

  return (
    <section className={classes.latestProjects} id={Section.TECH_PRODUCTS}>
      <ContentWrapper className={classes.content}>
        <Image src={labsBg} alt={'labs-img'} className={classes.labsBg} />
        <div className={classes.text}>
          <Text type={'subtitle-03'} className={'blueText'}>
            {t('smallTitle')}
          </Text>
          <Text type={'title-04'}>{t('title')}</Text>
        </div>
        <div className={classes.cards}>
          <div className={classes.card}>
            <Image
              src={ixiNamesBg}
              alt={'ixi-names-bg'}
              className={classes.bgImage}
            />
            <Image src={ixiNamesLogo} alt={'ixi-logo'} />
            <Text type={'title-05'} as={'h1'}>
              {t('cards.card1.title')}
            </Text>
            <Text type={'body-03'}>{t('cards.card1.subtitle')}</Text>
            <Text type={'subtitle-03'}>{t('cards.card1.additional')}</Text>
          </div>
          <div className={classes.card}>
            <Image src={spixiBg} alt={'spixi-bg'} className={classes.bgImage} />
            <Image src={spixiLogo} alt={'spixi-logo'} />
            <Text type={'title-05'} as={'h1'}>
              {t('cards.card2.title')}
            </Text>
            <Text type={'body-03'}>{t('cards.card2.subtitle')}</Text>
            <Link href={'https://www.spixi.io/'} target={'_blank'}>
              <Text type={'link'}>{t('cards.card2.additional')}</Text>
            </Link>
          </div>
          <div className={classes.card}>
            <Image
              src={ledgerBg}
              alt={'ledger-bg'}
              className={classes.bgImage}
            />
            <Image src={ixianLogo} alt={'ixian-logo'} />
            <Text type={'title-05'} as={'h1'}>
              {t('cards.card3.title')}
            </Text>
            <Text type={'body-03'}>{t('cards.card3.subtitle')}</Text>
            <Link href={'https://www.ixian.io/'} target={'_blank'}>
              <Text type={'link'}>{t('cards.card3.additional')}</Text>
            </Link>
          </div>
        </div>
        <LetsBuildFloater />
      </ContentWrapper>
    </section>
  );
};

export default LatestProjects;
