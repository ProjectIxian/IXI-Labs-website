import classes from './CuttingEdgeSection.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Image from 'next/image';
import cuttingEdgeImg from '../../../public/assets/cutting-edge-bg.svg';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Button from '@/components/Button/Button';
import Text from '@/components/Text/Text';

const CuttingEdgeSection = () => {
  const t = useTranslations('CuttingEdgeSection');

  return (
    <section className={classes.cuttingEdge}>
      <Image
        priority
        src={cuttingEdgeImg}
        alt={'cutting-edge-img'}
        className={classes.bgImage}
        height={448}
      />
      <ContentWrapper className={classes.wrapper}>
        <div className={classes.content}>
          <Text type={'title-05'}>{t('title')}</Text>
          <Button>
            <Link href={t('bookUrl')}>{t('bookHere')}</Link>
          </Button>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default CuttingEdgeSection;
