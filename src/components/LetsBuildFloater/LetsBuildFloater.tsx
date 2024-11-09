import classes from './LetsBuildFloater.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Button from '@/components/Button/Button';
import Text from '@/components/Text/Text';

const LetsBuildFloater = () => {
  const t = useTranslations('BuildFloater');

  return (
    <section className={classes.letsBuildFloater}>
      <Text as={'h1'} type={'title-03'}>
        {t('title')}
      </Text>
      <Button variant={'outlined'}>
        <Link href={t('bookUrl')}>{t('bookCall')}</Link>
      </Button>
    </section>
  );
};

export default LetsBuildFloater;
