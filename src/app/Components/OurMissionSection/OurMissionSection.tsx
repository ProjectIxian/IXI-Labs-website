import classes from './OurMissionSection.module.scss';
import ContentWrapper from '@/app/Components/ContentWrapper/ContentWrapper';
import Text from '@/app/Components/Text/Text';
import { useTranslations } from 'next-intl';

const OurMissionSection = () => {
  const t = useTranslations('OurMission');

  return (
    <section className={classes.ourMission}>
      <ContentWrapper className={classes.content}>
        <div className={classes.header}>
          <Text as={'h1'} type={'title-03'}>
            {t.rich('title', {
              blue: (chunks) => <span className={'blueText'}>{chunks}</span>,
            })}
          </Text>
          <div className={classes.rightText}>
            <Text type={'body-03'} as={'div'}>
              {t.rich('subtitle', {
                blue: (chunks) => <span className={'blueText'}>{chunks}</span>,
              })}
            </Text>
          </div>
        </div>
        <div className={classes.cards}>
          <div className={classes.info}>
            <Text type={'title-04'}>{t('info1.title')}</Text>
            <Text type={'subtitle-03'}>{t('info1.subtitle')}</Text>
            <Text type={'body-03'}>{t('info1.body')}</Text>
          </div>
          <div className={classes.info}>
            <Text type={'title-04'}>{t('info2.title')}</Text>
            <Text type={'subtitle-03'}>{t('info2.subtitle')}</Text>
            <Text type={'body-03'}>{t('info2.body')}</Text>
          </div>
          <div className={classes.info}>
            <Text type={'title-04'}>
              {t.rich('info3.title', {
                small: (chunks) => <Text type={'subtitle-01'}>{chunks}</Text>,
              })}
            </Text>
            <Text type={'subtitle-03'}>{t('info3.subtitle')}</Text>
            <Text type={'body-03'}>{t('info3.body')}</Text>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default OurMissionSection;
