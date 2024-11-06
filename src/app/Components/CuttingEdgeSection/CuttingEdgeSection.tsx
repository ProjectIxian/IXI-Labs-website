import classes from './CuttingEdgeSection.module.scss';
import ContentWrapper from '@/app/Components/ContentWrapper/ContentWrapper';
import { useTranslations } from 'next-intl';
import Text from '@/app/Components/Text/Text';
import Image from 'next/image';
import cuttingEdgeImg from '../../../../public/assets/cutting-edge-bg.svg';
import Button from '@/app/Components/Button/Button';

const CuttingEdgeSection = () => {
  const t = useTranslations('CuttingEdgeSection');

  return (
    <section className={classes.cuttingEdge}>
      <Image
        src={cuttingEdgeImg}
        alt={'cutting-edge-img'}
        className={classes.bgImage}
        height={448}
      />
      <ContentWrapper className={classes.wrapper}>
        <div className={classes.content}>
          <Text type={'title-05'}>{t('title')}</Text>
          <Button><Link href={t('bookUrl')}>{t('bookHere')}</Link></Button>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default CuttingEdgeSection;
