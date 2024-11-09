import classes from './Footer.module.scss';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import footerLogo from '../../../public/assets/footer-logo.svg';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Text from '@/components/Text/Text';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className={classes.footer}>
      <ContentWrapper className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.leftContent}>
            <Image src={footerLogo} alt={'footer-img'} width={48} height={48} />
            <Text type={'subtitle-02'}>{t('title')}</Text>
          </div>
          <div className={classes.rightContent}>
            <div className={classes.singleColumn}>
              <Text type={'caption-02'}>{t('contact.slo.company')}</Text>
              <Text type={'caption-02'}>{t('contact.slo.street')}</Text>
              <Text type={'caption-02'}>{t('contact.slo.city')}</Text>
              <Text type={'caption-02'}>{t('contact.slo.country')}</Text>
            </div>
            <div className={classes.singleColumn}>
              <Text type={'caption-02'}>{t('contact.eng.company')}</Text>
              <Text type={'caption-02'}>{t('contact.eng.street')}</Text>
              <Text type={'caption-02'}>{t('contact.eng.city')}</Text>
              <Text type={'caption-02'}>{t('contact.eng.country')}</Text>
            </div>
          </div>
        </div>
        <div className={classes.divider} />
        <div className={classes.copyright}>
          <Text type={'caption-01'}>
            {t('copyright', {
              year: new Date().getFullYear()?.toString(),
            })}
          </Text>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
