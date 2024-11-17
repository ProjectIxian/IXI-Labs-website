'use client';

import classes from './HamburgerMenu.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Routes, Section } from '@/contants/contants';
import Button from '@/components/Button/Button';

const HamburgerMenu = () => {
  const t = useTranslations('Navbar');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={classes.hamburgerMenu}>
      <Button>
        <Link href={t('bookUrl')}>{t('bookHere')}</Link>
      </Button>
      <button className={classes.hamburgerIcon} onClick={toggleMenu}>
        <span className={classNames({ [classes.open]: isOpen })}></span>
        <span className={classNames({ [classes.open]: isOpen })}></span>
        <span className={classNames({ [classes.open]: isOpen })}></span>
      </button>
      <div className={classNames(classes.menu, { [classes.open]: isOpen })}>
        <Link href={`${Routes.INDEX}#${Section.SERVICES}`} onClick={toggleMenu}>
          {t('services')}
        </Link>
        <Link
          href={`${Routes.INDEX}#${Section.USE_CASES}`}
          onClick={toggleMenu}
        >
          {t('useCases')}
        </Link>
        <Link
          href={`${Routes.INDEX}#${Section.TECH_PRODUCTS}`}
          onClick={toggleMenu}
        >
          {t('tech')}
        </Link>
      </div>
    </section>
  );
};

export default HamburgerMenu;
