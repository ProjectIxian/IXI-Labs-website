import classes from './LetsBuildFloater.module.scss';
import Link from 'next/link';
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
      <Button variant={'outlined'}><Link href={t('bookUrl')}>{t('bookCall')}</Link></Button>
    </section>
  );
};

export default LetsBuildFloater;
