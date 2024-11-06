import classes from './Navbar.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ContentWrapper from '@/app/Components/ContentWrapper/ContentWrapper';
import Button from '@/app/Components/Button/Button';
import Image from 'next/image';
import spixiLabsLogo from '../../../../public/assets/spixi-labs-logo.svg';
import { Section } from '@/app/Contants/contants';

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
        <Button>{t('bookHere')}</Button>
      </ContentWrapper>
    </nav>
  );
};

export default Navbar;
