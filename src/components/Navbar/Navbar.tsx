'use client';

import classes from './Navbar.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Image from 'next/image';
import spixiLabsLogo from '../../../public/assets/spixi-labs-logo.svg';
import { Routes, Section } from '@/contants/contants';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Button from '@/components/Button/Button';
import { useMediaQuery } from 'react-responsive';
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu';
import classNames from 'classnames';

const Navbar = () => {
  const t = useTranslations('Navbar');
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const desktopMenu = (
    <>
      <div className={classes.links}>
        <Link href={Routes.INDEX}>
          <Image src={spixiLabsLogo} alt={'spixi-labs-logo'} />
        </Link>
        <Link href={`${Routes.INDEX}#${Section.SERVICES}`}>
          {t('services')}
        </Link>
        <Link href={`${Routes.INDEX}#${Section.USE_CASES}`}>
          {t('useCases')}
        </Link>
        <Link href={`${Routes.INDEX}#${Section.TECH_PRODUCTS}`}>
          {t('tech')}
        </Link>
      </div>
      <Button>
        <Link href={t('bookUrl')}>{t('bookHere')}</Link>
      </Button>
    </>
  );

  const mobileMenu = (
    <>
      <Link href={Routes.INDEX}>
        <Image src={spixiLabsLogo} alt={'spixi-labs-logo'} />
      </Link>
      <HamburgerMenu />
    </>
  );

  return (
    <nav className={classes.navbar}>
      <ContentWrapper
        className={classNames(classes.content, {
          [classes.contentMobile]: isMobile,
        })}
      >
        {isMobile ? mobileMenu : desktopMenu}
      </ContentWrapper>
    </nav>
  );
};

export default Navbar;
