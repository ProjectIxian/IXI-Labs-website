'use client';

import classes from './SolvingAccordion.module.scss';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import { useTranslations } from 'next-intl';
import Text from '@/app/Components/Text/Text';
import expandImg from '../../../../public/assets/expand.png';
import Image from 'next/image';

const SolvingAccordion = () => {
  const t = useTranslations('SolvingTheProblem');

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <Image
            className={classes.expand}
            src={expandImg}
            alt="Chevron Down"
          />
        </>
      }
      className={classes.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${classes.itemBtn} ${isEnter && classes.itemBtnExpanded}`,
      }}
      contentProps={{ className: classes.itemContent }}
      panelProps={{ className: classes.itemPanel }}
    />
  );

  return (
    <Accordion
      className={classes.solvingAccordion}
      transition
      transitionTimeout={250}
    >
      <AccordionItem initialEntered header={t('accordion1.title')}>
        <Text type={'body-02'}>{t('accordion1.subtitle')}</Text>
        <Text type={'body-02'}>{t('accordion1.subtitle2')}</Text>
      </AccordionItem>
      <AccordionItem header={t('accordion2.title')}>
        <Text type={'body-02'}>{t('accordion2.subtitle')}</Text>
      </AccordionItem>
      <AccordionItem header={t('accordion3.title')}>
        <Text type={'body-02'}>{t('accordion3.subtitle')}</Text>
      </AccordionItem>
    </Accordion>
  );
};

export default SolvingAccordion;
