import classes from './ContentWrapper.module.scss';
import { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface ContentWrapperProps extends PropsWithChildren {
  className?: string;
}

const ContentWrapper = ({ className, children }: ContentWrapperProps) => {
  return (
    <div className={classNames(classes.contentWrapper, className)}>
      {children}
    </div>
  );
};

export default ContentWrapper;
