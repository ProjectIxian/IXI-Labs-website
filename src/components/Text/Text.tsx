import classes from './Text.module.scss';
import { ElementType, PropsWithChildren } from 'react';
import classNames from 'classnames';

type TextAsTypes = 'span' | 'div' | 'p' | 'h1';
type TextTypes =
  | 'subtitle-01'
  | 'subtitle-02'
  | 'subtitle-03'
  | 'body-02'
  | 'body-03'
  | 'title-03'
  | 'title-04'
  | 'title-05'
  | 'title-06'
  | 'caption-01'
  | 'caption-02'
  | 'caption-03'
  | 'link';

interface TextProps extends PropsWithChildren {
  className?: string;
  as?: TextAsTypes;
  type: TextTypes;
}

const Text = ({ className, as = 'span', type, children }: TextProps) => {
  const Component = as as ElementType;
  const typeClass = type ? classes[type] : '';

  return (
    <Component className={classNames(typeClass, className)}>
      {children}
    </Component>
  );
};

export default Text;
