import classes from './LetsBuildFloater.module.scss';
import Text from '@/app/Components/Text/Text';
import { useTranslations } from 'next-intl';
import Button from '@/app/Components/Button/Button';

const LetsBuildFloater = () => {
  const t = useTranslations('BuildFloater');

  return (
    <section className={classes.letsBuildFloater}>
      <Text as={'h1'} type={'title-03'}>
        {t('title')}
      </Text>
      <Text type={'body-02'}>{t('subtitle')}</Text>
      <Button variant={'outlined'}>{t('bookCall')}</Button>
    </section>
  );
};

export default LetsBuildFloater;