import classes from './Navbar.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Image from 'next/image';
import spixiLabsLogo from '../../../public/assets/spixi-labs-logo.svg';
import { Section } from '@/contants/contants';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Button from '@/components/Button/Button';

const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <nav className={classes.navbar}>
      <ContentWrapper className={classes.content}>
        <div className={classes.links}>
          <Image src={spixiLabsLogo} alt={'spixi-labs-logo'} />
          <Link href={`#${Section.SERVICES}`}>{t('services')}</Link>
          <Link href={`#${Section.USE_CASES}`}>{t('useCases')}</Link>
          <Link href={`#${Section.TECH_PRODUCTS}`}>{t('tech')}</Link>
        </div>
        <Button>
          <Link href={t('bookUrl')}>{t('bookHere')}</Link>
        </Button>
      </ContentWrapper>
    </nav>
  );
};

export default Navbar;
