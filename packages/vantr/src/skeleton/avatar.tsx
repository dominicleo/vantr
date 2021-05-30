import * as React from 'react';
import classNames from 'classnames';
import Element, { SkeletonElementProps } from './element';

export type SkeletonAvatarProps = Omit<SkeletonElementProps, 'prefixCls'>;

const prefixCls = 'vanr-skeleton';

const SkeletonAvatar = (props: SkeletonAvatarProps) => {
  const { className, style, shape, active, ...rest } = props;

  const classes = classNames(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-${shape}`]: true,
    [`${prefixCls}-active`]: active,
    [className]: !!className,
  });

  return (
    <div className={classes} style={style}>
      <Element prefixCls={`${prefixCls}-avatar`} {...rest} />
    </div>
  );
};

SkeletonAvatar.defaultProps = {
  size: 'md',
  shape: 'circle',
};

export default SkeletonAvatar;
